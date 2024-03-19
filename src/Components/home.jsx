import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import MyPhoto from './Assets/MyPhoto3.png'
import '../styles/home.css'

// Functional component to display about me section on home page
const Home = () => {
    // Returning the welcome section with profile picture 
    return (
      <>
      <section className='container py-4 mb-4'>
      <div className='row m-auto'>
       
        <div className='col-md-4 d-flex justify-content-center'>
          <img src={MyPhoto} alt='Profile picture' className='my-image' width='375' height='375' />
        </div>
        <div className='col-md-8 d-flex align-items-center about-animation'>
          
          <TypeAnimation
        sequence={[
          `Hi!\nI'm Kamila Wroblewska,\nJunior Front-End Developer`,
          1000,
          "",
        ]}
        speed={50}
        style={{ whiteSpace: 'pre-line', fontSize: '2em' }}
        repeat={Infinity}
      />
        </div>
      </div>
    </section>
      
      </>
    );
  };
  
  export default Home;