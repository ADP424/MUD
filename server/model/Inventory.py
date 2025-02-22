from model.Item import Item


class Inventory:

    def __init__(self, items: list[Item] = None):
        self.items = items if items is not None else []
