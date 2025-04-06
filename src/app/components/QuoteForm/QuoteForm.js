// app/components/QuoteForm/QuoteForm.js
'use client'
import { useState } from 'react'

export default function QuoteForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message:'',
        email: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Здесь будет отправка формы
        console.log('Form submitted:', formData)
    }

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Рассчитайте стоимость</h2>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-lg shadow-md"
                >
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block mb-2">Ваше имя</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full p-3 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Телефон</label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                className="w-full p-3 border rounded"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 transition"
                    >
                        Отправить заявку
                    </button>
                </form>
            </div>
        </section>
    )
}