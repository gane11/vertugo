from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, DateTimeField, IntegerField, DateField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("User is already registered.")


class NewTicketForm(FlaskForm):
    expired = BooleanField('expired')
    start_date = DateField('start_date', validators=[DataRequired()])
    end_date = DateField('end_date', validators=[DataRequired()])
    qr_code = StringField('qr_code')
    party_id = IntegerField('party_id', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
