from app.dbmodels.models import Player


def get_player_picture_url(player_id: str):
    player = Player.objects.get(id=player_id)
    player_photo_url = player.photo_url
    return {
        "photo_url": player_photo_url
    }




