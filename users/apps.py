from django.apps import AppConfig
import threading
from django.core.management import call_command


# class UsersConfig(AppConfig):
#     default_auto_field = "django.db.models.BigAutoField"
#     name = "users"

# def ready(self):
#     threading.Thread(target=self.start_scheduler, daemon=True).start()

# def start_scheduler(self):
#     call_command("runapscheduler")
