import React from 'react'
import "../App.css"
import mountain from "../assets/Mountain.png"

function AboutMe() {
  return (
    <>
    <h1>About Me</h1>
    <div >
      <img className='mountainImage' src={mountain} alt="Mountain Picture" />
    </div>
    <div><h2>
    Software development has been a passion project of mine that I have been pursuing for 2+ years. Growing up, I always loved working with outboard motors; repairing them to sell and working on my own. I loved the problem solving side of it but wanted something with more robust business applications so I initially pursued a role as a medical device sales representative. After being exposed to software development 2 years post graduation from college, I realized that it was the perfect blend of what I am passionate about; problem solving and skills applicable to large business ideas!
    <br></br>

      <br></br>
      Outside of software development, I am also passionate about playing in the mountains. 
      Growing up in Massachusetts made skiing a difficult endeavor which prompted me to move to Vermont for school and never want to leave! I have been living in Vermont for over 8 years now and love all the mountain activities it has to offer; from skiing in the winter to mountain biking in the summer! 
       </h2>
    </div>
    
    </>
  )
}

export default AboutMe;