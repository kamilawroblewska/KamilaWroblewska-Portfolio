import React from 'react';
import ResumeDownload from './Assets/KAMILAWROBLEWSKA.pdf'
import '../styles/resume.css'
import Screen from '../Components/Assets/ScreenshotResume.png'

const Resume = () => {

    return (
      <section className='container mb-4 py-4 col-md-6 contact'>
      <h1 className='text-center'>Resume</h1>
      <div className='card p-3 mt-3'>
      <img className='resume'
      src={Screen}/>
        <a href={ResumeDownload} download className='d-flex justify-content-center text-decoration-none'>
          <button className='btn btn-primary formButton'>Download Resume</button>
        </a>
      </div>
    </section>
  );
};
  
  export default Resume;