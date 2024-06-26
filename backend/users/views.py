from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from .models import CustomUser, ClientProfile, ProfessionalProfile
from .serializers import CustomUserSerializer, ClientProfileSerializer, ProfessionalProfileSerializer
class UserCreateAPIView(APIView):
    """
    View para criação de usuário.
    """
    def post(self, request):
        serializer = CustomUserSerializer(data=request.data)
        try:
            if serializer.is_valid(raise_exception=True):
                is_client = serializer.validated_data.get('is_client', False)
                is_professional = serializer.validated_data.get('is_professional', False)

                user = serializer.save()

                # Cria o perfil correspondente se is_client ou is_professional for True
                if is_client:
                    ClientProfile.objects.create(user=user)
                elif is_professional:
                    ProfessionalProfile.objects.create(user=user)

                return Response(serializer.data, status=status.HTTP_201_CREATED)
        except AssertionError as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class UserLoginAPIView(APIView):
    """
    View para login de usuário utilizando o email.
    """
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        # Busca pelo usuário pelo email
        try:
            user = CustomUser.objects.get(email=email)
        except CustomUser.DoesNotExist:
            return Response({'error': 'Credenciais inválidas'}, status=status.HTTP_401_UNAUTHORIZED)

        # Autentica o usuário
        user = authenticate(username=user.username, password=password)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Credenciais inválidas'}, status=status.HTTP_401_UNAUTHORIZED)
