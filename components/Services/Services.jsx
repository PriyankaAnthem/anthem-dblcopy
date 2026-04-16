import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import ServiceOfferings from "../../data/services/services.json";

function Services() {
    return (
        <div className='section section-padding-bottom section-padding-top'>
            <Container className="mt-5 services-container">
                <Row>
                    {ServiceOfferings.services.slice(-6).reverse().map((service) => (
                        <Col key={service.id} md={4} className="mb-4">
                            <Card className="service-card shadow-sm border-0">
                                <Card.Body>
                                    <Card.Title className="service-title">{service.title}</Card.Title>
                                    <Card.Text className="service-intro">{service.introduction}</Card.Text>
                                    <ListGroup variant="flush" className="service-list">
                                        {service.key_services.map((item, index) => (
                                            <ListGroup.Item key={index} className="service-list-item">
                                                {item}
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                    <Card.Text className="mt-3 service-why">
                                        <strong>Why Choose Us:</strong> {service.why_choose_us}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Services;
