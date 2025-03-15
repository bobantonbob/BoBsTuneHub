import CONFIG from "./conf.js"; // Підключаємо конфігурацію

async function getTikTokFollowers() {
    const url = "https://open.tiktokapis.com/v2/user/info/";
    
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
        
        if (data && data.data && data.data.follower_count !== undefined) {
            document.getElementById("tiktok-followers").innerText = data.data.follower_count;
        } else {
            console.error("Немає інформації про підписників TikTok у відповіді API:", data);
        }
    } catch (error) {
        console.error("Помилка отримання підписників TikTok:", error);
        document.getElementById("tiktok-followers").innerText = "Error!";
    }
}

// Викликаємо при завантаженні
getTikTokFollowers();
setInterval(getTikTokFollowers, 30000);
