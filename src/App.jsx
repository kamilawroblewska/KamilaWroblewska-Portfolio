import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import Footer from './Components/footer';
import Home from './Components/home';
import Resume from './Components/resume';
import Projects from './Components/projects';
import Contact from './Components/contact';
import './App.css'


function App() {
 
  return (
     <>
     <main className='app-container'>
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/resume" element={<Resume />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
      </main>
      </>
  )
}

export default App
