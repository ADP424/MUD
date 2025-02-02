import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import colors from '../colors'

const RoomSummary = ({ currentRoom }) => {
    return (
        <Container
            fluid className="d-flex flex-column" 
            style={{
                width: '100vh',
                paddingTop: '1vh', 
                paddingBottom: '1vh'
            }}
        >
            <Card
                className="mb-3" 
                style={{
                    backgroundColor: colors.background,
                    color: colors.logText,
                    width: '100%',
                }}
            >
                <Card.Header as="h5"><b><center>{currentRoom ? currentRoom.name : ""}</center></b></Card.Header>
                <Card.Body>
                    {currentRoom ? currentRoom.NPCs.map((NPC, index) => (
                        <div key={index}>{NPC.name} | {NPC.health} ❤️</div>
                    )) : <div></div>}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default RoomSummary;
