// app/components/FeedbackForm/FeedbackForm.js
'use client'
import { useState, useEffect } from 'react'

// Список поддерживаемых стран с кодами и флагами
const COUNTRIES = [
    { code: 'DE', name: 'Германия', dialCode: '+49', flag: '🇩🇪' },
    { code: 'RU', name: 'Россия', dialCode: '+7', flag: '🇷🇺' },
    { code: 'US', name: 'США', dialCode: '+1', flag: '🇺🇸' },
    { code: 'KZ', name: 'Казахстан', dialCode: '+7', flag: '🇰🇿' },
    { code: 'BY', name: 'Беларусь', dialCode: '+375', flag: '🇧🇾' },
    { code: 'UA', name: 'Украина', dialCode: '+380', flag: '🇺🇦' },
]

export default function FeedbackForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        country: 'DE', // Германия по умолчанию
        email: '',
        message: ''
    })
    const [phoneValue, setPhoneValue] = useState('')
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    // При изменении страны обновляем телефон
    useEffect(() => {
        const country = COUNTRIES.find(c => c.code === formData.country)
        if (country) {
            // Сохраняем только цифры номера (без кода страны)
            const cleanNumber = phoneValue.replace(/[^\d]/g, '')
            setPhoneValue(cleanNumber)
        }
    }, [formData.country])

    const validatePhone = (phone) => {
        // Проверяем минимальную длину номера (код страны + 6 цифр)
        return phone.replace(/[^\d]/g, '').length = 9
    }

    const validateEmail = (email) => {
        if (!email) return true
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    const handlePhoneChange = (e) => {
        const value = e.target.value
        // Разрешаем только цифры, пробелы и +
        const cleaned = value.replace(/[^\d\s+]/g, '')
        setPhoneValue(cleaned)

        // Сохраняем в formData без кода страны (только цифры)
        const country = COUNTRIES.find(c => c.code === formData.country)
        const digits = cleaned.replace(/[^\d]/g, '')
        const numberWithoutCode = country ? digits.replace(country.dialCode.replace('+', ''), '') : digits
        setFormData({...formData, phone: numberWithoutCode})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setErrors({})

        // Валидация
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = 'Введите имя'
        if (!validatePhone(phoneValue)) {
            newErrors.phone = 'Введите корректный телефон'
        }
        if (!validateEmail(formData.email)) {
            newErrors.email = 'Введите корректный email'
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            setIsSubmitting(false)
            return
        }

        try {
            // Формируем полный номер с кодом страны
            const country = COUNTRIES.find(c => c.code === formData.country)
            const fullPhone = country ? `${country.dialCode}${formData.phone}` : formData.phone

            // Отправка данных
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    phone: fullPhone,
                    country: formData.country
                }),
            })

            if (response.ok) {
                setIsSuccess(true)
                setFormData({
                    name: '',
                    phone: '',
                    country: 'DE',
                    email: '',
                    message: ''
                })
                setPhoneValue('')
            } else {
                throw new Error('Ошибка отправки')
            }
        } catch (error) {
            setErrors({ submit: 'Произошла ошибка при отправке. Попробуйте позже.' })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Оставьте заявку</h2>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-lg shadow-md"
                >
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block mb-2">Ваше имя*</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className={`w-full p-3 border rounded ${errors.name ? 'border-red-500' : ''}`}
                                required
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <label className="block mb-2">Телефон*</label>
                            <div className="flex">
                                <select
                                    value={formData.country}
                                    onChange={(e) => setFormData({...formData, country: e.target.value})}
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
                                    placeholder="151 1234567"
                                    required
                                />
                            </div>
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2">Email</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className={`w-full p-3 border rounded ${errors.email ? 'border-red-500' : ''}`}
                            placeholder="example@mail.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2">Сообщение</label>
                        <textarea
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full p-3 border rounded"
                            rows="4"
                        />
                    </div>
                    {errors.submit && (
                        <p className="text-red-500 mb-4">{errors.submit}</p>
                    )}
                    {isSuccess && (
                        <p className="text-green-500 mb-4">Спасибо! Ваше сообщение отправлено.</p>
                    )}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 transition disabled:opacity-50"
                    >
                        {isSubmitting ? 'Отправка...' : 'Отправить'}
                    </button>
                </form>
            </div>
        </section>
    )
}