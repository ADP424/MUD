from model.Room import Room
from model.Player import Player


class GameState:

    def __init__(self):
        self.players: dict[Player] = {}
        self.map: list[list[Room]] = []
