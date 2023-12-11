import React from 'react';
import AppNavbar from './components/navbar';
import Homepage from './components/homepage';
import Cards from './components/Cards';
import AddMentor from './components/AddMentor';
import Testimonials from './components/Testimonials';
import Endpage from './components/Endpage';
import Footer from './components/Footer';
function App() {
  return (
    <>
    
      <AppNavbar />
      <Homepage />
      <Cards />
      <AddMentor />
      <Testimonials />
      <Endpage />
      <Footer/>
    </>
  );
}

export default App;
