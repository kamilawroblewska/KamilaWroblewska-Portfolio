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
        <span className='col-md-8 d-flex align-items-center about-animation'>

        <TypeAnimation
        sequence={[
          "I'm Kamila Wroblewska",
          1000,
          "I'm a Front-End Developer",
          1000,
          "I'm a Designer",
          1000,
          '',
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '2em',
        display: 'block',
        wordBreak: 'break-all'
         }}
      />
        </span>
      </div>
    </section>
      
      </>
    );
  };
  
  export default Home;