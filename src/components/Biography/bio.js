import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './bio.scss';
import brandon_bio_pic_1 from '../../assets/brandon_1.jpg'

const Biography = () => {
    return (
        <Container fluid className="biography_background">
            <Container className="biography_container">
                <Row>
                    <Col xs={8}>
                        <div>
                            <p>
                                Brandon runs a full-service Real Estate Agency service representing Buyers, Sellers,
                                and Lessees of Residential Property in Minneapolis. The key words
                                in that first sentence is service. In an industry that is known for having a bad
                                reputation when it comes to lack of market knowledge, lack of communication, and
                                overall customer experience, Brandon's goal was to flip the script and provide an
                                unparalleled level of service to his clients. By getting to the core of his client's
                                needs, Brandon is able to build a deep sense of trust with his clients and offer
                                solutions that make any real estate transaction as smooth, stress free, and fun
                                as possible!
                            </p>
                            <p>
                                Brandon Meland possesses a true gratitude, respect, and love for life, real estate,
                                and health. When he was only 23 years old, Brandon set out to create a positive impact
                                on the Minneapolis real estate market. With a lifetime of experience working on
                                teams and with people to achieve a common goal, Brandon brings a competitive edge for
                                each client and for every sale, purchase, and lease. Growing up in a successful sales
                                oriented household, he knows it’s not just about closing a sale; it’s about making
                                sure the customer is content and fulfilled with their experience. Trustworthy,
                                dedicated and focused, Brandon prides himself on building lifelong friendships with his
                                clients and pushing everyone in his life to be their most fulfilled selves. It is safe
                                to say he wants nothing but the best for everyone he comes into contact with!
                            </p>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div>
                            <img className="bio_pic" src={brandon_bio_pic_1} alt="brandon" />
                        </div>
                    </Col>
                </Row>
            </Container>

        </Container>
    )
}

export default Biography;
