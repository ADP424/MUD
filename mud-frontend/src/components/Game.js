import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CommandPrompt from "./CommandPrompt";
import MiniMap from "./MiniMap";
import RoomSummary from "./RoomSummary"

const URL = "http://localhost:5000"

const socket = io(URL);

const Game = () => {
    // game info
    const [dungeonMap, setDungeonMap] = useState([]);
    const [currentRoom, setCurrentRoom] = useState(null);
    const [players, setPlayers] = useState([]);

    // player info
    const [playerName, setPlayerName] = useState("");
    const [coordinates, setCoordinates] = useState([0, 0])
    const [playerClass, setPlayerClass] = useState(null);

    // ui
    const [log, setLog] = useState([]);
    const [command, setCommand] = useState("");

    useEffect(() => {

        socket.on("join_game", (data) => {
            // TODO: Add player to otherPlayers when they join
        });

        socket.on("player_move", (data) => {
            // TODO: Update player location
        });

        const fetchGameData = async () => {
            try {
                const response = await fetch(`${URL}/get_game_state`, {
                    method: "GET",
                });
                const gameState = await response.json();
                setPlayers(gameState.players)
                setDungeonMap(gameState.map)
                setCurrentRoom(gameState.map[coordinates[0]][coordinates[1]])
            } catch (error) {
                console.error("Error starting game:", error);
            }
        };

        fetchGameData();

        return () => {
            socket.off("join_game");
            socket.off("player_move");
        };
    }, []);

    const enterCommand = () => {
        setLog((prevLog) => [...prevLog, command]);
    };

    return (
        <Container>
            <Row>
                <Col md={3} lg={3}>

                </Col>

                <Col md={6} lg={6}>
                    <Row>
                        <CommandPrompt
                            log={log}
                            setCommand={setCommand}
                            enterCommand={enterCommand}
                        />
                    </Row>
                </Col>

                <Col md={3} lg={3}>
                    <Row md={4} lg={4}>
                        <MiniMap
                            dungeonMap={dungeonMap}
                        />
                    </Row>
                    <Row md={8} lg={8}>
                        <RoomSummary
                            currentRoom={currentRoom}
                        />
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Game;
