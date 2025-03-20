from django.shortcuts import render


def music(request):
    return render(
        request,
        "music/music.html",
        {"title": "Music", "page": "music", "app": "music"},
    )
