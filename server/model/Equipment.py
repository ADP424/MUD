from abc import abstractmethod

from model.Item import Item
from model.enums.EquipmentTypes import EquipmentType

class Equipment(Item):

    def __init__(self, name: str, description: str, type: EquipmentType):
        super().__init__(name, description)
        self.type = type

    @abstractmethod
    def get_actions():
        pass

    @abstractmethod
    def get_stat_buffs():
        pass
