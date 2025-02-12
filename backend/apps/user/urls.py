from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenBlacklistView

from . import views

urlpatterns = [
    path('token', views.UserLoginView.as_view(), name='token_obtain_pair'),
    path('refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path("blacklist", TokenBlacklistView.as_view(), name="token_blacklist"),
]
