import CONFIG from "./conf.js"; // Підключаємо конфігурацію

async function getTikTokFollowers() {
    const url = `https://open.tiktokapis.com/v2/user/info?username=${CONFIG.TIKTOK_USERNAME}`;

    try {
        const response = await fetch(url, {
            headers: {
                "Authorization": `Bearer ${CONFIG.TIKTOK_CLIENT_SECRET}`
            }
        });
        const data = await response.json();
        document.getElementById("tiktok-followers").innerText = data.data.follower_count;
    } catch (error) {
        console.error("Помилка отримання підписників TikTok:", error);
    }
}

// Викликаємо при завантаженні
getTikTokFollowers();
setInterval(getTikTokFollowers, 30000);
