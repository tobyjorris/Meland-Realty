import React, {Component} from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './featuredProps.scss';
import getListings from "../../utilities/realtorAPIFetch";
import ListingCard from "../ListingCard/listingCard";

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
            console.log(response)
            this.setState({listings: response.data.properties.map((listing =>
                        <ListingCard key={listing.property_id} data={listing}/>
                )), isFetching: false});
        })
    }

    render() {
        return (
            <Container className="featured-listings">
                <Row>
                    <Col>
                        <h2>Featured Listings</h2>
                    </Col>
                </Row>
                <Row>
                        <div>{this.state.isFetching ? 'Fetching Listings...' : null}</div>
                        <React.Fragment>{this.state.listings ? this.state.listings : null}</React.Fragment>
                </Row>
            </Container>
        )
    };

}

export default FeaturedProps;
