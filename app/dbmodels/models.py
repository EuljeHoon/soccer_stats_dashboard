from django.db import models

# Create your models here.
class Team(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name

class Player(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=50)
    nationality = models.CharField(max_length=50)
    age = models.IntegerField()
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    photo_url = models.URLField(max_length=500)
    def __str__(self):
        return f"{self.name} ({self.team.name})"

class Shot(models.Model):
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    foot = models.CharField(max_length = 10)
    x = models.FloatField()
    y = models.FloatField()
    succeed = models.BooleanField()
    def __str__(self):
        return f"{self.player.name} {self.foot}"