"""club_pictures_seed

Revision ID: 1430171f2e7f
Revises: 18852e0a904b
Create Date: 2020-12-03 19:11:10.590367

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql import table


# revision identifiers, used by Alembic.
revision = '1430171f2e7f'
down_revision = '18852e0a904b'
branch_labels = None
depends_on = None


def upgrade():
    club_picture = table('club_pictures',
        sa.Column('id', sa.Integer()),
        sa.Column('picture_url', sa.String()),
        sa.Column('club_id', sa.Integer())
        )

    op.bulk_insert(club_picture,
        [{
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
        {
            'picture_url': '',
            'club_id': 2,
        },
        {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
        {
            'picture_url': '',
            'club_id': 2,
        },
        {
            'picture_url': '',
            'club_id': 2,
        },
        {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
        {
            'picture_url': '',
            'club_id': 2,
        },
        {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
        {
            'picture_url': '',
            'club_id': 2,
        },
        {
            'picture_url': '',
            'club_id': 2,
        },
        {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
        {
            'picture_url': '',
            'club_id': 2,
        },
        {
            'picture_url': '',
            'club_id': 2,
        },
        {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
        {
            'picture_url': '',
            'club_id': 2,
        },
        {
            'picture_url': '',
            'club_id': 2,
        },
        {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
        {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        },
            {
            'picture_url': '',
            'club_id': 2,
        }
        ])


def downgrade():
    pass
