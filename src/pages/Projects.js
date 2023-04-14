import React from 'react'
import "../styles/Projects.css" // contains style for both Projects and projectElement.js but it needn't to be imported in projectElement.js 'cause projectElement is inside the Projects.js
//import "../styles/ProjectDisplay.css"
import ProjectItem from '../components/ProjectItem'
import { projectList } from '../helpers/ProjectList'



function Projects() {
  return (
    <div className='projects' >
      <h1>My PROJECTS</h1>
      <div className='projectList' >
        {projectList.map((project , idx) => {
          return (<ProjectItem id = {idx} name = {project.name} image={ project.image} />)
        })}

      </div>

    </div>
  )
}

export default Projects
