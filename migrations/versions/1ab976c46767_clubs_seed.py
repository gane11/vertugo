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
        sa.Column('name', sa.String()),
        sa.Column('description', sa.String()),
        sa.Column('city', sa.String()),
        sa.Column('state', sa.String()),
        sa.Column('address', sa.String()),
        sa.Column('club_cover_pic', sa.String()),
        sa.Column('owner_id',sa.Integer()),
        sa.Column('lat', sa.Integer()),
        sa.Column('lnh', sa.Integer())

        )

    op.bulk_insert(club,
    [{
        'name': '1015 Folsom',
        'description': 'Best Nightclub in the area',
        'city': 'San Francisco',
        'state': 'California',
        'address': '2 sumadijske brigade',
        'club_cover_pic': 'https://vertugo.s3.amazonaws.com/san+francisco/1015folsom/1015folsomSfCover.jpeg',
        'owner_id': 3,
        'lat': 37.7781159,
        'lng': -122.4079888
    },
        {
        'name': 'Harlot',
        'description': 'Best Nightclub in the area',
        'city': 'San Francisco',
        'state': 'California',
        'address': '2 sumadijske brigade',
        'club_cover_pic': 'https://vertugo.s3.amazonaws.com/san+francisco/harlot/harlotCover.jpeg',
        'owner_id': 2,
        'lat': 37.7885736,
        'lng': -122.4003856
    },
        {
        'name': 'Love + Propaganda',
        'description': 'Best Nightclub in the area',
        'city': 'San Francisco',
        'state': 'California',
        'address': '2 sumadijske brigade',
        'club_cover_pic': 'https://vertugo.s3.amazonaws.com/san+francisco/loveandprop/loveandpropSfCover.png',
        'owner_id': 3,
        'lat': 37.7889839,
        'lng': -122.408605
    },
        {
        'name': 'Temple',
        'description': 'Best Nightclub in the area',
        'city': 'San Francisco',
        'state': 'California',
        'address': '2 sumadijske brigade',
        'club_cover_pic': 'https://vertugo.s3.amazonaws.com/san+francisco/temple/templeCover.png',
        'owner_id': 4,
        'lat': 37.7879602,
        'lng': -122.3994359
    },
        {
        'name': 'The Academy',
        'description': 'Best Nightclub in the area',
        'city': 'Los Angeles',
        'state': 'California',
        'address': '',
        'club_cover_pic': 'https://vertugo.s3.amazonaws.com/Los+Angeles/academy/academyLaCover.jpeg',
        'owner_id': 5,
        'lat': 34.1020338,
        'lng': -118.3230873
    },
        {
        'name': 'Club DB',
        'description': 'Best Nightclub in the area',
        'city': 'Los Angeles',
        'state': 'California',
        'address': '2 sumadijske brigade',
        'club_cover_pic': 'https://vertugo.s3.amazonaws.com/Los+Angeles/clubdb/clubdbLaCover.jpeg',
        'owner_id': 4,
        'lat': 33.9405147,
        'lng': -118.1370068
    },
        {
        'name': 'Exchange',
        'description': 'Best Nightclub in the area',
        'city': 'Los Angeles',
        'state': 'California',
        'address': '2 sumadijske brigade',
        'club_cover_pic': 'https://vertugo.s3.amazonaws.com/Los+Angeles/exxhange/exchangeLaCover.jpeg',
        'owner_id': 5,
        'lat': 34.0454532,
        'lng': -118.2514723
    },
        {
        'name': 'Sound LA',
        'description': 'Best Nightclub in the area',
        'city': 'Los Angeles',
        'state': 'California',
        'address': '2 sumadijske brigade',
        'club_cover_pic': 'https://vertugo.s3.amazonaws.com/Los+Angeles/sound/soundLaCover.jpg',
        'owner_id': 6,
        'lat': 34.1010302,
        'lng': -118.33822
    },
        {
        'name': 'Wynwood Fear Factory',
        'description': 'Best Nightclub in the area',
        'city': 'Miami',
        'state': 'Florida',
        'address': '2 sumadijske brigade',
        'club_cover_pic': 'https://vertugo.s3.amazonaws.com/Miami/wynwoodfactory/wynwoodfactoryCover.jpeg',
        'owner_id': 6,
        'lat': 25.8000745,
        'lng': -80.1960156
    },
        {
        'name': 'E11even',
        'description': 'Best Nightclub in the area',
        'city': 'Miami',
        'state': 'Florida',
        'address': '2 sumadijske brigade',
        'club_cover_pic': 'https://vertugo.s3.amazonaws.com/Miami/e11even/e11evenMiCover.jpeg',
        'owner_id': 7,
        'lat': 25.7850628,
        'lng': -80.1958393
    },
        {
        'name': 'LIV',
        'description': 'Best Nightclub in the area',
        'city': 'Miami',
        'state': 'Florida',
        'address': '2 sumadijske brigade',
        'club_cover_pic': 'https://vertugo.s3.amazonaws.com/Miami/liv/livMiCover.jpeg',
        'owner_id': 7,
        'lat': 25.8183038,
        'lng': -80.1244647
    },
        {
        'name': 'Space',
        'description': 'Best Nightclub in the area',
        'city': 'Miami',
        'state': 'Florida',
        'address': '2 sumadijske brigade',
        'club_cover_pic': 'https://vertugo.s3.amazonaws.com/Miami/space/spaceMiCover1.jpeg',
        'owner_id': 8,
        'lat': 25.7846778,
        'lng': -80.1953907
    },
        {
        'name': 'House Of YES',
        'description': 'Best Nightclub in the area',
        'city': 'New York',
        'state': 'New York',
        'address': '2 sumadijske brigade',
        'club_cover_pic': 'https://vertugo.s3.amazonaws.com/New+York/houseofyes/houseofyesNyCover.jpg',
        'owner_id': 8,
        'lat': 40.706804,
        'lng': -73.9257887
    },
        {
        'name': 'Lavo',
        'description': 'Best Nightclub in the area',
        'city': 'New York',
        'state': 'New York',
        'address': '2 sumadijske brigade',
        'club_cover_pic': 'https://vertugo.s3.amazonaws.com/New+York/lavo/lavoNyCover.jpg',
        'owner_id': 9,
        'lat': 40.7629633,
        'lng': -73.9735326
    },
        {
        'name': 'Marquee',
        'description': 'Best Nightclub in the area',
        'city': 'New York',
        'state': 'New York',
        'address': '2 sumadijske brigade',
        'club_cover_pic': 'https://vertugo.s3.amazonaws.com/New+York/marquee/marqueeNyCover.jpeg',
        'owner_id': 9,
        'lat': 40.7501015,
        'lng': -74.0050029
    },
        {
        'name': 'The Standard',
        'description': 'Best Nightclub in the area',
        'city': 'New York',
        'state': 'New York',
        'address': '2 sumadijske brigade',
        'club_cover_pic': 'https://vertugo.s3.amazonaws.com/New+York/thestandard/thestandardNy2.jpeg',
        'owner_id': 8,
        'lat': 40.7384003,
        'lng': -74.0036276
    },
        {
        'name': 'Antones',
        'description': 'Best Nightclub in the area',
        'city': 'Austin',
        'state': 'Texas',
        'address': '2 sumadijske brigade',
        'club_cover_pic': 'https://vertugo.s3.amazonaws.com/Austin/antones/antonesAuCover1.jpeg',
        'owner_id': 9,
        'lat': 30.2660503,
        'lng': -97.7425834
    },
        {
        'name': 'Rio',
        'description': 'Best Nightclub in the area',
        'city': 'Austin',
        'state': 'Texas',
        'address': '2 sumadijske brigade',
        'club_cover_pic': 'https://vertugo.s3.amazonaws.com/Austin/rio/rioAuCover.jpeg',
        'owner_id': 8,
        'lat': 30.2700123,
        'lng': -97.75141
    },
        {
        'name': 'The Rose Room',
        'description': 'Upscale, modern nightspot with table service on the main dance floor & 2 upper balconies.',
        'city': 'Austin',
        'state': 'Texas',
        'address': '2 sumadijske brigade',
        'club_cover_pic': 'https://vertugo.s3.amazonaws.com/Austin/theroseroom/theroseroomAuCover.jpeg',
        'owner_id': 9,
        'lat': 30.4012565,
        'lng': -97.7250905
    },
        {
        'name': 'The Rosevelt Room',
        'description': 'Inventive craft cocktails are served in an airy, industrial-chic space with a cozy upstairs lounge.',
        'city': 'Austin',
        'state': 'Texas',
        'address': '2 sumadijske brigade',
        'club_cover_pic': 'https://vertugo.s3.amazonaws.com/Austin/therosevelt/theroseveltAuCover.jpeg',
        'owner_id': 8,
        'lat': 30.2677932,
        'lng': -97.748466
    }
    ])


def downgrade():
   op.drop_table('tickets')
   op.drop_table('saved_parties')
   op.drop_table('parties')
   op.drop_table('club_pictures')
   op.drop_table('clubs')
   op.drop_table('users')
