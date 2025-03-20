from django_cron import register
from .tiktok_cron import FetchTikTokStats

register(FetchTikTokStats)
