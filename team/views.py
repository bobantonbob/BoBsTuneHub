from django.shortcuts import render


def team(request):
    return render(
        request,
        "team/team.html",
        {"title": "Team", "page": "team", "app": "team"},
    )
