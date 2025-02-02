import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import colors from '../colors'

const CommandPrompt = ({ log, setCommand, enterCommand }) => {
    return (
        <Container 
            fluid className="d-flex flex-column" 
            style={{ 
                height: '100vh', 
                paddingTop: '1vh', 
                paddingBottom: '1vh'
            }}
        >
            <Row style={{ height: '90vh', marginBottom: '1vh' }}>
                <Col>

                    <Card 
                        className="mb-3" 
                        style={{
                            backgroundColor: colors.background,
                            color: colors.logText,
                            height: '100%',
                        }}
                        >
                        <Card.Header as="h5"><b><center>Log</center></b></Card.Header>
                        <Card.Body>
                            {log.map((action, index) => (
                                <div key={index}>{action}</div>
                            ))}
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
    
            <Row style={{ height: '10vh', marginBottom: '1vh' }}>
                <Col>

                <Card 
                    text="white" 
                    className="mb-3" 
                    style={{
                        backgroundColor: '#222222',
                        color: 'white',
                        height: '100%',
                    }}
                >
                    <Card.Body>
                        <input
                            onChange={(e) => setCommand(e.target.value)}
                            onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    enterCommand();
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
