import React from 'react';
import {useNavigate} from 'react-router-dom';
import {ProjectList} from "../helper/ProjectList";
function Projectitem({image , name,id}) {
  const navigate = useNavigate();
  return (
    <div className='projectItem' onClick={()=>{navigate("/projects/"+id)}}>
        <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>
            <h1>{name}</h1>
        </div>
  )
}

export default Projectitem