import React from 'react'
import coding from "../assets/coding.png"
import "../App.css"

function ProjectsPage() {
  return (
    <>
    <h1>Projects Page</h1>
    <div >
    <a className="Image" href="https://github.com/JamesModic?tab=repositories" target="_blank">
      <img className='Image' src={coding} alt="Coding Picture" /></a>
    </div>
    <div><h1>
      Please check out the projects ive done by clicking the picture above!</h1>
    </div>
    
    </>
  )
}

export default ProjectsPage