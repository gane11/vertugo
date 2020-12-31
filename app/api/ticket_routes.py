# from flask import Blueprint, jsonify, request, redirect
# from flask_login import login_required
# from app.models import db, User, Club, Ticket, Party
# from app.forms import NewPartyForm
# import json


# ticket_routes = Blueprint('tickets', __name__)

# @ticket_routes.route('/')
# def tickets():
#     tickets = Ticket.query.all()
#     return {"tickets": [ticket.to_dict() for ticket in tickets]}


# @ticket_routes.route('/')
