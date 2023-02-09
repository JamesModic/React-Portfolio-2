import { Routes, Route, NavLink } from "react-router-dom";
import React from 'react';
import './App.css';
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import HomePage from "./components/HomePage";
import Interests from "./components/Interests";
// eslint-disable-next-line
import ProjectsPage from './components/ProjectsPage';
import WorkHistory from './components/WorkHistory';

function App() {
  return (
    <div className='background'>
      <div className='title'>
      <h1>James Modic's Professional Portfolio</h1>
      </div>
      <nav className='navBar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/AboutMe'>About Me</NavLink>
        <NavLink to='/WorkHistory'>Work History</NavLink>
        <NavLink to='/Interests'>Interests</NavLink>
        <NavLink to='/ProjectsPage'>Coding Projects</NavLink>
        <NavLink to='/ContactMe'>Contact Me</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/AboutMe" element={<AboutMe/>}></Route>
          <Route path="/WorkHistory" element={<WorkHistory/>}></Route>
          <Route path= "/Interests" element={<Interests/>}></Route>
          <Route path= "/ProjectsPage" element={<ProjectsPage/>}></Route>
          <Route path= "/ContactMe" element={<ContactMe/>}></Route>
        </Routes>
        <footer>
        <a class="footer-link" href="https://www.linkedin.com/in/james-modic-08a878142/">LinkedIn</a>
          <a class="footer-link" href="https://pubmed.ncbi.nlm.nih.gov/30061053/">Publication</a>
          <a class="footer-link" href="https://jamesmodic.netlify.app/James%20Modic%20Software%20Developer%20Resume.pdf">Resume</a>
        </footer>
      </main>
    </div>
  );
}

export default App;
