from flask import Flask, jsonify
from flask_socketio import SocketIO, emit, join_room
from flask_cors import CORS

from GameState import GameState
from utils.logger import get_logger

logger = get_logger("server")

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

game = GameState(socketio)
