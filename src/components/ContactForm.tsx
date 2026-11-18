import { ChevronDown, ArrowRight } from 'lucide-react'
import { useEffect, useId, useState, type FormEvent, type ReactNode } from 'react'
import { jobNeed, otherNeed, services } from '../data/needs'
import { profile } from '../data/profile'
import {
  CONTACT_NEED_EVENT,
  inquiryErrorCopy,
  inquiryMailto,
  inquiryWhatsapp,
  sendInquiry,
  type InquiryValues,
} from '../lib/inquiry'
import { cn } from '../lib/utils'
import { Button } from './Button'

const emptyValues: InquiryValues = {
  name: '',
  email: '',
  need: '',
  situation: '',
  goal: '',
}

type FieldName = keyof InquiryValues
type FieldErrors = Partial<Record<FieldName, string>>
type Status = 'idle' | 'loading' | 'success' | 'error'

function validate(values: InquiryValues): FieldErrors {
  const errors: FieldErrors = {}

  if (values.name.trim().length < 2) errors.name = 'Ingresá tu nombre.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Ingresá un correo válido.'
  }
  if (!values.need) errors.need = 'Elegí el motivo de contacto.'
  if (values.situation.trim().length < 12) {
    errors.situation = 'Escribí tu mensaje.'
  }

  return errors
}

const fieldOrder: FieldName[] = ['name', 'email', 'need', 'situation']

export function ContactForm() {
  const baseId = useId()
  const [values, setValues] = useState<InquiryValues>(emptyValues)
  const [honey, setHoney] = useState('')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [errorCopy, setErrorCopy] = useState('')
  const [sent, setSent] = useState({ name: '', email: '' })

  useEffect(() => {
    const applyNeed = (needId: string) => {
      const match = services.find((item) => item.id === needId)
      if (!match) return
      setValues((current) => ({ ...current, need: match.title }))
      setErrors((current) => ({ ...current, need: undefined }))
    }

    const preset = new URLSearchParams(window.location.search).get('necesidad')
    if (preset) applyNeed(preset)

    const onNeed = (event: Event) => {
      applyNeed((event as CustomEvent<string>).detail)
    }

    window.addEventListener(CONTACT_NEED_EVENT, onNeed)
    return () => window.removeEventListener(CONTACT_NEED_EVENT, onNeed)
  }, [])

  function update(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    if (status === 'error') setStatus('idle')
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    const firstInvalid = fieldOrder.find((field) => nextErrors[field])
    if (firstInvalid) {
      document.getElementById(`${baseId}-${firstInvalid}`)?.focus()
      setStatus('idle')
      return
    }

    if (honey) {
      setStatus('error')
      setErrorCopy('No pude enviar la consulta. Podés escribirme por WhatsApp o por correo.')
      return
    }

    setStatus('loading')

    const result = await sendInquiry({ ...values, goal: values.situation.trim() })

    if (!result.ok) {
      setStatus('error')
      setErrorCopy(inquiryErrorCopy(result.detail))
      return
    }

    setSent({ name: values.name.trim(), email: values.email.trim() })
    setValues(emptyValues)
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-[1.5rem] border border-white/10 bg-[#0c0916]/80 px-6 py-10 text-foreground sm:px-8"
      >
        <p className="text-xs font-semibold tracking-[0.16em] text-positive uppercase">
          Consulta enviada
        </p>
        <h3 className="font-display mt-3 text-4xl leading-none font-semibold tracking-[-0.04em]">
          Gracias, {sent.name}.
        </h3>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
          Recibí tu mensaje. Te voy a responder a {sent.email}.
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-8"
          onClick={() => setStatus('idle')}
        >
          Enviar otra consulta
        </Button>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-xl border bg-[#090712] px-3.5 text-base text-foreground outline-none transition placeholder:text-muted/80 focus:border-[#793BFF]'

  return (
    <form
      noValidate
      onSubmit={(event) => {
        void onSubmit(event)
      }}
      aria-labelledby="contacto-titulo"
      className="relative px-4 py-5 text-foreground sm:px-6 sm:py-6"
    >
      <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          No completar
          <input
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          value={honey}
          onChange={(event) => setHoney(event.target.value)}
        />
        </label>
      </div>

      <fieldset disabled={status === 'loading'} className="min-w-0 space-y-5 border-0 p-0">
        <Field
          id={`${baseId}-name`}
          label="Nombre"
          error={errors.name}
        >
          <input
            id={`${baseId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update('name', event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${baseId}-name-error` : undefined}
            className={cn(inputClass, 'h-12', errors.name ? 'border-danger' : 'border-line')}
          />
        </Field>

        <Field id={`${baseId}-email`} label="Correo electrónico" error={errors.email}>
          <input
            id={`${baseId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={(event) => update('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${baseId}-email-error` : undefined}
            className={cn(inputClass, 'h-12', errors.email ? 'border-danger' : 'border-line')}
          />
        </Field>

        <Field id={`${baseId}-need`} label="Motivo de contacto" error={errors.need}>
          <div className="relative">
            <select
              id={`${baseId}-need`}
              name="need"
              value={values.need}
              onChange={(event) => update('need', event.target.value)}
              aria-invalid={Boolean(errors.need)}
              aria-describedby={errors.need ? `${baseId}-need-error` : undefined}
              className={cn(
                inputClass,
                'h-12 appearance-none pr-10',
                errors.need ? 'border-danger' : 'border-line',
              )}
            >
              <option value="">Elegí una opción</option>
              {services.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}
              <option value={jobNeed}>{jobNeed}</option>
              <option value={otherNeed}>{otherNeed}</option>
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-muted"
            />
          </div>
        </Field>

        <Field id={`${baseId}-situation`} label="Mensaje" error={errors.situation}>
          <textarea
            id={`${baseId}-situation`}
            name="message"
            rows={5}
            value={values.situation}
            onChange={(event) => update('situation', event.target.value)}
            aria-invalid={Boolean(errors.situation)}
            aria-describedby={errors.situation ? `${baseId}-situation-error` : undefined}
            className={cn(
              inputClass,
              'min-h-32 resize-y py-3',
              errors.situation ? 'border-danger' : 'border-line',
            )}
          />
        </Field>
      </fieldset>

      {status === 'error' ? (
        <div role="alert" className="mt-5 rounded-xl border border-danger/40 bg-[#2a1418] px-4 py-3 text-sm leading-relaxed text-danger">
          <p>{errorCopy}</p>
          <p className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-4">
            <a
              href={inquiryWhatsapp({ ...values, goal: values.situation.trim() })}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-4"
            >
              Enviar por WhatsApp
            </a>
            <a
              href={inquiryMailto({ ...values, goal: values.situation.trim() })}
              className="font-semibold underline underline-offset-4"
            >
              Enviar por correo
            </a>
          </p>
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 max-sm:pr-16 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status === 'loading'} className="w-full sm:w-auto">
          {status === 'loading' ? 'Enviando consulta…' : 'Enviar consulta'}
          {status === 'loading' ? null : <ArrowRight className="h-4 w-4 lg:hidden" aria-hidden="true" />}
        </Button>
        <p className="text-sm text-muted">
          Se envía a{' '}
          <a className="underline underline-offset-4" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          .
        </p>
      </div>
    </form>
  )
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  )
}
