import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { IoMdUnlock } from "react-icons/io";
import '../styles/homepage.css'
import leftimage from '../images/leftimage.png'
import rightimage from '../images/rightimage.png'

const Homepage = () => {

  const [showSignIn, setShowSignIn] = useState(true);

  const toggleSection = () => {
    setShowSignIn(!showSignIn);
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={6} className='mb-5'>
          <Container>
            <div className='typography'>Explore your <span className='hobby'>hobby</span> or <span className='passion'>passion</span></div>
            <p>
              Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
            </p>
            <p>
              If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.
            </p>
            <div className='d-flex justify-content-center'>
              <img src={leftimage} className="leftimage" alt="Image 1" />
              <img src={rightimage} className="rightimage" alt="Image 2" />
            </div>
          </Container>
        </Col>
        <Col lg={6}>
          <Container>
            <div className='d-flex align-items-center mb-3'>
              <button
                onClick={() => toggleSection()}
                className={`mx-auto btn custom-btn ${showSignIn ? 'active' : ''}`}
                id='signd'
              >
                Sign In
              </button>
              <button
                onClick={() => toggleSection()}
                className={`mx-auto btn custom-btn ${showSignIn ? '' : 'active'}`}
              >
                Join In
              </button>
            </div>
            {/* Sign In with Google */}
            <div className='d-flex align-items-center mb-3 pl-3 '
              style={{ border: "2px solid #ccc", borderRadius: "8px",cursor:'pointer' }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"

              >
                <g clip-path="url(#clip0_3143_120)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.44827 8.00005C3.44827 7.48043 3.53452 6.98218 3.68865 6.51493L0.992398 4.45605C0.466898 5.52293 0.170898 6.72518 0.170898 8.00005C0.170898 9.27393 0.466648 10.4753 0.991273 11.5416L3.68602 9.47868C3.5334 9.01355 3.44827 8.51718 3.44827 8.00005Z" fill="#FBBC05" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.18206 3.27275C9.31094 3.27275 10.3306 3.67275 11.1317 4.32725L13.4622 2C12.0421 0.763625 10.2213 0 8.18206 0C5.01606 0 2.29506 1.8105 0.992188 4.456L3.68831 6.51487C4.30956 4.62912 6.08044 3.27275 8.18206 3.27275Z" fill="#EA4335" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.18206 12.7274C6.08056 12.7274 4.30969 11.371 3.68844 9.48523L0.992188 11.5437C2.29506 14.1896 5.01606 16.0001 8.18206 16.0001C10.1361 16.0001 12.0017 15.3062 13.4018 14.0062L10.8426 12.0277C10.1204 12.4826 9.21106 12.7274 8.18206 12.7274Z" fill="#34A853" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8293 8.00022C15.8293 7.52747 15.7564 7.01834 15.6471 6.54572H8.18213V9.63659H12.4791C12.2643 10.6905 11.6795 11.5006 10.8426 12.0278L13.4019 14.0063C14.8726 12.6413 15.8293 10.6078 15.8293 8.00022Z" fill="#4285F4" />
                </g>
                <defs>
                  <clipPath id="clip0_3143_120">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div className='mx-auto'>Continue with Google</div>
            </div>

            {/* Sign In with Facebook */}
            <div className='d-flex align-items-center mb-3 pl-3'
              style={{ border: "2px solid #ccc", borderRadius: "8px", cursor:'pointer' }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"  >
                <path d="M15.9 8C15.9 11.9027 13.0699 15.1445 9.35 15.785V10.4125H11.1141H11.1999L11.2129 10.3277L11.5676 8.01516L11.5853 7.9H11.4688H9.35V6.49931C9.35 6.19752 9.42409 5.91182 9.60483 5.70282C9.78323 5.49653 10.0785 5.35 10.5537 5.35H11.5625H11.6625V5.25V3.28125V3.19687L11.5793 3.18268L11.5625 3.28125L11.5793 3.18267L11.5793 3.18266L11.5791 3.18264L11.5785 3.18254L11.5764 3.18219L11.5683 3.18084L11.5372 3.17579C11.5101 3.17146 11.4705 3.16529 11.4203 3.1579C11.32 3.14313 11.1772 3.12345 11.0068 3.10379C10.6666 3.0645 10.2147 3.025 9.77172 3.025C8.83783 3.025 8.05466 3.30837 7.50485 3.8587C6.95494 4.40912 6.65 5.21504 6.65 6.2375V7.9H4.71875H4.61875V8V10.3125V10.4125H4.71875H6.65V15.785C2.93015 15.1445 0.1 11.9027 0.1 8C0.1 3.63695 3.63695 0.1 8 0.1C12.3631 0.1 15.9 3.63695 15.9 8Z" fill="#1877F2" stroke="white" stroke-width="0.2" />
              </svg>

              <div className='mx-auto'>Continue with Facebook</div>
            </div>

            <div className='d-flex align-items-center mb-3'>
              <div className='flex-grow-1 border-top border-bottom'></div>
              <div className='mx-2'>Or connect with</div>
              <div className='flex-grow-1 border-top border-bottom'></div>
            </div>

            {showSignIn ? (
              /* Sign In content */
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className='input-group'>
                    <Form.Control type="password" placeholder="Enter your password" required />
                  </div>
                </Form.Group>


                <div className='d-flex justify-content-between mb-3'>
                  <div className='form-check ' >
                    <input type="checkbox" className="form-check-input" id="rememberMe" style={{cursor:'pointer'}}/>
                    <label className="form-check-label" htmlFor="rememberMe" style={{cursor:'pointer'}}>Remember Me</label>
                  </div>
                  <div>
                    <a href="#" className="text-decoration-none"><IoMdUnlock className='mr-2' />Forget Password </a>
                  </div>
                </div>
              </Form>
            ) : (
              /* Join In content */
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className='input-group'>
                    <Form.Control type="password" placeholder="Enter your password" required />
                  </div>
                  </Form.Group>
                  <Form.Group className="mb-3">
                  <div className='input-group'>
                    <Form.Control type="password" placeholder="Enter your password Again" required />
                  </div>
                </Form.Group>


                <div className='d-flex justify-between mb-3'>
                  <div className="ml-auto">
                    <a href="#" className="text-decoration-none"><IoMdUnlock className='mr-2' />Forget Password </a>
                  </div>
                </div>

                <div className='text-center'>
                  <h7>By continuing, you agree to our <span style={{fontWeight:'bold', cursor:'pointer'}} >Terms of Service</span > and <span style={{fontWeight:'bold',cursor:'pointer'}}>Privacy Policy.</span></h7>
                </div>
              </Form>

            )}

            <div
              className='d-flex align-items-center justify-content-center mb-3 pl-3 mt-4 link-primary'
              style={{ border: "2px solid #ccc", borderRadius: "8px", backgroundColor: "#FFFFFF",cursor: "pointer", }}
            >
              <button
                style={{
                  border: "none",
                  backgroundColor: "#FFFFFF",
                  color: "#000000",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  outline: "none",
                  cursor: 'pointer'
                }}
              >
                Continue
              </button>
            </div>


          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
