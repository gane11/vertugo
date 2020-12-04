from .db import db
from sqlalchemy.types import Integer, String, Text, DateTime
from sqlalchemy.schema import Column, ForeignKey


class Party(db.Model):
    __tablename__ = 'parties'

    id = Column(Integer, primary_key=True)
    description = Column(Text)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime, nullable=False)
    club_id = Column(Integer, ForeignKey("clubs.id"), nullable=False)
    ticket_count = Column(Integer, nullable=False)
    party_cover_pic = Column(String, nullable=False)

    tickets = db.relationship('Ticket', cascade='all, delete', backref='Party')

    def to_dict(self):
        return {
            "id": self.id,
            "description": self.description,
            "start_date": self.start_date,
            "end_date": self.end_date,
            "club_id": self.club_id,
            "ticket_count": self.ticket_count,
            "party_cover_pic": self.party_cover_pic
        }
