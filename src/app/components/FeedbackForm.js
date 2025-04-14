'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

// Список поддерживаемых стран с кодами и флагами
const COUNTRIES = [
  { code: 'DE', dialCode: '+49', icon: '/icons/flags/de.svg' },
]

export default function FeedbackForm({ onSuccess }) {
  const t = useTranslations('feedback')
  const tCountries = useTranslations('countries')

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    country: 'DE',
    email: '',
    message: ''
  })

  const [phoneValue, setPhoneValue] = useState('')
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const country = COUNTRIES.find(c => c.code === formData.country)
    if (country) {
      const cleanNumber = phoneValue.replace(/[^\d]/g, '')
      setPhoneValue(cleanNumber)
    }
  }, [formData.country])

  const validatePhone = (phone) => {
    return phone.replace(/[^\d]/g, '').length === 11
  }

  const validateEmail = (email) => {
    if (!email) return true
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value
    const cleaned = value.replace(/[^\d\s+]/g, '')
    setPhoneValue(cleaned)

    const country = COUNTRIES.find(c => c.code === formData.country)
    const digits = cleaned.replace(/[^\d]/g, '')
    const numberWithoutCode = country ? digits.replace(country.dialCode.replace('+', ''), '') : digits
    setFormData({ ...formData, phone: numberWithoutCode })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = t('error.name')
    if (!validatePhone(phoneValue)) newErrors.phone = t('error.phone')
    if (!validateEmail(formData.email)) newErrors.email = t('error.email')

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }

    try {
      const country = COUNTRIES.find(c => c.code === formData.country)
      const fullPhone = country ? `${country.dialCode}${formData.phone}` : formData.phone

      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, phone: fullPhone })
      })

      if (response.ok) {
        onSuccess?.()
        setIsSuccess(true)
        setFormData({ name: '', phone: '', country: 'DE', email: '', message: '' })
        setPhoneValue('')
      } else {
        throw new Error('Ошибка отправки')
      }
    } catch (error) {
      setErrors({ submit: t('error.submit') })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">{t('title')}</h2>
          <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-md"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2">{t('name')}</label>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full p-3 border rounded ${errors.name ? 'border-red-500' : ''}`}
                    required
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block mb-2">{t('phone')}</label>
                <div className="flex">
                  <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-1/3 p-3 border rounded-r-none bg-gray-50"
                  >
                    {COUNTRIES.map(country => (
                        <option key={country.code} value={country.code}>
                          {country.flag} {country.dialCode}
                        </option>
                    ))}
                  </select>
                  <input
                      type="tel"
                      value={phoneValue}
                      onChange={handlePhoneChange}
                      className={`w-2/3 p-3 border rounded-l-none ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="176 12345678"
                      required
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2">{t('email')}</label>
              <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full p-3 border rounded ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="example@mail.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label className="block mb-2">{t('message')}</label>
              <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 border rounded"
                  rows="4"
              />
            </div>
            {errors.submit && <p className="text-red-500 mb-4">{errors.submit}</p>}
            {isSuccess && <p className="text-green-500 mb-4">{t('success')}</p>}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 transition disabled:opacity-50"
            >
              {isSubmitting ? t('submitting') : t('submit')}
            </button>
          </form>
        </div>
      </section>
  )
}
