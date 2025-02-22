from model.Room import Room
from model.Player import Player
from model.PlayerCharacter import PlayerCharacter
from model.NPC import NPC


class GameState:

    def __init__(self):
        self.players: dict[str, Player] = {}
        self.map: list[list[Room]] = [
            [Room("Kitchen", "K", "Yum yum.", NPCs=[NPC("Goober", 10), NPC("Schmoober", 12)])]
        ]

    def add_player(self, player_name: str):
        self.players[player_name] = Player(player_name)

    def move_player(self, player_name: str, direction: str) -> Room | None:
        """
        Move the given player to an adjacent room.

        Parameters
        ----------
        player_name: str
            The name of the player to move.

        direction: 'N' | 'S' | 'E' | 'W'
            The direction to move the player in.

        Returns
        -------
        Room | None
            The room the player moved to. None if the move didn't work.
        """

        player = self.players[player_name]
        x, y = player.coordinates
        match direction:
            case "N":
                return self._move_player_to_room(player, (x, y - 1))
            case "S":
                return self._move_player_to_room(player, (x, y + 1))
            case "E":
                return self._move_player_to_room(player, (x + 1, y))
            case "W":
                return self._move_player_to_room(player, (x - 1, y))
            case _:
                return None

    def _move_player_to_room(self, player: Player, new_coordinates: tuple[int, int]) -> Room:
        x, y = new_coordinates
        if 0 <= y < len(self.map) and 0 <= x < len(self.map[y]):
            player.coordinates = new_coordinates
            return self.map[y][x]

    def to_dict(self):
        return {
            "players": {player.username: player.to_dict() for player in self.players.values()},
            "map": [[room.to_dict() for room in row] for row in self.map],
        }
