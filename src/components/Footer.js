import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/homepage.css'


const Footer = () => {
    return (
        <footer>
            {/* <Container> */}
            <Row>
                {/* Column 1 */}
                <Col md={3}>
                    <h5>Hobbycue</h5>
                    <ul>
                        <li>About Us</li>
                        <li>Our Services</li>
                        <li>Work With Us</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </ul>
                </Col>

                {/* Column 2 */}
                <Col md={3}>
                    <h5>How Do I</h5>
                    <ul>
                        <li>Sign Up</li>
                        <li>Add a Listing</li>
                        <li>Claim Listing</li>
                        <li>Post a Query</li>
                        <li>Add a Blog Post</li>
                        <li>Other Queries</li>
                    </ul>
                </Col>

                {/* Column 3 */}
                <Col md={3}>
                    <h5>Quick Links</h5>
                    <ul>
                        <li>Listings</li>
                        <li>Blog Posts</li>
                        <li>Shop / Store</li>
                        <li>Community</li>
                    </ul>
                </Col>

                {/* Column 4 */}
                <Col md={3}>
                    <Row>
                        <Col>
                            <h5>Social Media</h5>
                            {/* Facebook */}
                            <i className="fab fa-facebook"></i>

                            {/* Twitter */}
                            <i className="fab fa-twitter"></i>

                            {/* Instagram */}
                            <a href='https://instagram.com/varunsingh_09' target='_blank'><i className="fab fa-instagram"></i></a>

                            {/* Pinterest */}
                            <i className="fab fa-pinterest"></i>

                            {/* Google */}
                            <i className="fab fa-google"></i>

                            {/* YouTube */}
                            <i className="fab fa-youtube"></i>

                            {/* Telegram */}
                            <i className="fab fa-telegram"></i>

                            {/* Mail */}
                            <i className="fas fa-envelope"></i>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div class="invite-container  " style={{ marginLeft: '30px', marginTop: '15px',marginBottom:'10px' }}>
                                {/* Add an input field for inviting friends */}
                                <input type="email" placeholder="Email ID" />
                                <button class="invite-button">Invite</button>
                            </div>

                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="copyright">
                © Purple Cues Private Limited
            </div>
        </footer>
    );
};

export default Footer;
