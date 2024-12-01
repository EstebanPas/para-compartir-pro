from django import forms
from wiki.models import CustomUser  # Importa el modelo CustomUser


class RegisterForm(forms.Form):
    username = forms.CharField(required=True, min_length=5, max_length=20,
                               widget=forms.TextInput(attrs={
                                   'class': 'form-control',
                                   'id':'username'
                               }))
    email = forms.EmailField(required=True,
                             widget=forms.EmailInput(attrs={
                                 'class': 'form-control',
                                 'id': 'email'
                                 
                             }))
    password = forms.CharField(required=True,
                                widget=forms.PasswordInput(attrs={
                                   'class': 'form-control'
                               }))
    
def clean_username(self):
        username = self.cleaned_data.get('username')

        if CustomUser.objects.filter(username=username).exists():
            raise forms.ValidationError('El usuario ya existe')

        return username
    

    


        

def save (self):
    return CustomUser.objects.create_user(
        self.cleaned_data.get('username'),
        self.cleaned_data.get('email'),
        self.cleaned_data.get('password'),
    )

