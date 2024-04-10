from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=1000, decimal_places=2)
    image_link = models.CharField(max_length=1000)
    p_type = models.CharField(max_length=30)
