from flask import Flask, jsonify
from flask_socketio import SocketIO, emit, join_room
from flask_cors import CORS

from GameState import GameState
from utils.logger import get_logger

logger = get_logger("server")

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

game = GameState()

@socketio.on("join_game")
def join_game(data: dict):
    player_name = data["player_name"]

    logger.info(f"Player '{player_name}' joined.")
    game.add_player(player_name)

    join_room("dungeon")
    emit("map_update", {"map": game.map}, room="dungeon")

@socketio.on("player_move")
def player_move(data: dict):
    player_name = data["player_name"]
    direction = data["direction"]

    room = game.move_player(player_name, direction)
    if room is not None:
        logger.info(f"Moved player '{player_name}' via '{direction}' to {room.name}.")
        emit("player_move", {"player": player_name, "room": room.to_dict()})
    else:
        logger.info(f"Player '{player_name}' tried to move illegally via '{direction}'.")
        emit("player_move_failed", {"player": player_name})

@app.route("/get_game_state", methods=["GET"])
def get_game_state():
    return jsonify(game.to_dict())

if __name__ == "__main__":
    logger.info("Booting server...")
    socketio.run(app, host="0.0.0.0", port=5000)
