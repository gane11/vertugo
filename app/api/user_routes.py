from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required
from app.models import db, User, Club, Ticket, Party, SavedParty
from app.forms import NewClubForm
import json

import binascii
import os
import boto3
from botocore.exceptions import ClientError
import uuid


s3 = boto3.resource('s3')
client = boto3.client('s3',
                      aws_access_key_id=os.environ.get('AWS_ACCESS_KEY'),
                      aws_secret_access_key=os.environ.get(
                          'AWS_SECRET_ACCESS_KEY')
                      )

user_routes = Blueprint('users', __name__)


@user_routes.route('/', methods=['GET'])
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>', methods=['GET'])
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/clubs', methods=['GET'])
@login_required
def owner_clubs(id):
    clubs = Club.query.filter(Club.owner_id == id).all()
    if len(clubs > 0):
        return jsonify([club.to_dict() for club in clubs])
    else:
        return jsonify(error='No Clubs yet')



# @user_routes.route('/<int:id>/clubs', methods=['POST'])
# @login_required
# def new_album(id):
#     form = NewClubForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         key_list = request.files.keys()

#         if "clubCoverPic" in key_list:
#             cover_image_data = request.files["clubCoverPic"]
#             cover_image_key = f"newClubs/{cover_image_data.filename}_{uuid.uuid4()}"
#             client.put_object(Body=cover_image_data, Bucket="vertugo", Key=cover_image_key,
#                             ContentType=cover_image_data.mimetype, ACL="public-read")

#             club = Club(
#                 name=form.data['name'],
#                 description=form.data['description'],
#                 city=form.data['city'],
#                 state=form.data['state'],
#                 address=form.data['address'],
#                 club_cover_pic=f"https://vertugo.s3.amazonaws.com/{cover_image_key}",
#                 owner_id= id
#             )
#             db.session.add(club)
#             db.session.commit()
#         return club.to_dict()

#     return {'errors': 'error while creating a club page'},404


@user_routes.route('/<int:id>/tickets', methods=['GET'])
@login_required
def all_tickets(id):
    tickets = Ticket.query.filter(Ticket.user_id == id).all()
    if len(tickets > 0):
        return jsonify([ticket.to_dict() for ticket in tickets])
    else:
        return jsonify(error='No Clubs yet')


@user_routes.route('/<int:userId>/parties/<int:partyId>/save', methods=['POST'])
def save_party(userId, partyId):
    try:
        # user = User.query.get(userId)
        # party = Party.query.get(partyId)

        saved_party = SavedParty(user_id=userId, party_id=partyId)
        
        db.session.add(saved_party)
        db.session.commit()

        save_party_one = SavedParty.query.get(save_party.id)
        return save_party_one.to_dict()
    except:
        return jsonify(error='No Saved Parties')
