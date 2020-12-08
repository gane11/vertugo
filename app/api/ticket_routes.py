from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required
from app.models import db, User, Club, Ticket, Party
from app.forms import NewPartyForm
import json


ticket_routes = Blueprint('tickets', __name__)

@ticket_routes.route('/')