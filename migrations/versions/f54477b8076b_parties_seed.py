"""parties_seed

Revision ID: f54477b8076b
Revises: 1ab976c46767
Create Date: 2020-12-03 19:10:22.970957

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql import table
from datetime import date

# revision identifiers, used by Alembic.
revision = 'f54477b8076b'
down_revision = '1ab976c46767'
branch_labels = None
depends_on = None


def upgrade():
    party = table('parties',
        sa.Column('id', sa.Integer()),
        sa.Column('description', sa.String()),
        sa.Column('start_date',sa.Date()),
        sa.Column('end_date', sa.Date()),
        sa.Column('club_id', sa.Integer()),
        sa.Column('ticket_count', sa.Integer()),
        sa.Column('party_cover_pic', sa.String())
        )

    op.bulk_insert(party,
    [{
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 22),
        'end_date': date(2021, 4, 22),
        'club_id': 1,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg'
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 24),
        'end_date': date(2021, 4, 24),
        'club_id': 1,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg'
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 23),
        'end_date': date(2021, 4, 23),
        'club_id': 1,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg'
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 25),
        'end_date': date(2021, 4, 25),
        'club_id': 1,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg'
    },
    
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 22),
        'end_date': date(2021, 4, 22),
        'club_id': 2,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg'
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 24),
        'end_date': date(2021, 4, 24),
        'club_id': 2,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 23),
        'end_date': date(2021, 4, 23),
        'club_id': 2,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg'
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 25),
        'end_date': date(2021, 4, 25),
        'club_id': 2,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 24),
        'end_date': date(2021, 4, 24),
        'club_id': 3,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 22),
        'end_date': date(2021, 4, 22),
        'club_id': 3,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 25),
        'end_date': date(2021, 4, 25),
        'club_id': 3,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 23),
        'end_date': date(2021, 4, 23),
        'club_id': 3,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 22),
        'end_date': date(2021, 4, 22),
        'club_id': 4,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 24),
        'end_date': date(2021, 4, 24),
        'club_id': 4,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 23),
        'end_date': date(2021, 4, 23),
        'club_id': 4,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 25),
        'end_date': date(2021, 4, 25),
        'club_id': 4,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 24),
        'end_date': date(2021, 4, 24),
        'club_id': 5,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 22),
        'end_date': date(2021, 4, 22),
        'club_id': 5,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 23),
        'end_date': date(2021, 4, 23),
        'club_id': 5,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 25),
        'end_date': date(2021, 4, 25),
        'club_id': 5,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 22),
        'end_date': date(2021, 4, 22),
        'club_id': 6,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 24),
        'end_date': date(2021, 4, 24),
        'club_id': 6,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 23),
        'end_date': date(2021, 4, 23),
        'club_id': 6,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 25),
        'end_date': date(2021, 4, 25),
        'club_id': 6,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 24),
        'end_date': date(2021, 4, 24),
        'club_id': 7,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 22),
        'end_date': date(2021, 4, 22),
        'club_id': 7,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 23),
        'end_date': date(2021, 4, 23),
        'club_id': 7,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 25),
        'end_date': date(2021, 4, 25),
        'club_id': 7,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 22),
        'end_date': date(2021, 4, 22),
        'club_id': 8,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 24),
        'end_date': date(2021, 4, 24),
        'club_id': 8,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 23),
        'end_date': date(2021, 4, 23),
        'club_id': 8,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 25),
        'end_date': date(2021, 4, 25),
        'club_id': 8,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 24),
        'end_date': date(2021, 4, 24),
        'club_id': 9,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 22),
        'end_date': date(2021, 4, 22),
        'club_id': 9,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 23),
        'end_date': date(2021, 4, 23),
        'club_id': 9,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 25),
        'end_date': date(2021, 4, 25),
        'club_id': 9,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 24),
        'end_date': date(2021, 4, 24),
        'club_id': 10,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 22),
        'end_date': date(2021, 4, 22),
        'club_id': 10,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 23),
        'end_date': date(2021, 4, 23),
        'club_id': 10,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 25),
        'end_date': date(2021, 4, 25),
        'club_id': 10,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 24),
        'end_date': date(2021, 4, 24),
        'club_id': 11,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 22),
        'end_date': date(2021, 4, 22),
        'club_id': 11,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },

        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 23),
        'end_date': date(2021, 4, 23),
        'club_id': 11,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 25),
        'end_date': date(2021, 4, 25),
        'club_id': 11,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
    {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 22),
        'end_date': date(2021, 4, 22),
        'club_id': 12,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
    {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 24),
        'end_date': date(2021, 4, 24),
        'club_id': 12,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 23),
        'end_date': date(2021, 4, 23),
        'club_id': 12,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 25),
        'end_date': date(2021, 4, 25),
        'club_id': 12,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
    {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 24),
        'end_date': date(2021, 4, 24),
        'club_id': 13,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
    {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 22),
        'end_date': date(2021, 4, 22),
        'club_id': 13,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 23),
        'end_date': date(2021, 4, 23),
        'club_id': 13,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 25),
        'end_date': date(2021, 4, 25),
        'club_id': 13,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
    {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 24),
        'end_date': date(2021, 4, 24),
        'club_id': 14,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
    {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 22),
        'end_date': date(2021, 4, 22),
        'club_id': 14,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 23),
        'end_date': date(2021, 4, 23),
        'club_id': 14,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 25),
        'end_date': date(2021, 4, 25),
        'club_id': 14,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
    {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 24),
        'end_date': date(2021, 4, 24),
        'club_id': 15,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 22),
        'end_date': date(2021, 4, 22),
        'club_id': 15,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 23),
        'end_date': date(2021, 4, 23),
        'club_id': 15,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 25),
        'end_date': date(2021, 4, 25),
        'club_id': 15,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 24),
        'end_date': date(2021, 4, 24),
        'club_id': 16,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 22),
        'end_date': date(2021, 4, 22),
        'club_id': 16,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 25),
        'end_date': date(2021, 4, 25),
        'club_id': 16,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 23),
        'end_date': date(2021, 4, 23),
        'club_id': 16,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 24),
        'end_date': date(2021, 4, 24),
        'club_id': 17,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 22),
        'end_date': date(2021, 4, 22),
        'club_id': 17,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 25),
        'end_date': date(2021, 4, 25),
        'club_id': 17,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 23),
        'end_date': date(2021, 4, 23),
        'club_id': 17,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 24),
        'end_date': date(2021, 4, 24),
        'club_id': 18,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 22),
        'end_date': date(2021, 4, 22),
        'club_id': 18,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 25),
        'end_date': date(2021, 4, 25),
        'club_id': 18,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 23),
        'end_date': date(2021, 4, 23),
        'club_id': 18,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 24),
        'end_date': date(2021, 4, 24),
        'club_id': 19,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 22),
        'end_date': date(2021, 4, 22),
        'club_id': 19,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 25),
        'end_date': date(2021, 4, 25),
        'club_id': 19,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 23),
        'end_date': date(2021, 4, 23),
        'club_id': 19,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 24),
        'end_date': date(2021, 4, 24),
        'club_id': 20,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 22),
        'end_date': date(2021, 4, 22),
        'club_id': 20,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 25),
        'end_date': date(2021, 4, 25),
        'club_id': 20,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
        {
        'description': 'Hotest Party in the City',
        'start_date': date(2021, 4, 23),
        'end_date': date(2021, 4, 23),
        'club_id': 20,
        'ticket_count': 100,
        'party_cover_pic': 'https://vertugo.s3.amazonaws.com/partyDefault.jpeg',
    },
    ])


def downgrade():
    op.drop_table('tickets')
    op.drop_table('saved_parties')
    op.drop_table('parties')
    op.drop_table('club_pictures')
    op.drop_table('clubs')
    op.drop_table('users')

