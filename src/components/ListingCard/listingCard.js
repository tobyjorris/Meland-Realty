import React from 'react';
import { Card, Col, Button } from "react-bootstrap";
import './listingCard.scss';
import formatAddressForURL from "../../utilities/addressURLFormater";

const ListingCard = props => {
    const encodedURL = formatAddressForURL(props.data.address)
    console.log(encodedURL)

    // const addressSearchString = `${this.props.}`

    return(
        <Col xs={6}>
            <Card className="listing-card">
                <Card.Img className="listing-card-image" variant="top" src={props.data.thumbnail} />
                <Card.ImgOverlay>
                    <h3 className="listing-price">${props.data.price}</h3>
                </Card.ImgOverlay>
                <Card.Body>
                    <Card.Title>{props.data.address.line} {props.data.address.city} {props.data.address.postal_code}</Card.Title>
                    <Card.Text>
                        {props.data.baths} Bath, {props.data.beds} Bed
                    </Card.Text>
                    <Button variant="primary">More Info</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ListingCard;
