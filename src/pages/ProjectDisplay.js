import React from 'react';
import {useParams} from 'react-router-dom';
import {ProjectList} from "../helper/ProjectList";
import GitHubicon from '@material-ui/icons/GitHub';
import "../styles/ProjectDisplay.css"
function ProjectDisplay() {
   
    const {id} =useParams();
    const project = ProjectList[id];
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image}/>
            <GitHubicon/>
            <p>
                <b>skills :</b>{project.skills}
            </p>
        </div>
  

  )
}

export default ProjectDisplay