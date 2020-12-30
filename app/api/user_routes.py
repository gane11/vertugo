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
        # user s= User.query.get(userId)
        # party = Party.query.get(partyId)

        saved_party = SavedParty(user_id=userId, party_id=partyId)
        
        db.session.add(saved_party)
        db.session.commit()

        # save_party_one = SavedParty.query.get(save_party.id)
        return saved_party.to_dict()
    except:
        return jsonify(error='Party was not saved')


@user_routes.route('/<int:id>/parties/save/', methods=['GET'])
def saved_party(id):
    saved_parties = SavedParty.query.filter(SavedParty.user_id == id).all()
    if len(saved_parties) > 0:
        return {'saved_parties':[saved_party.to_dict() for saved_party in saved_parties] }
    else:
        return jsonify(error='There is no saved parties')


@user_routes.route('/<int:user_id>/parties/<int:party_id>/save', methods=["DELETE"])
def delete_saved_party(user_id, party_id):
    try:
        saved_party = SavedParty.query.filter(SavedParty.user_id == user_id).filter(
            SavedParty.party_id == party_id).first()
        db.session.delete(saved_party)
        db.session.commit()
        return saved_party.to_dict()
    except Exception as error:
        return jsonify(error=repr(error))

