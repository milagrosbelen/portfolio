import { ChevronDown } from 'lucide-react'
import { useEffect, useId, useState, type FormEvent, type ReactNode } from 'react'
import { otherNeed, services } from '../data/needs'
import { CONTACT_NEED_EVENT } from '../lib/inquiry'
import { whatsappLink } from '../lib/constants'
import { cn } from '../lib/utils'
import { Button } from './Button'

type Values = {
  name: string
  need: string
  message: string
}

type FieldName = keyof Values
type FieldErrors = Partial<Record<FieldName, string>>

const emptyValues: Values = { name: '', need: '', message: '' }
const fieldOrder: FieldName[] = ['name', 'need', 'message']

function validate(values: Values): FieldErrors {
  const errors: FieldErrors = {}
  if (values.name.trim().length < 2) errors.name = 'Ingresá tu nombre.'
  if (!values.need) errors.need = 'Elegí qué necesitás.'
  if (values.message.trim().length < 12) errors.message = 'Contame un poco más sobre tu proyecto.'
  return errors
}

function whatsappMessage(values: Values) {
  return [
    'Hola Milagros, te contacto desde tu portfolio. Quiero trabajar con vos.',
    '',
    `Nombre: ${values.name.trim()}`,
    `Qué necesito: ${values.need}`,
    '',
    values.message.trim(),
  ].join('\n')
}

export function ClientInquiryForm() {
  const baseId = useId()
  const [values, setValues] = useState<Values>(emptyValues)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [opened, setOpened] = useState(false)

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
    setOpened(false)
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    const firstInvalid = fieldOrder.find((field) => nextErrors[field])
    if (firstInvalid) {
      document.getElementById(`${baseId}-${firstInvalid}`)?.focus()
      setOpened(false)
      return
    }

    const url = whatsappLink(whatsappMessage(values))
    const popup = window.open(url, '_blank', 'noopener,noreferrer')
    if (!popup) window.location.assign(url)
    setOpened(true)
  }

  const inputClass =
    'w-full rounded-xl border bg-[#090712] px-3.5 text-base text-foreground outline-none transition placeholder:text-muted/70 focus:border-[#793BFF]'

  return (
    <div className="mx-auto mt-12 max-w-xl rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(121,59,255,0.12),rgba(12,9,22,0.35))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-7">
      <h3 className="font-display text-center text-2xl font-semibold tracking-[-0.03em]">
        Quiero trabajar con vos
      </h3>
      <p className="mt-2 text-center text-sm leading-relaxed text-muted">
        Completá tus datos y el mensaje se abre directo en WhatsApp.
      </p>

      <form noValidate onSubmit={onSubmit} className="mt-6 space-y-4">
        <Field id={`${baseId}-name`} label="Nombre" error={errors.name}>
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

        <Field id={`${baseId}-need`} label="Qué necesitás" error={errors.need}>
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
                values.need ? 'text-foreground' : 'text-muted',
                errors.need ? 'border-danger' : 'border-line',
              )}
            >
              <option value="">Elegí una opción</option>
              {services.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}
              <option value={otherNeed}>{otherNeed}</option>
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-muted"
            />
          </div>
        </Field>

        <Field id={`${baseId}-message`} label="Mensaje" error={errors.message}>
          <textarea
            id={`${baseId}-message`}
            name="message"
            rows={4}
            value={values.message}
            onChange={(event) => update('message', event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? `${baseId}-message-error` : undefined}
            className={cn(
              inputClass,
              'min-h-28 resize-y py-3',
              errors.message ? 'border-danger' : 'border-line',
            )}
          />
        </Field>

        <Button type="submit" className="h-11 w-full px-4 text-sm sm:w-auto">
          Enviar por WhatsApp
        </Button>

        {opened ? (
          <p role="status" className="text-sm text-[#c4b5fd]">
            Se abrió WhatsApp con tu consulta.
          </p>
        ) : null}
      </form>
    </div>
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
