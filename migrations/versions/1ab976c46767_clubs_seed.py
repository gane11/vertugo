"""clubs_seed

Revision ID: 1ab976c46767
Revises: ab61c071fb18
Create Date: 2020-12-03 19:10:11.586558

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql import table

# revision identifiers, used by Alembic.
revision = '1ab976c46767'
down_revision = 'ab61c071fb18'
branch_labels = None
depends_on = None


def upgrade():
    club = table('clubs',
        sa.Column('id', sa.Integer()),
        sa.Column('owner', sa.Boolean()),
        sa.Column('first_name', sa.String()),
        sa.Column('last_name', sa.String()),
        sa.Column('email', sa.String()),
        sa.Column('hashed_password', sa.String())
        )

    op.bulk_insert(club,
    [{
        'description': 'Best Nightclub in the area',
        'city': 'San Francisco',
        'state': 'California',
        'address': '',
        'club_cover_pic': '',
        'owner_id': 2
    },
        {
        'description': 'Best Nightclub in the area',
        'city': 'San Francisco',
        'state': 'California',
        'address': '',
        'club_cover_pic': '',
        'owner_id': 2
    },
        {
        'description': 'Best Nightclub in the area',
        'city': 'San Francisco',
        'state': 'California',
        'address': '',
        'club_cover_pic': '',
        'owner_id': 2
    },
        {
        'description': 'Best Nightclub in the area',
        'city': 'San Francisco',
        'state': 'California',
        'address': '',
        'club_cover_pic': '',
        'owner_id': 2
    },
        {
        'description': 'Best Nightclub in the area',
        'city': 'Los Angeles',
        'state': 'California',
        'address': '',
        'club_cover_pic': '',
        'owner_id': 2
    },
        {
        'description': 'Best Nightclub in the area',
        'city': 'Los Angeles',
        'state': 'California',
        'address': '',
        'club_cover_pic': '',
        'owner_id': 2
    },
        {
        'description': 'Best Nightclub in the area',
        'city': 'Los Angeles',
        'state': 'California',
        'address': '',
        'club_cover_pic': '',
        'owner_id': 2
    },
        {
        'description': 'Best Nightclub in the area',
        'city': 'Los Angeles',
        'state': 'California',
        'address': '',
        'club_cover_pic': '',
        'owner_id': 2
    },
        {
        'description': 'Best Nightclub in the area',
        'city': 'Miami',
        'state': 'Florida',
        'address': '',
        'club_cover_pic': '',
        'owner_id': 2
    },
        {
        'description': 'Best Nightclub in the area',
        'city': 'Miami',
        'state': 'Florida',
        'address': '',
        'club_cover_pic': '',
        'owner_id': 2
    },
        {
        'description': 'Best Nightclub in the area',
        'city': 'Miami',
        'state': 'Florida',
        'address': '',
        'club_cover_pic': '',
        'owner_id': 2
    },
        {
        'description': 'Best Nightclub in the area',
        'city': 'Miami',
        'state': 'Florida',
        'address': '',
        'club_cover_pic': '',
        'owner_id': 2
    },
        {
        'description': 'Best Nightclub in the area',
        'city': 'New York',
        'state': 'New York',
        'address': '',
        'club_cover_pic': '',
        'owner_id': 2
    },
        {
        'description': 'Best Nightclub in the area',
        'city': 'New York',
        'state': 'New York',
        'address': '',
        'club_cover_pic': '',
        'owner_id': 2
    },
        {
        'description': 'Best Nightclub in the area',
        'city': 'New York',
        'state': 'New York',
        'address': '',
        'club_cover_pic': '',
        'owner_id': 2
    },
        {
        'description': 'Best Nightclub in the area',
        'city': 'New York',
        'state': 'New York',
        'address': '',
        'club_cover_pic': '',
        'owner_id': 2
    },
        {
        'description': 'Best Nightclub in the area',
        'city': 'Austin',
        'state': 'Texas',
        'address': '',
        'club_cover_pic': '',
        'owner_id': 2
    },
        {
        'description': 'Best Nightclub in the area',
        'city': 'Austin',
        'state': 'Texas',
        'address': '',
        'club_cover_pic': '',
        'owner_id': 2
    },
        {
        'description': 'Best Nightclub in the area',
        'city': 'Austin',
        'state': 'Texas',
        'address': '',
        'club_cover_pic': '',
        'owner_id': 2
    },
        {
        'description': 'Best Nightclub in the area',
        'city': 'Austin',
        'state': 'Texas,
        'address': '',
        'club_cover_pic': '',
        'owner_id': 2
    }
    ])


def downgrade():
    pass
