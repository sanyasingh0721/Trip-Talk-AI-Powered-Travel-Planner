import React from 'react';
import './newsletter.css';

import { Col, Container, Row } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';


const Newsletter = () => {
  return <section className="newsletter">
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subscribe now to get useful travelling information.</h2>
                    <div className="newsletter__input">
                        <input type="email" placeholder="Enter your email" />
                        <button className="btn newsletter__btn">Subscribe</button>
                    </div>

                    <p>Stay one step ahead on your next adventure! Subscribe to receive insider travel tips, destination guides, exclusive deals, and must-know advice — straight to your inbox. Whether you're planning a weekend getaway or a world tour, we've got the insights to make your journey unforgettable.</p>

                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter