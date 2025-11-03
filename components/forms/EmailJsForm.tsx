"use client"

import React, { FormEvent, useMemo, useState } from 'react'
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { sendEmail } from '@/lib/email'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export type FieldType = 'text' | 'email' | 'tel' | 'textarea' | 'select'

export type FieldConfig = {
  name: string
  label: string
  type: FieldType
  placeholder?: string
  required?: boolean
  colSpan?: 1 | 2
  options?: { label: string; value: string }[] // for select type
}

export type EmailJsFormProps = {
  title?: string
  description?: React.ReactNode
  fields: FieldConfig[]
  onSubmitAction?: (values: Record<string, string>) => Promise<void>
  submitLabel?: string
  columns?: 1 | 2
  className?: string
  templateId: string // required: component will send using EmailJS with this template
}

export default function EmailJsForm({ title, description, fields, onSubmitAction, submitLabel = 'Submit', columns = 2, className, templateId }: EmailJsFormProps) {
  const [values, setValues] = useState<Record<string, string>>(() => Object.fromEntries(fields.map(f => [f.name, ''])))
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<null | { type: 'success' | 'error'; text: string }>(null)

  // Keep keys stable even if fields array identity changes
  const fieldList = useMemo(() => fields, [fields])

  const reset = () => setValues(Object.fromEntries(fieldList.map(f => [f.name, ''])))

  const handleChange = (name: string, val: string) => {
    setValues(prev => ({ ...prev, [name]: val }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    // basic required fields validation
    const missing = fieldList.filter(f => f.required && !values[f.name])
    if (missing.length) {
      setStatus({ type: 'error', text: `Please fill the required fields: ${missing.map(m => m.label).join(', ')}` })
      return
    }

    try {
      setLoading(true)
      setStatus(null)
      // Always send via EmailJS using the provided templateId
      await sendEmail(values, { templateId })
      // Optional hook for additional side-effects
      if (onSubmitAction) {
        await onSubmitAction(values)
      }
      setStatus({ type: 'success', text: 'Message sent.' })
      reset()
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to send message. Please try again.'
      setStatus({ type: 'error', text: msg })
    } finally {
      setLoading(false)
    }
  }

  const gridCols = columns === 2 ? 'grid grid-cols-1 sm:grid-cols-2 gap-2' : 'grid grid-cols-1 gap-2'

  return (
    <div className={['w-full max-w-md space-y-6 container mx-auto', className].filter(Boolean).join(' ')}>
      <form onSubmit={handleSubmit}>
        <FieldGroup>
          <FieldSet>
            {(title || description) && (
              <>
                {title && (
                  <FieldLegend>
                    <h1 className="title">{title}</h1>
                  </FieldLegend>
                )}
                {description && (
                  <FieldDescription>
                    <span className="text-xs">{description}</span>
                  </FieldDescription>
                )}
              </>
            )}

            <FieldGroup>
              <div className={gridCols}>
                {fieldList.map((f) => {
                  const common = {
                    placeholder: f.placeholder,
                    required: f.required,
                    value: values[f.name] ?? '',
                  }

                  return (
                    <div key={f.name} className={columns === 2 && (f.colSpan === 2 || f.type === 'textarea') ? 'sm:col-span-2' : ''}>
                      <Field>
                        <FieldLabel>{f.label}</FieldLabel>
                        {f.type === 'textarea' ? (
                          <Textarea
                            className="resize-none"
                            {...common}
                            onChange={(e) => handleChange(f.name, (e.target as HTMLTextAreaElement).value)}
                          />
                        ) : f.type === 'select' ? (
                          <Select
                            value={values[f.name] ?? ''}
                            onValueChange={(val) => handleChange(f.name, val)}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder={f.placeholder ?? 'Select...'} />
                            </SelectTrigger>
                            <SelectContent>
                              {(f.options ?? []).map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>
                                  {opt.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        ) : (
                          <Input
                            type={f.type}
                            {...common}
                            onChange={(e) => handleChange(f.name, (e.target as HTMLInputElement).value)}
                          />
                        )}
                      </Field>
                    </div>
                  )
                })}
              </div>
            </FieldGroup>
          </FieldSet>

          <Field>
            <Button type="submit" disabled={loading}>
              {loading ? 'Sending...' : submitLabel}
            </Button>
          </Field>

          {status && (
            <div className={[
              'mt-2 text-sm',
              status.type === 'success' ? 'text-green-600' : 'text-red-600',
            ].join(' ')}>
              {status.text}
            </div>
          )}
        </FieldGroup>
      </form>
    </div>
  )
}
