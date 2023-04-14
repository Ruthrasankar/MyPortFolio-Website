import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GitHubIcon from "@material-ui/icons/GitHub"
import "../styles/Home.css"



function Home() {
  return (
    <>
    


    <div className='home' >
    <video className='BG_video' autoPlay muted loop >
          <source src='https://player.vimeo.com/external/459030212.sd.mp4?s=277d1899bc58632a4dbbb912bc4a38b874120a0e&profile_id=164&oauth2_token_id=57447761.mp4'  type="video/mp4" />
        </video>
      <div className='about' >      
        <h2>Hi, I'm <span className='name'> Ruthrasankar </span> </h2>
        <hr></hr>
        <div className='prompt'> 
            <p> A Full-Stack Web Developer with a passion for working, learning and developing  </p>

            <a href= 'https://www.linkedin.com/in/ruthrasankar'> <LinkedInIcon /> </a>
            <a href='https://gmail.com' > <EmailIcon /> </a>
            <a href='https://github.com/Ruthrasankar'> <GitHubIcon /> </a>

        </div>
      </div>
      <div className='skills'>
      <h1>Skills</h1>
        <ol className='list'>
            <li className='item'>
                <h3> Front-end </h3>
                <span>ReactJS , HTML , CSS , NPM , MaterialUI , Yarn  </span>
            </li>

            <hr></hr>

            <li className='item'>
                <h3> Back-end </h3>
                <span>NodeJS , ExpressJS , MongoDB  </span>
            </li>

            <hr></hr>

            <li className='item'>
                <h3> Languages </h3>
                <span>JavaScript , Python  </span>
            </li>

            <hr></hr>

            <li className='item'>
                <h3> Technologies </h3>
                <span> VisualStudio , GitHub, NPM, YARN</span>
            </li>

        </ol>

      </div>
    </div>
  </>
  )
}

export default Home

//https://player.vimeo.com/external/459030212.sd.mp4?s=277d1899bc58632a4dbbb912bc4a38b874120a0e&profile_id=164&oauth2_token_id=57447761
