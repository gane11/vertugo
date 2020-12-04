import os

class Config:
  SECRET_KEY=os.environ.get('SECRET_KEY')
  SQLALCHEMY_TRACK_MODIFICATIONS=False
  SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
  SQLALCHEMY_ECHO = True
  AWS_ACCESS_KEY = os.environ.get('AWS_ACCESS_KEY')
  AWS_SECRET_ACCESS_KEY = os.environ.get('AWS_SECRET_ACCESS_KEY')
  AWS_REGION = os.environ.get('AWS_REGION')
