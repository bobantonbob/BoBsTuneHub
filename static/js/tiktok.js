async function getTikTokFollowers() {
    const url = "https://tiktok-scraper7.p.rapidapi.com/user/stats?username=bobs.tune.hub";
    
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "ТУТ_ТВОЙ_RAPIDAPI_KEY",
            "X-RapidAPI-Host": "tiktok-scraper7.p.rapidapi.com"
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log("TikTok API response:", data);
        
        if (data.stats && data.stats.followerCount) {
            document.getElementById("tiktok-followers").innerText = data.stats.followerCount;
        } else {
            document.getElementById("tiktok-followers").innerText = "N/A";
        }
    } catch (error) {
        console.error("Помилка отримання підписників TikTok:", error);
    }
}

// Викликаємо функцію при завантаженні сторінки
getTikTokFollowers();
