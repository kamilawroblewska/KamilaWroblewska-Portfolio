import React from 'react'; 
import Project from './project'; 

import WeatherDash from '../Components/Assets/ScreenProject.png';
import JavaQuiz from '../Components/Assets/screen2.png';
import WorkScheduler from '../Components/Assets/screen4.png';
import Cari from '../Components/Assets/screen3.png';
import PassGen from '../Components/Assets/screen5.png';
import ReadmeGen from '../Components/Assets/screen1.png';


const Portfolio = () => {
  const projects = [
    {
      title: 'Weather Forecast',
      image: WeatherDash,
      deployedLink: 'https://kamilawroblewska.github.io/My-weather-dashboard/',
      githubLink: 'https://github.com/kamilawroblewska/My-weather-dashboard',
    },
    {
      title: 'JavaScript Quiz',
      image: JavaQuiz,
      deployedLink: 'https://kamilawroblewska.github.io/JavaScript-Quiz/',
      githubLink: 'https://github.com/kamilawroblewska/JavaScript-Quiz',
    },
    {
      title: 'Work Day Scheduler',
      image: WorkScheduler,
      deployedLink: 'https://kamilawroblewska.github.io/Work-Day-Scheduler/',
      githubLink: 'https://github.com/kamilawroblewska/Work-Day-Scheduler',
    },
    {
      title: 'CariLol',
      image: Cari,
      deployedLink: 'https://rhipsime.github.io/cariLOL/index.html',
      githubLink: 'https://github.com/rhipsime/cariLOL',
    },
    {
      title: 'Password Generator',
      image: PassGen,
      deployedLink: 'https://kamilawroblewska.github.io/Password-generator/',
      githubLink: 'https://github.com/kamilawroblewska/Password-generator',
    },
    {
      title: 'README Generator',
      image: ReadmeGen,
      deployedLink: '#',
      githubLink: 'https://github.com/kamilawroblewska/README-Generator',
    },
  ];


  return (
    <section className='container py-4 mb-4'>
      <h1 className='portfolio-text text-center'>Portfolio</h1>
      <section className='row text-center'>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </section>
    </section>
  );
};

export default Portfolio;
