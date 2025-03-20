from background_task import background
import requests
from django.conf import settings


@background(schedule=3 * 60 * 60)  # Виконується кожні 3 години
def update_tiktok_stats():
    user_id = "7439303161154962488"
    api_url = f"https://tiktok-scraper7.p.rapidapi.com/user/info?user_id={user_id}"
    headers = {
        "x-rapidapi-host": "tiktok-scraper7.p.rapidapi.com",
        "x-rapidapi-key": settings.TIKTOK_CLIENT_KEY,
    }

    try:
        response = requests.get(api_url, headers=headers)
        data = response.json()

        if data.get("code") == 0 and "data" in data:
            followers = data["data"]["stats"]["followerCount"]
            likes = data["data"]["stats"]["heartCount"]
            print(f"✅ Оновлено TikTok: {followers} підписників, {likes} лайків")
        else:
            print("❌ Не вдалося оновити TikTok дані")
    except Exception as e:
        print(f"⚠️ Помилка: {e}")


# Запускаємо задачу
update_tiktok_stats(repeat=3 * 60 * 60)
