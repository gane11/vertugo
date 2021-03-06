from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, IntegerField, FloatField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("User is already registered.")


class NewClubForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = StringField('description')
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    address = StringField('address', validators=[DataRequired()])
    lat = FloatField('lat')
    lng = FloatField('lng')
    club_cover_pic = StringField('club_cover_pic', validators=[DataRequired()])
    owner_id = IntegerField('owner_id', validators=[DataRequired()])
