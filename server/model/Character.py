from abc import ABC, abstractmethod


from CONSTANTS import BASE_ESSENCE, BASE_HEALTH, BASE_STAMINA, ESSENCE_PER_SOUL, HEALTH_PER_FORTITUDE, STAMINA_PER_VIGILANCE
from model.Inventory import Inventory


class Character(ABC):

    def __init__(
        self,
        name: str,
        description: str,
        fortitude: int = 0,
        vigilance: int = 0,
        soul: int = 0,
        strength: int = 0,
        dexterity: int = 0,
        intellect: int = 0,
        inventory: Inventory = None,
        electrum: int = 0
    ):
        self.name = name
        self.description = description
        self.fortitude = fortitude
        self.vigilance = vigilance
        self.soul = soul
        self.strength = strength
        self.dexterity = dexterity
        self.intellect = intellect
        self.inventory = inventory if inventory is not None else Inventory()
        self.electrum = electrum

        self.max_health = BASE_HEALTH + HEALTH_PER_FORTITUDE * fortitude
        self.current_health = self.max_health
        self.max_stamina = BASE_STAMINA + STAMINA_PER_VIGILANCE * vigilance
        self.current_stamina = self.max_stamina
        self.max_essence = BASE_ESSENCE + ESSENCE_PER_SOUL * soul
        self.current_essence = self.max_essence

    def take_damage(self, damage: int):
        self.current_health -= damage
