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
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 1,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 2,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 3,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 4,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 5,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 6,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 7,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 8,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 9,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 10,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 11,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 12,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 13,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 14,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 15,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 16,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 17,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 18,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 19,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 20,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 1,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 1,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 2,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 2,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 1,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 2,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 2,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 3,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 3,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 4,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 4,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 3,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 5,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 5,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 1,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 5,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 4,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 6,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 6,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 6,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 7,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 7,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 8,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 8,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 8,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 9,
        }
        ])


def downgrade():
    op.drop_table('tickets')
    op.drop_table('saved_parties')
    op.drop_table('parties')
    op.drop_table('club_pictures')
    op.drop_table('clubs')
    op.drop_table('users')
