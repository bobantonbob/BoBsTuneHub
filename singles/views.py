from django.shortcuts import render


def singles(request):
    return render(
        request,
        "singles/singles.html",
        {"title": "Singles", "page": "singles", "app": "singles"},
    )
