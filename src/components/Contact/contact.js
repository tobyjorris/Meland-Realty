import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import './contact.scss'

const ContactForm = () => {
    const [show, setShow] = useState(false);
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        phone: '',
        contact: '',
        source: '',
    })

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setContactInfo({
            ...contactInfo,
            [name]: value
        });
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, phone, contact, source } = contactInfo
        let templateParams = {
            from_name: name,
            email: email,
            phone: phone,
            contact: contact,
            source: source,
        }
        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICEID,
            process.env.REACT_APP_EMAILJS_TEMPLATEID,
            templateParams,
            process.env.REACT_APP_EMAILJS_USERID
        ).then(response => {
            console.log(response.text)
        }).catch(error => {
            console.log(error)
        })
        handleShow();
        resetForm();
    }

    const resetForm = () => {
        setContactInfo({name: '', email: '', phone: '', contact: '', source: ''} )
    }

    return (
        <Container className="contactBackground" name="contact" fluid>
            <Container className="contactForm">
                <Row>
                    <Col xs={12} sm={6}>
                        <div>Anderson Realty Logo</div>
                        <div>Meland Realty Logo</div>
                        <div>P: 555-555-5555</div>
                        <div>E: bmeland@andersonrealty.com</div>
                    </Col>
                    <Col xs={12} sm={6} className="align-self-center flex-column">
                        <h2>Send Me a Message</h2>
                        <Form className="form" onSubmit={handleSubmit}>
                            <Form.Row>
                                <Col xs="12" sm="6">
                                    <Form.Group controlId="formGridName">
                                        <Form.Control className="contact-input" placeholder="Name" type="text" name="name" onChange={handleChange}/>
                                    </Form.Group>
                                </Col>
                                <Col  xs="12" sm="6">
                                    <Form.Group controlId="formGridNumber">
                                        <Form.Control className="contact-input" placeholder="Email" type="email" name="email" onChange={handleChange}/>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col  xs="12" sm="6">
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control className="contact-input" placeholder="Phone No." type="phone" name="phone" onChange={handleChange}/>
                                    </Form.Group>
                                </Col>
                                <Col  xs="12" sm="6">
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control className="contact-input" placeholder="Mobile No." type="mo-phone" name="mobile-phone" onChange={handleChange}/>
                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col xs={12} >
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Control className="contact-input" placeholder="Message" as="textarea" rows={3} />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Button variant="light" type="submit" >
                                Send Message
                            </Button>
                            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Thank You</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>You've successfully submitted your contact information</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default ContactForm;
