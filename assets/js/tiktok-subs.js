import { CONFIG } from "./config.js"; // Підключаємо конфігурацію

async function getTikTokUserID(username) {
    const apiUrl = `https://open.tiktokapis.com/v2/user/info?username=${username}`;
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;

    try {
        const response = await fetch(proxyUrl);
        const result = await response.json();
        const data = JSON.parse(result.contents); // Розпарсити JSON-відповідь
        
        if (data && data.data && data.data.user_id) {
            return data.data.user_id;
        } else {
            console.error("Не вдалося отримати user_id:", data);
            return null;
        }
    } catch (error) {
        console.error("Помилка отримання user_id TikTok:", error);
        return null;
    }
}

async function getTikTokFollowers() {
    const user_id = await getTikTokUserID(CONFIG.TIKTOK_USERNAME);
    if (!user_id) return;

    const apiUrl = `https://open.tiktokapis.com/v2/user/followers?user_id=${user_id}`;
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;

    try {
        const response = await fetch(proxyUrl);
        const result = await response.json();
        const data = JSON.parse(result.contents); // Розпарсити JSON

        document.getElementById("tiktok-followers").innerText = data.data.follower_count;
    } catch (error) {
        console.error("Помилка отримання підписників TikTok:", error);
        document.getElementById("tiktok-followers").innerText = "Error!";
    }
}

// Викликаємо при завантаженні
getTikTokFollowers();
setInterval(getTikTokFollowers, 30000);
