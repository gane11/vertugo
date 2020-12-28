from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required
from app.models import db, User, Club, Ticket, Party, SavedParty
from app.forms import NewTicketForm, NewPartyForm
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

party_routes = Blueprint('parties', __name__)


@party_routes.route('/', methods=['GET'])
def parties():
    parties = Party.query.all()
    return {"parties": [party.to_dict() for party in parties]}


@party_routes.route('/', methods=['POST'])
# @login_required
def new_party():
    try:
        form = NewTicketForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            key_list = request.files.keys()
            if request.files:
                if "party_cover_pic" in key_list:
                    cover_image_data = request.files["party_cover_pic"]
                    cover_image_key = f"newParty/{uuid.uuid4()}_{cover_image_data.filename}"
                    client.put_object(Body=cover_image_data, Bucket="vertugo", Key=cover_image_key,
                                      ContentType=cover_image_data.mimetype, ACL="public-read")

                party = Party(
                    description=form.data['description'],
                    start_date=form.data['start_date'],
                    end_date=form.data['end_date'],
                    club_id=form.data['club_id'],
                    ticket_count=form.data['ticket_count'],
                    party_cover_pic=f"https://vertugo.s3-us-east-1.amazonaws.com/{cover_image_key}",
                )
                db.session.add(party)
                db.session.commit()
                return party.to_dict()
    except Exception as error:
        return jsonify(error=repr(error))


@party_routes.route('/<int:id>', methods=['GET'])
def party():
    party= Party.query.get(id)
    return jsonify(party=[party.to_dict()])


@party_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_party():
    party = Party.query.get(id)
    try:
        db.session.delete(party)
        db.session.commit()
        return {'message': "Successfully removed a party"}, 200
    except:
        return {'errors':'Error deleting Party'}, 400



# @party_routes.route('/<int:id>/tickets/<int:pid>', methods=['GET'])
# def party(id, pid):
#     party= Party.query.get(id)
#     return jsonify(party=[party.to_dict()])


@party_routes.route('/<int:id>/users/<int:uid>/tickets', methods=['POST'])
# @login_required
def buying_ticket(id,uid):
    form = NewTicketForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        ticket = Ticket(
            expired=form.data['expired'],
            start_date=form.data['startDate'],
            end_date=form.data['endDate'],
            qr_code=form.data['qrCode'],
            party_id=id,
            user_id=uid
        )
        db.session.add(ticket)
        db.session.commit()
        return party.to_dict()


@party_routes.route('/<int:id>/users/<int:uid>/save', methods=['POST'])
@login_required
def save_party(id, uid):
    saved_party = SavedParty(
        party_id=id,
        user_id=uid
    )
    db.session.add(save_party)
    db.session.commit()
    return saved_party.to_dict()
