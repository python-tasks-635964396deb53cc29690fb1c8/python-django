from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponseBadRequest

from shop.models import Product
from shop.forms import ProductForm


def index(request):
    products = Product.objects.all()
    return render(request, 'index.html', {'products': products})


def create_product(request):
    if request.method == 'GET':
        return render(request, 'create_product.html')
    elif request.method == 'POST':
        p_form = ProductForm(request.POST)
        if p_form.is_valid():
            p_form = p_form.cleaned_data
            p = Product(title=p_form['title'], price=p_form['price'], image_link=p_form['image_link'],
                        p_type=p_form['p_type'])
            p.save()
            return HttpResponseRedirect('/')
        else:
            return HttpResponseBadRequest()


def view_product(request, product_id):
    product = Product.objects.filter(id=product_id)[0].__dict__
    return render(request, 'product.html', {'product': product})


def search_product(request):
    if (r := request.GET['filter']) and r != 'None':
        products = Product.objects.filter(title__icontains=request.GET['query'], p_type=r)
    else:
        products = Product.objects.filter(title__icontains=request.GET['query'])
    return render(request, 'index.html', {'products': products, 'prev': request.GET['query']})
