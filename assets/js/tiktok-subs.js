import { CONFIG } from "./config.js"; // Підключаємо конфігурацію

async function getTikTokUserID(username) {
    const url = `https://open.tiktokapis.com/v2/user/info?username=${username}`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${CONFIG.TIKTOK_CLIENT_SECRET}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Помилка API: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
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

    const url = `https://open.tiktokapis.com/v2/user/followers?user_id=${user_id}`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${CONFIG.TIKTOK_CLIENT_SECRET}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Помилка API: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        document.getElementById("tiktok-followers").innerText = data.data.follower_count;
    } catch (error) {
        console.error("Помилка отримання підписників TikTok:", error);
        document.getElementById("tiktok-followers").innerText = "Error!";
    }
}

// Викликаємо при завантаженні
getTikTokFollowers();
setInterval(getTikTokFollowers, 30000);
