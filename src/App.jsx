import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import Footer from './components/footer';
import Home from './Components/home';
import Resume from './Components/resume';
import Projects from './components/projects';
import Contact from './components/contact';
import './App.css'
function App() {
 
  return (
     <>
     <main className='app-container'>
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/resume" element={<Resume />} />
            <Route exact path="/projects" element={<Projects />} />
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
