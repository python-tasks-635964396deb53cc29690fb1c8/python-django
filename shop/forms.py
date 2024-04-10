from django import forms

from shop.models import Product


class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = '__all__'

    title = forms.CharField(max_length=255)
    price = forms.DecimalField(max_digits=1000, decimal_places=2)
    image_link = forms.CharField(max_length=1000)
    p_type = forms.CharField(max_length=30)
