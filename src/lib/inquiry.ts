import { CONTACT_ENDPOINT, whatsappLink } from './constants'
import { profile } from '../data/profile'

export interface InquiryValues {
  name: string
  email: string
  need: string
  situation: string
  goal: string
}

export const CONTACT_NEED_EVENT = 'portfolio:contact-need'

export function requestContact(needId: string) {
  const url = new URL(window.location.href)
  url.searchParams.set('necesidad', needId)
  url.hash = 'contacto'
  window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`)
  window.dispatchEvent(new CustomEvent<string>(CONTACT_NEED_EVENT, { detail: needId }))

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.getElementById('contacto')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
}

export function inquiryBody(values: InquiryValues) {
  return [
    `Hola Milagros, soy ${values.name.trim()}.`,
    `Correo: ${values.email.trim()}`,
    `Qué necesito resolver: ${values.need}`,
    '',
    'Situación:',
    values.situation.trim(),
    '',
    'Qué me gustaría conseguir:',
    values.goal.trim(),
  ].join('\n')
}

export function inquiryMailto(values: InquiryValues) {
  const subject = encodeURIComponent(`Consulta de ${values.name.trim()}`)
  const body = encodeURIComponent(inquiryBody(values))
  return `mailto:${profile.email}?subject=${subject}&body=${body}`
}

export function inquiryWhatsapp(values: InquiryValues) {
  return whatsappLink(inquiryBody(values))
}

export function inquiryErrorCopy(detail: string) {
  if (/activat/i.test(detail)) {
    return 'El envío por correo todavía pide una confirmación en mi bandeja. Mientras tanto, podés mandar la misma consulta por WhatsApp o desde tu correo.'
  }

  if (/abort|network|failed|load/i.test(detail)) {
    return 'No hubo conexión para enviar la consulta. Podés mandarla por WhatsApp o por correo.'
  }

  return 'No pude enviar la consulta desde el formulario. Podés mandarla por WhatsApp o por correo, con el mismo texto.'
}

export async function sendInquiry(values: InquiryValues) {
  const controller = new AbortController()
  const timer = window.setTimeout(() => controller.abort(), 10000)

  try {
    const response = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify({
        name: values.name.trim(),
        email: values.email.trim(),
        _replyto: values.email.trim(),
        _subject: `Consulta de ${values.name.trim()} — portfolio`,
        _template: 'table',
        _captcha: 'false',
        necesidad: values.need,
        situacion: values.situation.trim(),
        objetivo: values.goal.trim(),
        origen: 'Portfolio',
      }),
    })

    let payload: { success?: string | boolean; message?: string } = {}

    try {
      payload = (await response.json()) as { success?: string | boolean; message?: string }
    } catch {
      payload = {}
    }

    const ok = response.ok && (payload.success === true || payload.success === 'true')

    return {
      ok,
      detail: payload.message ?? response.statusText,
    }
  } catch (error) {
    const detail = error instanceof Error ? error.message : 'network'
    return { ok: false, detail }
  } finally {
    window.clearTimeout(timer)
  }
}
