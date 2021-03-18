import React from 'react';
import { Card, Col, Button, Container, Row } from "react-bootstrap";
import './listingCard.scss';
import formatAddressForURL from "../../utilities/addressURLFormater";

const ListingCard = props => {
    const encodedURL = formatAddressForURL(props.data.address);
    console.log(props)

    return(
        <Col xs={12} sm={6}>
            <Card className="listing-card">
                <Card.Img className="listing-card-image" variant="top" src={props.data.thumbnail} />
                <h4 className="listing-price">${props.data.price}</h4>
                <Card.Body>
                    <Card.Title>
                        {props.data.address.line} {props.data.address.city} {props.data.address.postal_code}
                    </Card.Title>
                    <Card.Text>
                        <Container>
                            <Row>
                                <Col>
                                    <span>{props.data.baths} Baths </span>
                                    <br/>
                                    <span>{props.data.beds} Beds</span>
                                </Col>
                                <Col>
                                    <span>Unit Size: {props.data.building_size.size} {props.data.building_size.units}</span>
                                    <br/>
                                    {props.data.prop_type !== 'condo' && props.data.lot_size ? <span>Lot Size: {props.data.lot_size.size} {props.data.lot_size.units}</span> : null}
                                    <br/>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Text>
                    <Button className="listing-button">More Info</Button>
                    <a href={encodedURL} rel="noopener noreferrer" target="_blank">See On Google</a>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ListingCard;
