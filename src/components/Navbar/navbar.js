import React, { Component } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-scroll'
import './navbar.scss';

class toolbar extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Navbar className="navbar" collapseOnSelect expand="md" fixed="top" >
                        <Col xs={6}>
                            <Navbar.Brand id="brand_text" href="/">Meland Real Estate</Navbar.Brand>
                        </Col>
                        <Col>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav" >
                                <Nav className="mr-auto">
                                    <Link className="link" to="properties" spy={true} offset={-100} delay={0} smooth={false} duration={200} >Properties</Link>
                                    <Link className="link" to="communities" spy={true} offset={-100} delay={0} smooth={false} duration={200} >Communities</Link>
                                    <Link className="link" to="social" spy={true} offset={-100} delay={0} smooth={false} duration={200} >Social Media</Link>
                                    <Link className="link" to="about" spy={true} offset={-100} delay={0} smooth={false} duration={200} >About</Link>
                                    <Link className="link" to="contact" spy={true} smooth={false} duration={200}>Contact</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                    </Navbar>
                </Row>
            </Container>
        )
    }
}

export default toolbar;
