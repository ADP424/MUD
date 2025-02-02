import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import colors from '../colors'

const MiniMap = ({ dungeonMap }) => {
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
                <Card.Header as="h5"><b><center>Mini-Map</center></b></Card.Header>
                <Card.Body>
                    {dungeonMap.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((tile, tileIndex) => (
                                <td key={tileIndex}>{tile}</td>
                            ))}
                        </tr>
                    ))}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default MiniMap;
