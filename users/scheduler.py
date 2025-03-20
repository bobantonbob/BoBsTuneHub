# from apscheduler.schedulers.background import BackgroundScheduler
# from apscheduler.triggers.interval import IntervalTrigger
# from django_apscheduler.jobstores import register_events, register_job
# import logging
# from .tiktok_cron import (
#     fetch_tiktok_stats,
# )  # Імпортуємо функцію для отримання статистики

# logger = logging.getLogger(__name__)

# scheduler = BackgroundScheduler()


# @register_job(scheduler, IntervalTrigger(hours=3))
# def scheduled_tiktok_update():
#     logger.info("Запуск оновлення статистики TikTok...")
#     fetch_tiktok_stats()  # Виклик функції оновлення
#     logger.info("Оновлення завершено.")


# register_events(scheduler)
# scheduler.start()
