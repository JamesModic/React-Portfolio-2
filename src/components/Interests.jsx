import React from 'react'
import skiing from "../assets/skiing.png"

function Interests() {
  return (
    <>
    <h1>Interests</h1>
    <div >
      <img className='image' src={skiing} alt="Skiing Picture" />
    </div>
    <div><h1>
      My interests include skiing, hiking, and mountain biking!
      </h1>
    </div>
    
    </>
  )
}

export default Interests