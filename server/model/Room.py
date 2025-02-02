from model.NPC import NPC


class Room:

    def __init__(self, type: str, description: str, NPCs: list[NPC] = []):
        self.type = type
        self.description = description
        self.NPCs: list[NPC] = NPCs
