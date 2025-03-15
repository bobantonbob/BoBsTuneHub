import CONFIG from "./config.js"; // Підключаємо файл конфігурації

async function getYouTubeMusicSubscribers() {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CONFIG.CHANNEL_ID_YOUTUBE_MUSIC}&key=${CONFIG.API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const subscribers = data.items[0].statistics.subscriberCount;
        document.getElementById("youtube-music-subs").innerText = subscribers;
    } catch (error) {
        console.error("Помилка отримання підписників YouTube Music:", error);
    }
}

// Оновлення кожні 30 секунд
setInterval(getYouTubeMusicSubscribers, 30000);

// Викликаємо функцію при завантаженні сторінки
getYouTubeMusicSubscribers();