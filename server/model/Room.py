from model.NPC import NPC


class Room:

    def __init__(
        self, name: str, icon: str, description: str, coordinates: tuple[int, int] = (0, 0), NPCs: list[NPC] = []
    ):
        self.name = name
        self.icon = icon
        self.description = description
        self.coordinates = coordinates
        self.NPCs: list[NPC] = NPCs

    def to_dict(self):
        return {
            "name": self.name,
            "icon": self.icon,
            "description": self.description,
            "coordinates": self.coordinates,
            "NPCs": [NPC.to_dict() for NPC in self.NPCs],
        }
