from django import forms


class CreateProductForm(forms.Form):
    name = forms.CharField(max_length=200)
    description = forms.Textarea()
    price = forms.DecimalField(max_digits=10, decimal_places=2)
    seller = forms.Select()


class CreateSellerForm(forms.Form):
    name = forms.CharField(max_length=200)
    email = forms.EmailField()


class CreateBuyerForm(forms.Form):
    name = forms.CharField(max_length=200)
    email = forms.EmailField()


class CreateOrderForm(forms.Form):
    buyer = forms.Select()
    product = forms.Select()
