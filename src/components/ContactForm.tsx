import { motion } from 'framer-motion'
import type { FormEvent } from 'react'
import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from './Button'

interface FormState {
  name: string
  email: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Contacto desde portfolio — ${form.name}`)
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )

    window.location.href = `mailto:milagrospedrasa@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
    setForm(initialState)
  }

  const inputClasses =
    'w-full rounded-[20px] border border-slate-200 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-slate-400 focus:border-primary/40 focus:ring-2 focus:ring-primary/10'

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="card-shadow rounded-[20px] border border-slate-100 bg-white p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Nombre
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClasses}
            placeholder="Tu nombre"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Email
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClasses}
            placeholder="tu@email.com"
          />
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-medium text-foreground">
        Mensaje
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClasses} resize-none`}
          placeholder="Contame sobre la oportunidad o proyecto..."
        />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" className="w-full sm:w-auto">
          Enviar mensaje
          <Send className="h-4 w-4" />
        </Button>
        {submitted && (
          <p className="text-sm text-slate-500">
            Se abrirá tu cliente de correo para enviar el mensaje.
          </p>
        )}
      </div>
    </motion.form>
  )
}
