"""parties_seed

Revision ID: f54477b8076b
Revises: 1ab976c46767
Create Date: 2020-12-03 19:10:22.970957

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql import table
from datetime import datetime

# revision identifiers, used by Alembic.
revision = 'f54477b8076b'
down_revision = '1ab976c46767'
branch_labels = None
depends_on = None


def upgrade():
    party = table('parties',
        sa.Column('id', sa.Integer()),
        sa.Column('description', sa.String()),
        sa.Column('start_date',sa.DateTime()),
        sa.Column('end_date', sa.DateTime()),
        sa.Column('club_id', sa.Integer()),
        sa.Column('ticket_count', sa.Integer()),
        sa.Column('party_cover_pic', sa.String())
        )

    op.bulk_insert(party,
        [{
            'description': 'Hotest Party in the City',
            'start_date': datetime(2020, 12, 10),
            'end_date': datetime(2020,12,11),
            'club_id': 1,
            'ticket_count': 100,
            'party_cover_pic': '',
        },
            {
            'description': 'Hotest Party in the City',
            'start_date': datetime(2020, 12, 10),
            'end_date': datetime(2020, 12, 11),
            'club_id': 1,
            'ticket_count': 100,
            'party_cover_pic': '',
        },
            {
            'description': 'Hotest Party in the City',
            'start_date': datetime(2020, 12, 10),
            'end_date': datetime(2020, 12, 11),
            'club_id': 1,
            'ticket_count': 100,
            'party_cover_pic': '',
        },
            {
            'description': 'Hotest Party in the City',
            'start_date': datetime(2020, 12, 10),
            'end_date': datetime(2020, 12, 11),
            'club_id': 1,
            'ticket_count': 100,
            'party_cover_pic': '',
        },
            {
            'description': 'Hotest Party in the City',
            'start_date': datetime(2020, 12, 10),
            'end_date': datetime(2020, 12, 11),
            'club_id': 1,
            'ticket_count': 100,
            'party_cover_pic': '',
        },
            {
            'description': 'Hotest Party in the City',
            'start_date': datetime(2020, 12, 10),
            'end_date': datetime(2020, 12, 11),
            'club_id': 1,
            'ticket_count': 100,
            'party_cover_pic': '',
        },
            {
            'description': 'Hotest Party in the City',
            'start_date': datetime(2020, 12, 10),
            'end_date': datetime(2020, 12, 11),
            'club_id': 1,
            'ticket_count': 100,
            'party_cover_pic': '',
        },
            {
            'description': 'Hotest Party in the City',
            'start_date': datetime(2020, 12, 10),
            'end_date': datetime(2020, 12, 11),
            'club_id': 1,
            'ticket_count': 100,
            'party_cover_pic': '',
        },
            {
            'description': 'Hotest Party in the City',
            'start_date': datetime(2020, 12, 10),
            'end_date': datetime(2020, 12, 11),
            'club_id': 1,
            'ticket_count': 100,
            'party_cover_pic': '',
        },
            {
            'description': 'Hotest Party in the City',
            'start_date': datetime(2020, 12, 10),
            'end_date': datetime(2020, 12, 11),
            'club_id': 1,
            'ticket_count': 100,
            'party_cover_pic': '',
        },
            {
            'description': 'Hotest Party in the City',
            'start_date': datetime(2020, 12, 10),
            'end_date': datetime(2020, 12, 11),
            'club_id': 1,
            'ticket_count': 100,
            'party_cover_pic': '',
        },
            {
            'description': 'Hotest Party in the City',
            'start_date': datetime(2020, 12, 10),
            'end_date': datetime(2020, 12, 11),
            'club_id': 1,
            'ticket_count': 100,
            'party_cover_pic': '',
        },
            {
            'description': 'Hotest Party in the City',
            'start_date': datetime(2020, 12, 10),
            'end_date': datetime(2020, 12, 11),
            'club_id': 1,
            'ticket_count': 100,
            'party_cover_pic': '',
        },
            {
            'description': 'Hotest Party in the City',
            'start_date': datetime(2020, 12, 10),
            'end_date': datetime(2020, 12, 11),
            'club_id': 1,
            'ticket_count': 100,
            'party_cover_pic': '',
        },
            {
            'description': 'Hotest Party in the City',
            'start_date': datetime(2020, 12, 10),
            'end_date': datetime(2020, 12, 11),
            'club_id': 1,
            'ticket_count': 100,
            'party_cover_pic': '',
        },
            {
            'description': 'Hotest Party in the City',
            'start_date': datetime(2020, 12, 10),
            'end_date': datetime(2020, 12, 11),
            'club_id': 1,
            'ticket_count': 100,
            'party_cover_pic': '',
        },
            {
            'description': 'Hotest Party in the City',
            'start_date': datetime(2020, 12, 10),
            'end_date': datetime(2020, 12, 11),
            'club_id': 1,
            'ticket_count': 100,
            'party_cover_pic': '',
        },
            {
            'description': 'Hotest Party in the City',
            'start_date': datetime(2020, 12, 10),
            'end_date': datetime(2020, 12, 11),
            'club_id': 1,
            'ticket_count': 100,
            'party_cover_pic': '',
        },
            {
            'description': 'Hotest Party in the City',
            'start_date': datetime(2020, 12, 10),
            'end_date': datetime(2020, 12, 11),
            'club_id': 1,
            'ticket_count': 100,
            'party_cover_pic': '',
        }
        ])


def downgrade():
    pass
