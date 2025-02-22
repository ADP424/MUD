from model.Class import Class
from model.PlayerCharacter import PlayerCharacter


class Player:

    def __init__(self, username: str, hashed_password: str, characters: list[PlayerCharacter] = None):
        self.username = username
        self.hashed_password = hashed_password
        self.characters = characters if characters is not None else []

    def to_dict(self):
        return {
            "username": self.username,
            "hashed_password": self.hashed_password,
            "characters": [character.to_dict() for character in self.characters],
        }
