import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/homepage.css'

const AddMentor = () => {
    return (
        <Container style={{marginTop:'100px'}}>

            <Card className='shadow'>
                {/* Icon */}
                <Card.Title className="d-flex align-items-center" style={{ marginLeft: '15px', marginTop: '35px' }}>
                    <Card.Img src='https://icon-library.com/images/quotes-icon/quotes-icon-11.jpg' alt='Logo' style={{ marginRight: '10px', width: '30px', height: '30px' }} />
                    Testimonials
                </Card.Title>

                {/* Text below the icon */}
                <Card.Body>
                    <Card.Text>
                        In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.    </Card.Text>

                    {/* Button without background */}
                </Card.Body>
                <Card.Body style={{ backgroundColor: '#CCC1DA', margin: '15px', paddingRight: '15px' }} className='rounded'>
                    <div className='container'>

                        <div style={{ backgroundColor: 'white', borderRadius: '100%' }}>

                            <audio id="music" preload="true">
                                <a src="#" />
                            </audio>
                        </div>
                        <div id="audioplayer" className='d-flex'> 
                            <i id="pButton" class="fas fa-play"></i>
                            <div id="timeline">
                                <div id="playhead"></div>
                            </div>
                        
                            <img src='https://tse1.mm.bing.net/th?id=OIP.0ivs6TOTxbo0ArFFwaM41QHaEo&pid=Api&rs=1&c=1&qlt=95&w=194&h=121' alt='image' style={{ widows:'20px', height:'30px', marginLeft:'20px',borderRadius:'100%'}} />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AddMentor;
