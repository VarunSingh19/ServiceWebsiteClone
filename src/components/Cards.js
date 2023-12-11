import React from 'react';
import { Card, Button, Col, Row ,Container} from 'react-bootstrap';
import cardData from '../CardApi/data'; // Import the data
import '../styles/homepage.css'

const MyCard = ({ id, title, iconUrl, paragraph, buttonText }) => {
  return (
    <Col sm={6} md={6} lg={6}>
          <Card style={{
              height: '297px', marginBottom: '20px',
              transition: 'background-color 0.3s ease-in-out', 
   
          }}
          className="custom-card shadow"
          >
        {/* Icon and Title */}
        <Card.Title className="d-flex align-items-center" style={{ marginLeft: '15px', marginTop: '50px' }}>
          <Card.Img src={iconUrl} style={{ marginRight: '10px',  width: '20px', height: '20px' }} />
          {title}
        </Card.Title>

        {/* Text below the icon */}
        <Card.Body>
          <Card.Text>{paragraph}</Card.Text>

          {/* Button without background */}
          <Button variant="outline-dark">{buttonText}</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

const MyCardList = () => {
    return (
      <Container style={{marginTop:'100px'}}>
            
    <Row>
    {cardData.map((item) => (
        <MyCard
          key={item.id}
          id={item.title}
          title={item.title}
          iconUrl={item.iconUrl}
          paragraph={item.paragraph}
          buttonText={item.buttonText}
        />
      ))}
    </Row>
          </Container>
  );
};

export default MyCardList;
