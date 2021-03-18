import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import './propertySearch.scss';

const PropertySearch = () => {

    return(
        <Container fluid className="prop-search">
            <Row>
                <Col>
                    <h2>Start Your Search Here</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form className="form" onSubmit={'/'}>
                        <Form.Row>
                            <Col sm={12} md={2}>
                                <Form.Group controlId="formGridName">
                                    <Form.Control className="search-input" placeholder="City or ZIP Code" type="text" name="city" onChange={"/"}/>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={2}>
                                <Form.Group controlId="formGridName">
                                    <Form.Control className="search-input" placeholder="Property Type" type="text" name="type" onChange={"/"}/>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={1}>
                                <Form.Group controlId="formGridName">
                                    <Form.Control className="search-input" placeholder="Beds" type="text" name="beds" onChange={"/"}/>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={1}>
                                <Form.Group controlId="formGridName">
                                    <Form.Control className="search-input" placeholder="Baths" type="text" name="baths" onChange={"/"}/>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={2}>
                                <Form.Group controlId="formGridName">
                                    <Form.Control className="search-input" placeholder="# Min. Price" type="text" name="min_price" onChange={"/"}/>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={2}>
                                <Form.Group controlId="formGridName">
                                    <Form.Control className="search-input" placeholder="$ Max. Price" type="text" name="max_price" onChange={"/"}/>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={1}>
                                <Button variant="light" type="submit" >
                                    Search
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}

export default PropertySearch;
