import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CommandPrompt from "./CommandPrompt";
import MiniMap from "./MiniMap";

const URL = ":3"

const socket = io(URL);

const Game = () => {
    // game info
    const [dungeonMap, setDungeonMap] = useState([
        ['.', '.', '.', '.', '.', '.', '.', '.', ],
        ['.', '.', '.', '.', '.', '.', '.', '.', ],
        ['.', '.', '.', '.', '.', '.', '.', '.', ],
        ['.', '.', '.', '.', '.', '.', '.', '.', ],
        ['.', '.', '.', '.', '.', '.', '.', '.', ],
        ['.', '.', '.', '.', '.', '.', '.', '.', ],
        ['.', '.', '.', '.', '.', '.', '.', '.', ],
        ['.', '.', '.', '.', '.', '.', '.', '.', ],
    ]);

    // player info
    const [playerName, setPlayerName] = useState("");
    const [coordinates, setCoordinates] = useState([0, 0])
    const [playerClass, setPlayerClass] = useState(null);

    // ui
    const [log, setLog] = useState([]);
    const [command, setCommand] = useState("");

    useEffect(() => {

        return () => {
        
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
                <Container>
                    <CommandPrompt
                        log={log}
                        setCommand={setCommand}
                        enterCommand={enterCommand}
                    />
                </Container>
            </Col>

            <Col md={3} lg={3}>
                <Row md={4} lg={4}>
                    <MiniMap
                        dungeonMap={dungeonMap}
                    />
                </Row>
            </Col>
        </Row>
        </Container>
    );
};

export default Game;
