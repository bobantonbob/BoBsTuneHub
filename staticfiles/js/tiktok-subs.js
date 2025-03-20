import { CONFIG } from "/static/js/config.js"; // Підключаємо конфігурацію

async function getTikTokStats() {
    const user_id = "7439303161154962488"; // Вставляємо отриманий user_id

    const apiUrl = `https://tiktok-scraper7.p.rapidapi.com/user/info?user_id=${user_id}`;

    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "tiktok-scraper7.p.rapidapi.com",
                "x-rapidapi-key": CONFIG.TIKTOK_CLIENT_KEY
            }
        });

        const data = await response.json();

        if (data.code === 0 && data.data && data.data.stats) {
            // Оновлюємо підписників
            document.getElementById("tiktok-followers").innerText = data.data.stats.followerCount;
            console.log("🎉 Підписники оновлені:", data.data.stats.followerCount);

            // Оновлюємо лайки
            document.getElementById("tiktok-likes").innerText = data.data.stats.heartCount;
            console.log("❤️ Лайки оновлені:", data.data.stats.heartCount);
        } else {
            console.error("❌ Не вдалося отримати статистику:", data);
            document.getElementById("tiktok-followers").innerText = "Error!";
            document.getElementById("tiktok-likes").innerText = "Error!";
        }
    } catch (error) {
        console.error("⚠️ Помилка отримання статистики TikTok:", error);
        document.getElementById("tiktok-followers").innerText = "Error!";
        document.getElementById("tiktok-likes").innerText = "Error!";
    }
}

// Викликаємо при завантаженні
// getTikTokStats();
// setInterval(getTikTokStats, 30000);
