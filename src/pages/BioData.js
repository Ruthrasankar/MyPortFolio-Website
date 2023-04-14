import React from 'react'
import { VerticalTimeline , VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"
import "../styles/BioData.css"

function BioData() {
  return (
    <div className='experience' >
      <VerticalTimeline lineColor='#3e496a' >
        <VerticalTimelineElement 
          color = "white"
          className='vertical-timeline-element--education'
          date="2009 - 2020" 
          iconStyle={{background : "#ff5c00" , color : "#fff"}}
          icon = {< SchoolIcon />}> 

          <h3 className = "vertical-timeline-element-title" >Srivi Lions School, Srivilliputhur, TamilNadu </h3>
          <p>High School</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2020 - 2022" 
          iconStyle={{background : "#ff5c00" , color : "#fff"}}
          icon = {< SchoolIcon />}> 
          <h3 className = "vertical-timeline-element-title" >Srivi Lions School, Srivilliputhur, TamilNadu </h3>
          <p>Higher Secondary Studies</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2022 - Present" 
          iconStyle={{background : "#ff5c00" , color : "#fff"}}
          icon = {< SchoolIcon />}> 

          <h3 className = "vertical-timeline-element-title" > Kalasalingam University , KrishnanKovil , TamilNadu </h3>
          <p> B.Tech Degree </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default BioData
