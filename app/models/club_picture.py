from .db import db
from sqlalchemy.types import Integer, String
from sqlalchemy.schema import Column, ForeignKey


class Club_picture(db.Model):
    __tablename__ = 'club_pictures'

    id = Column(Integer, primary_key=True)
    picture_url = Column(String, nullable=False)
    club_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "picture_url": self.picture_url,
            "club_id": self.club_id
        }
