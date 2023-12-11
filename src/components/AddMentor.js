import React from 'react';
import { Card, Button,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import the Bootstrap CSS

const AddMentor = () => {
    return (
      <Container style={{marginTop:'100px'}}>
            
    <Card className='shadow'>
      {/* Icon */}
      <Card.Title className="d-flex align-items-center" style={{ marginLeft: '15px', marginTop: '35px' }}>
          <Card.Img src='http://cdn.onlinewebfonts.com/svg/img_28497.png' alt='Logo' style={{ marginRight: '10px',  width: '20px', height: '20px' }} />
          Add your own
        </Card.Title>

        {/* Text below the icon */}
        <Card.Body>
                  <Card.Text>
                  Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page
          </Card.Text>

          {/* Button without background */}
          <Button variant="outline-dark" style={{marginBottom: '35px'}}>Add new</Button>
      </Card.Body>
    </Card>
      </Container>
  );
};

export default AddMentor;
