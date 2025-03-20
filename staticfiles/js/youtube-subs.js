import { CONFIG } from "/static/js/config.js"; // Підключаємо файл конфігурації

async function getYouTubeSubscribers() {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CONFIG.CHANNEL_ID_YOUTUBE}&key=${CONFIG.API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.items && data.items.length > 0) {
            const subscribers = data.items[0].statistics.subscriberCount;
            document.getElementById("youtube-subs").innerText = subscribers;
        } else {
            document.getElementById("youtube-subs").innerText = "N/A";
            console.error("Помилка: немає доступних даних.");
        }
    } catch (error) {
        console.error("Помилка отримання підписників YouTube:", error);
    }
}

// Оновлення кожні 30 секунд
setInterval(getYouTubeSubscribers, 30000);

// Викликаємо функцію при завантаженні сторінки
getYouTubeSubscribers();
