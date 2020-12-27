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
            'picture_url': 'https://vertugo.s3.amazonaws.com/san+francisco/1015folsom/1015folsomSf1.jpeg',
            'club_id': 1,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/san+francisco/1015folsom/1015folsomSf2.jpeg',
            'club_id': 1,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/san+francisco/1015folsom/1015folsomSfCover.jpeg',
            'club_id': 1,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/san+francisco/harlot/harlot1sf.jpeg',
            'club_id': 2,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/san+francisco/harlot/harlot2sf.jpeg',
            'club_id': 2,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/san+francisco/harlot/harlotCover.jpeg',
            'club_id': 2,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/san+francisco/loveandprop/loveandpropSf1.jpeg',
            'club_id': 3,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/san+francisco/loveandprop/loveandpropSf2.jpeg',
            'club_id': 3,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/san+francisco/loveandprop/loveandpropSfCover.png',
            'club_id': 3,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/san+francisco/temple/temple1.jpeg',
            'club_id': 4,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/san+francisco/temple/temple2.jpeg',
            'club_id': 4,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/san+francisco/temple/templeCover.png',
            'club_id': 4,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/academy/academyLa1.jpeg',
            'club_id': 5,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/academy/academyLa2.jpeg',
            'club_id': 5,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/academy/academyLaCover.jpeg',
            'club_id': 5,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/clubdb/clubdb2.jpg',
            'club_id': 6,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/clubdb/clubdbLa1.jpg',
            'club_id': 6,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/clubdb/clubdbLaCover.jpeg',
            'club_id': 6,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/exxhange/exchangeLa1.jpeg',
            'club_id': 7,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/exxhange/exchangeLa2.jpg',
            'club_id': 7,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/exxhange/exchangeLaCover.jpeg',
            'club_id': 7,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa1.jpeg',
            'club_id': 8,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLa2.jpeg',
            'club_id': 8,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLaCover.jpg',
            'club_id': 8,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Miami/wynwoodfactory/wynwoodfactory1.jpeg',
            'club_id': 9,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Miami/wynwoodfactory/wynwoodfactory2.jpeg',
            'club_id': 9,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Miami/wynwoodfactory/wynwoodfactoryCover.jpeg',
            'club_id': 9,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Miami/e11even/e11even2.jpeg',
            'club_id': 10,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Miami/e11even/e11evenMi1.jpeg',
            'club_id': 10,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Miami/e11even/e11evenMiCover.jpeg',
            'club_id': 10,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Miami/liv/livMi1.jpeg',
            'club_id': 11,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Miami/liv/livMi2.jpeg',
            'club_id': 11,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Miami/liv/livMiCover.jpeg',
            'club_id': 11,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Miami/space/spaceMi1.jpeg',
            'club_id': 12,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Miami/space/spaceMiCover.jpeg',
            'club_id': 12,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Miami/space/spaceMiCover1.jpeg',
            'club_id': 12,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/New+York/houseofyes/houseofyes2.jpeg',
            'club_id': 13,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/New+York/houseofyes/houseofyesNy1.png',
            'club_id': 13,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/New+York/houseofyes/houseofyesNyCover.jpg',
            'club_id': 13,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/New+York/lavo/lavoNy1.jpeg',
            'club_id': 14,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/New+York/lavo/lavoNy2.jpeg',
            'club_id': 14,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/New+York/lavo/lavoNyCover.jpg',
            'club_id': 14,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/New+York/marquee/marqueeNy1.jpeg',
            'club_id': 15,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/New+York/marquee/marqueeNy2.jpeg',
            'club_id': 15,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/New+York/marquee/marqueeNyCover.jpeg',
            'club_id': 15,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/New+York/thestandard/thestandardNy1.jpeg',
            'club_id': 16,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/New+York/thestandard/thestandardNy2.jpeg',
            'club_id': 16,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/New+York/thestandard/thestandardNyCover.jpeg',
            'club_id': 16,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Austin/antones/antionesAu1.jpeg',
            'club_id': 17,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Austin/antones/antonesAuCover.jpeg',
            'club_id': 17,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Austin/antones/antonesAuCover1.jpeg',
            'club_id': 17,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Austin/rio/rioAu1.jpeg',
            'club_id': 18,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Austin/rio/rioAu2.jpeg',
            'club_id': 18,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Austin/rio/rioAuCover.jpeg',
            'club_id': 18,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Austin/theroseroom/theroseroomAu1.jpg',
            'club_id': 19,
        },
        {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Austin/theroseroom/theroseroomAu2.jpeg',
            'club_id': 19,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Austin/theroseroom/theroseroomAuCover.jpeg',
            'club_id': 19,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Austin/therosevelt/theroseveltAu1.jpeg',
            'club_id': 20,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Austin/therosevelt/theroseveltAu2.jpeg',
            'club_id': 20,
        },
            {
            'picture_url': 'https://vertugo.s3.amazonaws.com/Austin/therosevelt/theroseveltAuCover.jpeg',
            'club_id': 20,
        }
        ])


def downgrade():
    op.drop_table('tickets')
    op.drop_table('saved_parties')
    op.drop_table('parties')
    op.drop_table('club_pictures')
    op.drop_table('clubs')
    op.drop_table('users')
