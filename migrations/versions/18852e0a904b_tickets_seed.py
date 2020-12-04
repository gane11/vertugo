"""tickets_seed

Revision ID: 18852e0a904b
Revises: f54477b8076b
Create Date: 2020-12-03 19:10:53.065534

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql import table
from datetime import datetime


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
        'start_date': datetime(2020, 12, 10),
        'end_date': datetime(2020, 12, 11),
        'qr_code': 'sdad',
        'party_id': 1,
        'user_id': 1
    },
        {
        'expired': False,
        'start_date': datetime(2020, 12, 10),
        'end_date': datetime(2020, 12, 11),
        'qr_code': 'sdad',
        'party_id': 1,
        'user_id': 1
    },
        {
        'expired': False,
        'start_date': datetime(2020, 12, 10),
        'end_date': datetime(2020, 12, 11),
        'qr_code': 'sdad',
        'party_id': 1,
        'user_id': 1
    }
    ])


def downgrade():
    pass
