from .db import db
from sqlalchemy.types import Integer, String, Text, Float
from sqlalchemy.schema import Column, ForeignKey


class Club(db.Model):
    __tablename__ = 'clubs'

    id = Column(Integer, primary_key=True)
    name = Column(String(60), nullable=False)
    description = Column(Text)
    city = Column(String(60), nullable=False)
    state = Column(String(50), nullable=False)
    address = Column(String(300), nullable=False)
    club_cover_pic = Column(String, nullable=False)
    owner_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    lat = Column(Float)
    lng = Column(Float)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "city": self.city,
            "state": self.state,
            "address": self.address,
            "club_cover_pic": self.club_cover_pic,
            "owner_id": self.owner_id,
            "lat": self.lat,
            "lng": self.lng
        }
