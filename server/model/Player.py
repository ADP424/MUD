from model.Class import Class


class Player:

    def __init__(self, username: str, userClass: Class = Class("None"), coordinates: tuple[int, int] = (0, 0)):
        self.username = username
        self.userClass = userClass
        self.coordinates = coordinates

    def to_dict(self):
        return {
            "username": self.username,
            "class": self.userClass.to_dict(),
            "coordinates": self.coordinates
        }
