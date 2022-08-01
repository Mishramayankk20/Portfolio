import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement} 
 from "react-vertical-timeline-component";
 import "react-vertical-timeline-component/style.min.css";
 import SchoolIcon from "@material-ui/icons/School";
 import WorkIcon from "@material-ui/icons/Work";
function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2015-2016"
          iconStyle={{background:"#3e497a",color:"#ffff"}}
          icon={<SchoolIcon/>}
          >
          <h3 className='vertical-timeline-element-title'>
            St.Charles School , Shivpuri Madhya Pradesh
          </h3>
          <p>X class ,ICSE Board</p>
          <p> percentage 86.5%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2017-2018"
        iconStyle={{background:"#3e497a",color:"#ffff"}}
        icon={<SchoolIcon/>}
        >
        <h3 className='vertical-timeline-element-title'>
          St.Charles School , Shivpuri Madhya Pradesh
        </h3>
        <p>XII class ,ISC Board</p>
        <p>PCM </p>
        <p> percentage 83.8%</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2018-2022"
        iconStyle={{background:"#3e497a",color:"#ffff"}}
        icon={<SchoolIcon/>}
        >
        <h3 className='vertical-timeline-element-title'>
          Technocrats Institute of Technology ,Bhopal Madhya Pradesh
          <p>Affilated to RGPV Bhopal </p>
          </h3>
        <p>B.Tech ,Information Technology Branch</p>
        <p>CGPA 9.1</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="Sept 6 2021- 2022"
        iconStyle={{background:"#443055",color:"#ffff"}}
        icon={<WorkIcon/>}
        >
        <h3 className='vertical-timeline-element-title'>
          Great Software Laboratory ,Pune Maharashtra
        </h3>
        <p>Worked as an Intern Got trained in new Technologies 
          <ol>  
            <li>Reactjs</li>
            <li>Node js</li>
            <li>Docker</li>
            <li>Kubernetes</li>
          </ol>
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
  )
}

export default Experience