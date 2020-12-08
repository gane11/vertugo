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
    expired= BooleanField('expired', validators=[DataRequired()])
    start_date = DateTimeField('start_date', validators=[DataRequired()])
    end_date = DateTimeField('end_date', validators=[DataRequired()])
    qr_code = StringField('qr_code')
    party_id = IntegerField('party_id', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
