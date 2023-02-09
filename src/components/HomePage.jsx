import React from 'react'
import "../App.css"
import profilePicture from "../assets/profilePicture2.png"

function HomePage() {
  return (
    <>
    <h1>Home Page</h1>
    <div >
      <img className='homeImage' src={profilePicture} alt="Profile Picture" />
    </div>
    <div><h1>
      I am a passionate software developer based out of Burlington VT! <br></br>To me, software development is like building a car from scratch, but with way less grease involved! </h1>
    </div>
    
    </>
  )
}


export default HomePage