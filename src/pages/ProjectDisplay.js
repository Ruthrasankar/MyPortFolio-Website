import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub';
import "../styles/ProjectDisplay.css"

function ProjectDisplay() {

  const { id } = useParams();   
  const project = projectList[id] 
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <a href='https://github.com/Ruthrasankar' > <img src = {project.image} /> </a>
      <p><b>Skills</b> : {project.skills}</p>
      <a href='https://github.com/Ruthrasankar'> <GitHubIcon /> </a>
    </div>
  )
}

export default ProjectDisplay
