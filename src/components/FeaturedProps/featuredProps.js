import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './featuredProps.scss';

const FeaturedProps = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Featured Listings</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>Sliding Property Listings Go Here</div>
                </Col>
            </Row>
        </Container>
    )
}

export default FeaturedProps;
