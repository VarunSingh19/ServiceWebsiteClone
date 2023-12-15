import React, { useState } from 'react';
import { Card, Button, Col, Container, Row } from 'react-bootstrap';
import cardData from '../CardApi/data';
import '../styles/homepage.css';

const MyCard = ({ id, title, iconUrl, paragraph, buttonText, index }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const getColorByIndex = (index) => {
    const colors = ['#8064A2', '#77933C', '#C0504D', '#0096C8'];
    return colors[index % colors.length];
  };

  const cardStyle = {
    height: '297px',
    marginBottom: '20px',
    backgroundColor: hovered ? getColorByIndex(index) : 'transparent',
  };

  const imageStyle = {
    marginRight: '10px',
    width: '20px',
    height: '20px',
    filter: hovered ? `brightness(0) invert(1) sepia(1) hue-rotate(200deg)` : 'none',
  };

  return (
    <Col sm={6} md={6} lg={6}>
      <Card
        style={cardStyle}
        className="custom-card shadow"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        {/* Icon and Title */}
        <Card.Title className="d-flex align-items-center" style={{ marginLeft: '15px', marginTop: '50px' }}>
          <Card.Img src={iconUrl} style={imageStyle} alt={title} />
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
    <Container style={{ marginTop: '100px' }}>
      <Row>
        {cardData.map((item, index) => (
          <MyCard
            key={item.id}
            id={item.title}
            title={item.title}
            iconUrl={item.iconUrl}
            paragraph={item.paragraph}
            buttonText={item.buttonText}
            index={index}
          />
        ))}
      </Row>
    </Container>
  );
};

export default MyCardList;
