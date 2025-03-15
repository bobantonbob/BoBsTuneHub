async function getTikTokStats() {
    const username = "bobs.tune.hub"; // Твій TikTok нікнейм
    const url = `https://www.tiktok.com/@${username}`;

    try {
        const response = await fetch(url, {
            headers: { "User-Agent": "Mozilla/5.0" } // Уникаємо блокування
        });
        const text = await response.text();

        // Витягуємо підписників
        const followersMatch = text.match(/"followerCount":(\d+)/);
        if (followersMatch) {
            document.getElementById("tiktok-followers").innerText = followersMatch[1];
        } else {
            document.getElementById("tiktok-followers").innerText = "N/A";
        }

        // Витягуємо уподобайки
        const likesMatch = text.match(/"heartCount":(\d+)/);
        if (likesMatch) {
            document.getElementById("tiktok-likes").innerText = likesMatch[1];
        } else {
            document.getElementById("tiktok-likes").innerText = "N/A";
        }
    } catch (error) {
        console.error("Помилка отримання статистики TikTok:", error);
    }
}

// Оновлюємо кожні 30 секунд
setInterval(getTikTokStats, 30000);
getTikTokStats();
