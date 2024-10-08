"""
Django settings for tansacs project.

Generated by 'django-admin startproject' using Django 4.2.7.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""

from pathlib import Path
import os
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-%q((%bdrf(1&by!(o91*2p1xa!md-8cleh&f@*5l7%##68f&=!'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework.authtoken',
    'corsheaders',
    'user',
    'jobs',
    'superadmin',

]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

]

ROOT_URLCONF = 'tansacs.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'tansacs.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases


# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': 'tansacs',
#         'USER': 'postgres',
#         'PASSWORD': '12345',
#         'HOST': 'localhost',          # If PostgreSQL is running on localhost
#         'PORT': '5432',
#     }
# }


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}



# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

# TIME_ZONE = 'UTC'

TIME_ZONE = 'Asia/Kolkata'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

# STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


AWS_ACCESS_KEY_ID = 'AKIARX56MWFDJPTMTRPZ'
AWS_SECRET_ACCESS_KEY = 'cPcsJBwSVendfsV30LEneJF4oEdJj5MOj/gJ1b4w'
AWS_STORAGE_BUCKET_NAME = 'tansac-s3'
AWS_S3_REGION_NAME = 'ap-south-1'  # e.g., 'us-east-1'
AWS_S3_FILE_OVERWRITE = False

# Configure static and media file URLs
# STATIC_URL = 'https://tansac-s3.s3.amazonaws.com/static/'
STATIC_URL = 'static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR , "static")
]

# MEDIA_URL = 'https://tansac-s3.s3.amazonaws.com/media/'

MEDIA_URL = 'media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'static')

# Optional: Override default storage class for media files (uploaded files)
# Custom storage classes for static and media files
# DEFAULT_FILE_STORAGE = 'tansacs.custom_storage.MediaStorage'
# STATICFILES_STORAGE = 'tansacs.custom_storage.StaticStorage'

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.sendgrid.net'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'apikey'  # This is the literal 'apikey', not your SendGrid username
EMAIL_HOST_PASSWORD = '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'  # Replace with your actual SendGrid SMTP API key
DEFAULT_FROM_EMAIL = 'nazarene@flynettech.com'

# Server	smtp.sendgrid.net
# Ports	
# 25, 587	(for unencrypted/TLS connections)
# 465	(for SSL connections)
# Username	apikey
# Password	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

# EMAIL_HOST_USER = 'ajithkumardotr@gmail.com'
# EMAIL_HOST_PASSWORD = 'xotnjknarblaioiq'


# EMAIL_HOST_USER = 'nazarene@flynettech.com'
# EMAIL_HOST_PASSWORD = 'kwmhygigpgqvdjdu'

# EMAIL_HOST_USER = 'jagan@flynettech.com'
# EMAIL_HOST_PASSWORD = 'kengqebzzcrjfeqf'



# CORS_ALLOW_ALL_ORIGINS = True

CORS_ALLOW_CREDENTIALS = True

# CORS_ALLOWED_ORIGINS = [
#     "http://localhost:3000",
#     "http://127.0.0.1:9000"
# ]


CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
    ],
}
