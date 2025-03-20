# import requests
# import os
# from django.conf import settings


# def fetch_tiktok_stats():
#     api_url = "https://tiktok-scraper7.p.rapidapi.com/user/info"
#     headers = {
#         "x-rapidapi-host": "tiktok-scraper7.p.rapidapi.com",
#         "x-rapidapi-key": os.getenv("TIKTOK_CLIENT_KEY"),
#     }
#     params = {"user_id": "7439303161154962488"}  # ID твого акаунту TikTok

#     response = requests.get(api_url, headers=headers, params=params)

#     if response.status_code == 200:
#         data = response.json().get("data", {}).get("stats", {})
#         followers = data.get("followerCount", 0)
#         likes = data.get("heartCount", 0)

#         # Збереження у файл або базу даних
#         with open(os.path.join(settings.BASE_DIR, "tiktok_stats.json"), "w") as f:
#             f.write(str(data))

#         print(f"Оновлено TikTok: {followers} підписників, {likes} лайків")
#     else:
#         print("Помилка отримання TikTok статистики", response.text)
