from django.shortcuts import render


def playlists(request):
    return render(
        request,
        "playlists/playlists.html",
        {"title": "Playlists", "page": "playlists", "app": "playlists"},
    )
