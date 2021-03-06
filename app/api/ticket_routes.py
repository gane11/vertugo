from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required
from app.models import db, User, Club, Ticket, Party
from app.forms import NewTicketForm
import json
import binascii
import os

ticket_routes = Blueprint('tickets', __name__)


@ticket_routes.route('/', methods=['GET'])
def tickets():
    tickets = Ticket.query.all()
    return {"tickets": [ticket.to_dict() for ticket in tickets]}


@ticket_routes.route('/', methods=['POST'])
def buy_ticket():
    try:
        form = NewTicketForm()
        print(form.data['expired'])
        print(form.data['start_date'])
        print(form.data['end_date'])
        print(form.data['qr_code'])
        print(form.data['party_id'])
        print(form.data['user_id'])
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            ticket = Ticket(
                expired=form.data['expired'],
                start_date=form.data['start_date'],
                end_date=form.data['end_date'],
                qr_code=form.data['qr_code'],
                party_id=form.data['party_id'],
                user_id=form.data['user_id'],
            )
            db.session.add(ticket)
            db.session.commit()
            return ticket.to_dict()
        return jsonify({'test': 'test'})
    except Exception as error:
        return jsonify(error=repr(error))


@ticket_routes.route('/<int:id>', methods=["DELETE"])
def delete_ticket(id):
    try:
        ticket = Ticket.query.get(id)
        db.session.delete(ticket)
        db.session.commit()
        return ticket.to_dict()
    except Exception as error:
        return jsonify(error=repr(error))
