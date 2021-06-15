from django.db import models

class Todo(models.Model):

    title = models.CharField(max_length=200)
    year = models.IntegerField()

    def __str__(self):
        
        return self.title
