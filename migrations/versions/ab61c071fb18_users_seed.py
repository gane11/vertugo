"""users_seed

Revision ID: ab61c071fb18
Revises: bb51074b46f4
Create Date: 2020-12-03 19:09:56.836530

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql import table


# revision identifiers, used by Alembic.
revision = 'ab61c071fb18'
down_revision = 'bb51074b46f4'
branch_labels = None
depends_on = None


def upgrade():
    user = table('users',
        sa.Column('id', sa.Integer()),
        sa.Column('owner', sa.Boolean()),
        sa.Column('first_name', sa.String()),
        sa.Column('last_name', sa.String()),
        sa.Column('email', sa.String()),
        sa.Column('hashed_password', sa.String())
    )

    op.bulk_insert(user,
    [   {
            'owner': False,
            'first_name': 'Demo',
            'last_username': 'User',
            'email': 'demo@user.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6'
        },
        {
            'owner': True,
            'first_name': 'Demo',
            'last_username': 'Owner',
            'email': 'demo@owner.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6'
        },
        {
            'owner': True,
            'first_name': 'Valeria',
            'last_username': 'Weil',
            'email': 'valeria@weil.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6'
        },
        {   
            'owner': True,
            'first_name': 'Aleksandar',
            'last_username': 'Dordevic',
            'email': 'aleksandar@dordevic.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6'
        },
        {
            'owner': True,
            'first_name': 'Dragoljub',
            'last_username': 'Dordevic',
            'email': 'dragoljub@dordevic.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6'
        },
            {
            'owner': True,
            'first_name': 'Despot',
            'last_username': 'Djuric',
            'email': 'despot@djuric.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6'
        },
        {
            'owner': True,
            'first_name': 'Vera',
            'last_username': 'Franseze',
            'email': 'vera@franseze.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6'
        },
        {
            'owner': True,
            'first_name': 'Nev',
            'last_username': 'Roy',
            'email': 'nev@roy.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6'
        },
        {
            'owner': True,
            'first_name': 'Dzile',
            'last_username': 'Dzile',
            'email': 'dzile@dzile.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6'
        },
        {
            'owner': True,
            'first_name': 'Nevenka',
            'last_username': 'Gospavic',
            'email': 'demo@user.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6'
        }
    ])


def downgrade():
    pass
