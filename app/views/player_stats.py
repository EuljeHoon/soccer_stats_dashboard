# -*- coding: utf-8 -*-

import logging
from rest_framework.response import Response
from rest_framework.views import APIView
from app.helpers.player_stats import get_player_picture_url, get_player_info, get_player_team, get_all_player_ids


LOGGER = logging.getLogger('django')

class PlayerList(APIView):
    logger = LOGGER

    def get(self, request):
        try:
            result = get_all_player_ids()
            return Response(result)
        except Exception as e:
            self.logger.error(f"Error getting player list: {e}")
            return Response(
                {"error": "Failed to get player list"}, 
                status=500
            )

class PlayerInfo(APIView):
    logger = LOGGER

    def get(self, request, playerID):
        try:
            result = get_player_info(player_id=playerID)
            return Response(result)
        except Exception as e:
            self.logger.error(f"Error getting player information: {e}")
            return Response(
                {"error": "Player not found"}, 
                status=404
            )

class PlayerTeam(APIView):
    logger = LOGGER
    def get(self, request, playerID):
        try:
            result = get_player_team(player_id=playerID)
            return Response(result)
        except Exception as e:
            self.logger.error(f"Error getting player team: {e}")
            return Response(
                {"error": "Player not found"}, 
                status=404
            )

class PlayerPhoto(APIView):
    logger = LOGGER

    def get(self, request, playerID):
        try:
            result = get_player_picture_url(player_id=playerID)
            return Response(result)
        except Exception as e:
            self.logger.error(f"Error getting player photo: {e}")
            return Response(
                {"error": "Player not found"}, 
                status=404
            )

