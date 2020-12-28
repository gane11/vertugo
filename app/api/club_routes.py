from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required
from app.models import db, User, Club, Ticket, Party, ClubPicture
from app.forms import NewPartyForm,  NewClubForm
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

club_routes = Blueprint('clubs', __name__)


@club_routes.route('/', methods=['GET'])
def clubs():
    clubs = Club.query.all()
    return {"clubs": [club.to_dict() for club in clubs]}


@club_routes.route('/<int:id>', methods=['GET'])
def club(id):
    club = Club.query.get(id)
    if club:
        return club.to_dict()
    else:
        return jsonify(error='This Club doesnt exist')


@club_routes.route('/<int:id>/parties', methods=['GET'])
def parties():
    parties = Party.query.filter(Party.club_id == id).all()
    if len(parties > 0):
        return jsonify([party.to_dict() for party in parties])
    else:
        return jsonify(error='No Parties')


@club_routes.route('/', methods=['POST'])
# @login_required
def new_club():
    try:
        form = NewClubForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            key_list = request.files.keys()
            if request.files:
                if "club_cover_pic" in key_list:
                    cover_image_data = request.files["club_cover_pic"]
                    cover_image_key = f"newClubs/{uuid.uuid4()}_{cover_image_data.filename}"
                    client.put_object(Body=cover_image_data, Bucket="vertugo", Key=cover_image_key,
                                    ContentType=cover_image_data.mimetype, ACL="public-read")

                club = Club(
                    name=form.data['name'],
                    description=form.data['description'],
                    city=form.data['city'],
                    state=form.data['state'],
                    address=form.data['address'],
                    club_cover_pic=f"https://vertugo.s3-us-east-1.amazonaws.com/{cover_image_key}",
                    lat=form.data['lat'],
                    lng=form.data['lng'],
                    owner_id=form.data['owner_id']
                )
                db.session.add(club)
                db.session.commit()
                return club.to_dict()
    except Exception as error:
        return jsonify(error=repr(error))


@club_routes.route('/<int:id>/parties', methods=['POST'])
@login_required
def create_party(id):
    form = NewPartyForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        key_list = request.files.keys()

        if "partyCoverPic" in key_list:
            cover_image_data = request.files["partyCoverPic"]
            cover_image_key = f"newParty/{cover_image_data.filename}_{uuid.uuid4()}"
            client.put_object(Body=cover_image_data, Bucket="vertugo", Key=cover_image_key,
                              ContentType=cover_image_data.mimetype, ACL="public-read")

            party = Party(
                description=form.data['description'],
                start_date=form.data['startDate'],
                end_date=form.data['endDate'],
                club_id=id,
                ticket_count=form.data['ticketCount'],
                party_cover_pic=f"https://vertugo.s3.amazonaws.com/{cover_image_key}",
            )
            db.session.add(party)
            db.session.commit()
            return party.to_dict()

    return {'errors': 'error while creating a party'}, 404

@club_routes.route('/<int:id>/pictures', methods=['GET'])
def club_pictures(id):
    club_pictures = ClubPicture.query.filter(ClubPicture.club_id == id).all()
    if club_pictures:
        return {"clubPictures": [club_picture.to_dict() for club_picture in club_pictures]}
    else:
        return jsonify(error='This Club doesnt have pictures yet')
