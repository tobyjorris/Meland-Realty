import React, { Component } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-scroll'
import './navbar.scss';

class toolbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: "top"
        }
    }

    handleScroll() {
        const scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 120) {
            if (this.state.status !== "scrolled") {
                this.setState({ status: "scrolled" });
            }
        } else {
            if (this.state.status !== "top") {
                this.setState({ status: "top" });
            }
        }
    }

    handleBrandClick(event) {
        event.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll)
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Navbar className="navbar" collapseOnSelect expand="md" fixed="top"
                        style={{
                            height: this.state.status === "top" ? '80px' : '50px',
                            backgroundColor: this.state.status === "top" ? "rgba(0, 33, 61, .6)" : "rgba(0, 33, 61, 1)",
                            opacity: this.state.status === "top" ? "80%" : "100%",
                            transition: "400ms"
                    }}
                    >
                        <Col xs={6}>
                            <Navbar.Brand id="brand_text" href="/" onClick={this.handleBrandClick.bind(this)}>Meland Real Estate</Navbar.Brand>
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
