from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, DateTimeField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("User is already registered.")


class NewPartyForm(FlaskForm):
    description = StringField('description')
    start_date = DateTimeField('start_date', validators=[DataRequired()])
    end_date = DateTimeField('end_date', validators=[DataRequired()])
    club_id = IntegerField('club_id', validators=[DataRequired()])
    ticket_count = IntegerField('ticket_count', validators=[DataRequired()])
    party_cover_pic = StringField(
        'party_cover_pic', validators=[DataRequired()])