import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="em">
            <div className="em-header">
                <Navbar bg="dark" expand="lg" sticky="top">
                    <Navbar.Brand href="#home"><span class="em-logo">em</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="/journal">Journal</Nav.Link>
                        <Nav.Link href="/comfort">Comfort</Nav.Link>
                        <Nav.Link href="/reflect">Reflect</Nav.Link>
                        <Nav.Link href="/settings">Settings</Nav.Link>
                        <Nav.Link href="/help">Help</Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <Container>
                <Row>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
