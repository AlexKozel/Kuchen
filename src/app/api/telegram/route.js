export async function POST(request) {
    const { phone, message } = await request.json();
    const token = process.env.TELEGRAM_TOKEN;
    const chatId = process.env.CHAT_ID;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(`Новая заявка: ${phone}\nСообщение: ${message}`)}`);

    return Response.json({ success: true });
}