import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import { WhatsApp } from '@material-ui/icons'
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
      <a href= 'https://www.linkedin.com/in/ruthrasankar'><LinkedInIcon /> </a>
      <a href='https://gmail.com' > <EmailIcon /> </a>
      <a href='https://wa.me/+919788748782'> <WhatsApp /></a>

      </div>
      <p> &copy; 2023 Ruthrasankar.com </p>
    </div>
  )
}

export default Footer
