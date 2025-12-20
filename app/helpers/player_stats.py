from app.dbmodels.models import Player

def get_all_player_ids():
    player_ids = list(Player.objects.values_list('id', flat=True))
    return {"player_ids": player_ids}

def get_player_info(player_id):
    player = Player.objects.get(id=player_id)
    name = player.name
    position = player.position
    nationality = player.nationality
    age = player.age
    return {
        "name": name,
        "position": position,
        "nationality": nationality,
        "age": age
    }

def get_player_team(player_id):
    player = Player.objects.get(id=player_id)
    team = player.team  # ForeignKey로 Team 객체에 접근
    return {
        "team": team.name if team else None  # Team의 name 속성 반환
    }

def get_player_picture_url(player_id: str):
    player = Player.objects.get(id=player_id)
    player_photo_url = player.photo_url
    return {
        "photo_url": player_photo_url
    }
