from django.core.management.base import BaseCommand
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.interval import IntervalTrigger
from django_apscheduler.jobstores import (
    DjangoJobStore,
    register_events,
)  # ✅ Імпортуємо register_events
from django_apscheduler.models import (
    DjangoJobExecution,
    DjangoJob,
)  # ✅ Імпортуємо DjangoJob
import logging
from users.tiktok_cron import fetch_tiktok_stats  # Виклик функції

logger = logging.getLogger(__name__)


class Command(BaseCommand):
    help = "Запуск APScheduler"

    def handle(self, *args, **options):
        scheduler = BackgroundScheduler()
        scheduler.add_jobstore(
            DjangoJobStore(), "default"
        )  # ✅ ВАЖЛИВО: підключаємо до Django

        # Додаємо задачу, якщо її немає
        if not scheduler.get_job("fetch_tiktok_stats"):
            scheduler.add_job(
                fetch_tiktok_stats,
                trigger=IntervalTrigger(hours=3),
                id="fetch_tiktok_stats",
                replace_existing=True,
            )

        scheduler.start()
        logger.info("✅ Планувальник запущено!")

        try:
            while True:
                pass  # Запобігає завершенню процесу
        except (KeyboardInterrupt, SystemExit):
            scheduler.shutdown()


# Вивід усіх запланованих задач
jobs = DjangoJob.objects.all()
print(f"Заплановані задачі: {jobs}")
