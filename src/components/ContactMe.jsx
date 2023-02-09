import React from 'react'
import phone from "../assets/phoneimage.png"

function ContactMe() {
  return (
    <>
    <h1>Contact Me</h1>
    <div >
      <img className='image' src={phone} alt="Mountain Picture" />
    </div>
    <div><h1>
      email: jamesmodic7@gmail.com<br></br>
      cell: 774-269-1885
      </h1>
    </div>
    
    </>
  )
}

export default ContactMe