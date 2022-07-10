from django.contrib import admin
from django.urls import path, include
from OnlineShopApp import views
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshSlidingView,TokenVerifyView
from OnlineShopApp import views

#creatting router object
router=DefaultRouter()


#register studentviewset with router
router.register('studentapi',views.StudentModelViewSet,basename='studentapi')

router.register('productapi',views.ProductModelViewSet,basename='productapi')
router.register('cartapi',views.CartModelViewSet,basename='cartapi')
router.register('contactapi',views.ContactModelViewSet,basename='contactapi')
router.register('orderapi',views.OrdersModelViewSet,basename='orderapi')
router.register('userapi',views.UserModelViewSet,basename='userapi')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include(router.urls)),
    path('gettoken/',TokenObtainPairView.as_view(),name='tokenobtain'),
    path('refreshtoken/',TokenRefreshSlidingView.as_view(), name='tokenrefresh'),
    path('verifytoken/',TokenVerifyView.as_view(), name='tokenverify'),
    path('login/',views.Loginuser, name="login") 
]
if settings.DEBUG:		
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

