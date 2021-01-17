from .db import db
from sqlalchemy.types import Integer, String, Text, Date, Boolean
from sqlalchemy.schema import Column, ForeignKey


class Ticket(db.Model):
    __tablename__ = 'tickets'

    id = Column(Integer, primary_key=True)
    expired = Column(Boolean)
    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=False)
    qr_code = Column(String)
    party_id = Column(Integer, ForeignKey("parties.id"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "expired": self.expired,
            "start_date": self.start_date,
            "end_date": self.end_date,
            "qr_code": self.qr_code,
            "party_id": self.party_id,
            "user_id": self.user_id
        }

