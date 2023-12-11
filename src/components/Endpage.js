import React from 'react'
import '../styles/homepage.css'
import { Container, Button } from 'react-bootstrap';
import group from '../images/group.png'

const Endpage = () => {
  return (
    <>
      <Container style={{ marginTop: '100px', marginBottom:'100px' }}>
        <div className='typography'>Your <span className='hobby'>Hobby</span>, Your <span className='passion'>Community...</span></div>
        <Button variant="outline-dark" style={{ marginTop: '70px', backgroundColor: '#8064A2', color: 'white' }}>Get Started</Button>
        <div className='d-flex' style={{ marginTop: '20px' }}>
          <img src={group} className="group img-fluid" alt="Image 1" style={{ width: '100%' }} />
        </div>
      </Container>
    </>
  )
}
export default Endpage;