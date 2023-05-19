from flask_cors import CORS
from flask import render_template, Flask, send_file
import requests
import datetime
from pathlib import Path
from collections import OrderedDict

app = Flask(__name__)
CORS(app)


@app.route("/today")
def today():
    url = "https://api.football-data.org/v4/matches?status=LIVE&competitions=PL,EL,CL,FL1,BL1,PD || https://api.football-data.org/v4/matches || https://api.football-data.org/v4/competitions/CL/matches"
    headers = {"X-Auth-Token": "0ac745db8571475481f4535bc190ee1e"}
    live = requests.get(
        "https://api.football-data.org/v4/matches",
        headers=headers,
    )
    live.raise_for_status()
    data = {}
    liveIntoJson = live.json()
    competition = liveIntoJson["resultSet"]["competitions"].split(",")
    for compt in competition:
        data[compt] = []
    for match in liveIntoJson["matches"]:
        data[match["competition"]["code"]].append(match)
    return data


@app.route("/yesterday")
def yesterday():
    now = datetime.datetime.now()
    yester = now + datetime.timedelta(days=-1)
    url = "https://api.football-data.org/v4/matches?date=%s" % (yester.date())
    headers = {"X-Auth-Token": "0ac745db8571475481f4535bc190ee1e"}
    live = requests.get(url, headers=headers)
    data = {}
    liveIntoJson = live.json()
    competition = liveIntoJson["resultSet"]["competitions"].split(",")
    for compt in competition:
        data[compt] = []
    for match in liveIntoJson["matches"]:
        data[match["competition"]["code"]].append(match)
    return data


@app.route("/tomorrow")
def tomorrow():
    now = datetime.datetime.now()
    tomorr = now + datetime.timedelta(days=1)
    url = "https://api.football-data.org/v4/matches?date=%s" % (tomorr.date())
    headers = {"X-Auth-Token": "0ac745db8571475481f4535bc190ee1e"}
    live = requests.get(
        url,
        headers=headers,
    )
    live.raise_for_status()
    data = {}
    liveIntoJson = live.json()
    competition = liveIntoJson["resultSet"]["competitions"].split(",")
    for compt in competition:
        data[compt] = []
    for match in liveIntoJson["matches"]:
        data[match["competition"]["code"]].append(match)
    return data


@app.route("/ClubInfo/<int:clubId>")
def ClubInfo(clubId):
    url = "https://api.football-data.org/v4/teams/%d" % (clubId)
    headers = {"X-Auth-Token": "0ac745db8571475481f4535bc190ee1e"}
    live = requests.get(
        url,
        headers=headers,
    )
    live.raise_for_status()
    dataOfPlayers = {"Goalkeeper": [], "Defence": [], "Midfield": [], "Offence": []}
    liveIntoJson = live.json()
    for player in liveIntoJson["squad"]:
        if player["position"] in dataOfPlayers.keys():
            dataOfPlayers[player["position"]].append(player)
    liveIntoJson["squad"] = dataOfPlayers
    return liveIntoJson


@app.route("/callingCompetitionTable/<int:compId>")
def callingCompetitionTable(compId):
    url = "https://api.football-data.org/v4/competitions/%d/standings" % (compId)
    headers = {"X-Auth-Token": "0ac745db8571475481f4535bc190ee1e"}
    live = requests.get(
        url,
        headers=headers,
    )
    live.raise_for_status()
    if live.json()["competition"]["type"] != "CUP":
        return OrderedDict(live.json())
    else:
        aide = live.json()
        for group in aide["standings"]:
            for table in group["table"]:
                del table["form"]
    return aide


@app.route("/competition")
def listOfcompetition():
    data = {"البطولات": [], "الدوريات": []}
    url = "http://api.football-data.org/v4/competitions"
    headers = {"X-Auth-Token": "0ac745db8571475481f4535bc190ee1e"}
    live = requests.get(
        url,
        headers=headers,
    )
    live.raise_for_status()
    res = live.json()
    for x in range(len(res["competitions"])):
        if res["competitions"][x]["type"] == "CUP":
            data["البطولات"].append(
                {
                    "name": res["competitions"][x]["name"],
                    "logo": res["competitions"][x]["emblem"],
                    "id": res["competitions"][x]["id"],
                }
            )
        else:
            data["الدوريات"].append(
                {
                    "name": res["competitions"][x]["name"],
                    "logo": res["competitions"][x]["emblem"],
                    "id": res["competitions"][x]["id"],
                }
            )
    return data


@app.route("/upComingCupMatches/<int:id>")
def upComingLeagueMatches(id):
    url = (
        "http://api.football-data.org/v4/competitions/%s/matches?status=SCHEDULED,IN_PLAY,PAUSED,"
        % (id)
    )
    headers = {"X-Auth-Token": "0ac745db8571475481f4535bc190ee1e"}
    live = requests.get(
        url,
        headers=headers,
    )
    live.raise_for_status()
    # data = OrderedDict()
    # liveIntoJson = live.json()
    # competition = []
    # for match in liveIntoJson["matches"]:
    #     if match["stage"] not in competition:
    #         competition.append(match["stage"])
    # for compt in competition:
    #     data[compt] = []
    # for match in liveIntoJson["matches"]:
    #     data[match["stage"]].append(match)
    return live.json()


@app.route("/images/<int:id>")
def returningImg(id):
    return send_file("./assets/png/%s.png" % (id), mimetype="image/png")


@app.route("/coco")
def coco():
    url = "https://api.football-data.org/v4/competitions/PL/scorers"
    headers = {"X-Auth-Token": "0ac745db8571475481f4535bc190ee1e"}
    live = requests.get(
        url,
        headers=headers,
    )
    live.raise_for_status()
    return live.json()


@app.route("/upComingLeagueMatches/<int:id>/<int:matchDay>")
def upComingCupMatches(id, matchDay):
    url = "http://api.football-data.org/v4/competitions/%d/matches?matchday=%d" % (
        id,
        matchDay,
    )
    headers = {"X-Auth-Token": "0ac745db8571475481f4535bc190ee1e"}
    live = requests.get(
        url,
        headers=headers,
    )
    live.raise_for_status()
    # data = OrderedDict()
    # liveIntoJson = live.json()
    # competition = []
    # for match in liveIntoJson["matches"]:
    #     if match["stage"] not in competition:
    #         competition.append(match["stage"])
    # for compt in competition:
    #     data[compt] = []
    # for match in liveIntoJson["matches"]:
    #     data[match["stage"]].append(match)
    return live.json()


@app.route("/topScorer/<int:id>")
def topScorer(id):
    url = "https://api.football-data.org/v4/competitions/%d/scorers" % (id)
    headers = {"X-Auth-Token": "0ac745db8571475481f4535bc190ee1e"}
    live = requests.get(
        url,
        headers=headers,
    )
    live.raise_for_status()
    return live.json()
