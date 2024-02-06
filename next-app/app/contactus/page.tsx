"use client"
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Layout from '../components/layout';

  
const ContactUs = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; } ) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Layout>
            <Container>
            <h2 className='pb-3'>
                Contact me for work!
            </h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Text className="text-muted">
                Contact us about anything related to our company or services. 
                We'll do our best to get back to you as soon as possible.
                </Form.Text>
                <Form.Group className="mb-3" controlId="contactName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="contactPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="phone" placeholder="Phone Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required type="email" placeholder="name@example.com" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="contactSubject ">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactQuestion">
                <Form.Label>Question</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Container>
        </Layout>
    )
}


export default ContactUs;