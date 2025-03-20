import { CONFIG } from "/static/js/config.js"; // Підключаємо конфігурацію

async function getYouTubeSubscribers() {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CONFIG.CHANNEL_ID_YOUTUBE}&key=${CONFIG.API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            const subscribers = data.items[0].statistics.subscriberCount;

            // Оновлюємо сторінку
            document.getElementById("youtube-subs").innerText = subscribers;
            console.log("📢 Оновлено підписників:", subscribers);

            // Зберігаємо значення в LocalStorage
            localStorage.setItem("youtubeSubscribers", subscribers);
            localStorage.setItem("youtubeLastUpdate", Date.now());
        } else {
            console.error("❌ Помилка: немає доступних даних.");
        }
    } catch (error) {
        console.error("⚠️ Помилка отримання підписників YouTube:", error);
    }
}

// Функція перевіряє, чи потрібно оновлювати дані
function checkAndUpdateYouTubeSubscribers() {
    const lastUpdate = localStorage.getItem("youtubeLastUpdate");
    const cachedSubscribers = localStorage.getItem("youtubeSubscribers");

    if (cachedSubscribers) {
        document.getElementById("youtube-subs").innerText = cachedSubscribers;
    }

    // Якщо пройшло більше 24 годин, оновлюємо
    if (!lastUpdate || Date.now() - lastUpdate > 86400000) {
        getYouTubeSubscribers();
    }
}

// Викликаємо при завантаженні сторінки
// checkAndUpdateYouTubeSubscribers();
