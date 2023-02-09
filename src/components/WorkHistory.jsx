import React from 'react'
import sales from "../assets/sales.png"
function WorkHistory() {
  return (
    <>
    <h1>Work History</h1>
    <div>
      <img className='Image' src={sales} alt="sales" />
    </div>
    <div><h1>
      Career Goals: to become a software developer
      <br></br>
      Prior Employers: Stryker
      <br></br>
      Personal Skills & Experience: HTML / CSS / JavaSCript / REACT / Node / Express / Mongodb / Git / Sales
      </h1>
    </div>
    
    </>
  )
}

export default WorkHistory