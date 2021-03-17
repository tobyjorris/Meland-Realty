import React, {Component} from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './featuredProps.scss';
import getListings from "../../utilities/realtorAPIFetch";
import axios from "axios";

class FeaturedProps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            listings: []
        }
    }

    componentDidMount() {
        this.setState({...this.state, isFetching: true})
        getListings().then(response => {
            this.setState({listings: response.data.properties.map((listing =>
                        <Card>
                            <Card.Header>{listing.address.line}</Card.Header>
                        </Card>
                )), isFetching: false});
        })
    }



    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2>Featured Listings</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>{this.state.isFetching ? 'Fetching Listings...' : null}</div>
                        <div>{this.state.listings ? this.state.listings : null}</div>
                    </Col>
                </Row>
            </Container>
        )
    };

}

export default FeaturedProps;
