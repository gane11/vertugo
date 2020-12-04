from .db import db
from sqlalchemy.types import Integer
from sqlalchemy.schema import Column, ForeignKey


class Saved_party(db.Model):
    __tablename__ = 'saved_parties'

    id = Column(Integer, primary_key=True)
    party_id = Column(Integer, ForeignKey("parties.id"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "party_id": self.party_id,
            "user_id": self.user_id
        }
