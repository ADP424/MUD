class NPC:

    def __init__(self, name: str, health: int):
        self.name = name
        self.health = health

    def to_dict(self):
        return {"name": self.name, "health": self.health}
