import React from 'react'
import Projectitem from '../components/Projectitem'
import "../styles/project.css";
import {ProjectList} from "../helper/ProjectList";

function Projects() {
  return (
    
    <div className="projects">
    <h1>My projects</h1>
      <div className='projectList'>
      {ProjectList.map((project,idx)=>{
        return <Projectitem name={project.name} image={project.image} id={idx}/>
      })}

          
      </div>
    </div>
  )
}

export default Projects