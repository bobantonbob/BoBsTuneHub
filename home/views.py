from django.shortcuts import render


def index(request):
    return render(
        request, "home/index.html", {"title": "Home", "page": "index", "app": "home"}
    )
