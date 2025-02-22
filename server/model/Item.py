from abc import ABC, abstractmethod

from model.Character import Character

class Item(ABC):

    def __init__(self, name: str, description: str):
        self.name = name
        self.descripton = description

    @abstractmethod
    def use(target: Character):
        pass
