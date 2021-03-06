"""tickets_seed

Revision ID: 18852e0a904b
Revises: f54477b8076b
Create Date: 2020-12-03 19:10:53.065534

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql import table
from datetime import date


# revision identifiers, used by Alembic.
revision = '18852e0a904b'
down_revision = 'f54477b8076b'
branch_labels = None
depends_on = None


def upgrade():
    ticket = table('tickets',
        sa.Column('id', sa.Integer()),
        sa.Column('expired', sa.Boolean()),
        sa.Column('start_date', sa.DateTime()),
        sa.Column('end_date', sa.DateTime()),
        sa.Column('qr_code', sa.String()),
        sa.Column('party_id', sa.Integer()),
        sa.Column('user_id', sa.Integer())
        )
    
    op.bulk_insert(ticket,
    [{
        'expired': False,
        'start_date': date(2020, 1, 30),
        'end_date': date(2020, 1, 30),
        'qr_code': 'sdad',
        'party_id': 1,
        'user_id': 1
    },
        {
        'expired': False,
        'start_date': date(2020,1, 31),
        'end_date': date(2020, 1, 31),
        'qr_code': 'sdad',
        'party_id': 2,
        'user_id': 1
    },
        {
        'expired': False,
        'start_date': date(2020, 2, 6),
        'end_date': date(2020, 2, 6),
        'qr_code': 'sdad',
        'party_id': 3,
        'user_id': 1
    }
    ])


def downgrade():
    op.drop_table('tickets')
    op.drop_table('saved_parties')
    op.drop_table('parties')
    op.drop_table('club_pictures')
    op.drop_table('clubs')
    op.drop_table('users')
