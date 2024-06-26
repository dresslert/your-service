from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)


urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('api/users/', include('users.urls')),  # Inclui as URLs do app Users
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Obtenção de token
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Refresh do token
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),  # Verificação do token
]
