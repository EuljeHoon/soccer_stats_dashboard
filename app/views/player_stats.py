# -*- coding: utf-8 -*-

import logging
from rest_framework.response import Response
from rest_framework.views import APIView
from app.helpers.player_stats import get_player_picture_url

LOGGER = logging.getLogger('django')


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

