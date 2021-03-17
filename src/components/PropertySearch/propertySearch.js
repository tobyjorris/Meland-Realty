import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import realtorAPIFetch from "../../utilities/realtorAPIFetch";
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
                    <div>City or ZIP Code</div>
                </Col>
                <Col>
                    <div>Property Type</div>
                </Col>
                <Col>
                    <div>Beds</div>
                </Col>
                <Col>
                    <div>Baths</div>
                </Col>
                <Col>
                    <div>$ Min. Price</div>
                </Col>
                <Col>
                    <div>$ Max. Price</div>
                </Col>
                <Col>
                    <Button variant="light" size="lg" onClick={realtorAPIFetch}>Start Search</Button>
                </Col>
            </Row>
        </Container>

    )
}

export default PropertySearch;
