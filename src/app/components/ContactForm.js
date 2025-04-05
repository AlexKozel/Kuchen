'use client';

export default function ContactForm() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        await fetch('/api/telegram', {
            method: 'POST',
            body: JSON.stringify({
                phone: formData.get('phone'),
                message: formData.get('message')
            })
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="tel" name="phone" placeholder="Numer telefonu" />
            <button type="submit">Wyślij</button>
        </form>
    );
}