from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.authtoken import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/songs/', include('songs.urls')), 
    # # for accounts/signup
    path("api/accounts/", include("accounts.urls")),
    path("api/categories/", include("categories.urls")),
    path("api/playlists/", include("playlists.urls")),
    path('api-token-auth/', views.obtain_auth_token),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)