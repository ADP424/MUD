import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import colors from '../colors'

const CommandPrompt = ({ log, command, setCommand, enterCommand }) => {
    const logRef = useRef(null);

    const scrollLog = () => {
        if (logRef.current) {
            requestAnimationFrame(() => {
                logRef.current.scrollTop = logRef.current.scrollHeight;
            });
        }
    }

    return (
        <Container 
            fluid className="d-flex flex-column" 
            style={{ 
                width: '100vh', 
                height: '100vh', 
                paddingTop: '1vh', 
                paddingBottom: '1vh'
            }}
        >
            <Row style={{ height: '88vh', marginBottom: '1vh' }}>
                <Col>

                    <Card
                        className="scroll" 
                        style={{
                            backgroundColor: colors.background,
                            color: colors.logText,
                            height: '88vh',
                        }}
                        ref={logRef}
                    >
                        <Card.Header as="h5"><b><center>--- Beginning of Log ---</center></b></Card.Header>
                        <Card.Body>
                            {log.map((action, index) => (
                                <div key={index}>{action}</div>
                            ))}
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
    
            <Row style={{ height: '9vh', marginBottom: '1vh' }}>
                <Col>

                    <Card 
                        text="white"
                        style={{
                            backgroundColor: '#222222',
                            color: 'white',
                            height: '100%',
                        }}
                    >
                        <Card.Body>
                            <input
                                value={command}
                                onChange={(e) => setCommand(e.target.value)}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        enterCommand();
                                        setCommand("");
                                        scrollLog();
                                    }
                                }}
                                style={{
                                    backgroundColor: '#000000',
                                    color: '#ffffff',
                                    width: '100%'
                                }}
                            ></input>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    );
};

export default CommandPrompt;
