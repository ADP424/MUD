from model.Class import Class


class Player:

    def __init__(self, username: str, userClass: Class = Class("None")):
        self.username = username
        self.userClass = userClass
