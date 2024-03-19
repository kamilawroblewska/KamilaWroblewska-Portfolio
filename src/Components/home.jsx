import React from 'react';
import { TypeAnimation } from 'react-type-animation';

// Functional component to display header
const Home = () => {
    // Returning the header with navigation bar
    return (
      <>
      <TypeAnimation
        sequence={[
          `Welcome to my Portfolio!\nI'm a inspiring Front -End Developer\nand a Designer.`,
          1000,
          "",
        ]}
        speed={50}
        style={{ whiteSpace: 'pre-line', fontSize: '2em' }}
        repeat={Infinity}
      />
      </>
    );
  };
  
  export default Home;