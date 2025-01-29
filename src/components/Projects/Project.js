import React, { useState } from 'react'
import Projects from './ProjectsData'
import './project.css'
function Project() {
  
  const [details,setDetail] = useState([]);
  const [close,setClose] = useState(false);
  
  const detailsHandler = (project) => {
    setDetail([{...project}]);
    setClose(true);
  }

  return (
    <>
    {
     close ?  details.map((detail) => {
      return (
        <><div className="detail_container">
              <div className="detail_contant">
                              <button className="close" onClick={()=>{setClose(false)}}><i className="fa fa-close"></i></button>
                             <div className="detail_info">
                              <div className="img-box">
                              <img src={require(`../../assets/project/${detail.Image}.png`)}  />
                              </div>
                              <div className="product_detail">
                                  <h2>{detail.Title}</h2>
                                  {detail.Skills.map((skill) => {
                                    return (
                                      <span class="badge badge-pill badge-secondary m-1">{skill}</span>
                                    )
                                  })}
                                  <p>{detail.Description}</p>
                                  <button><a href={detail.Github} target="_blank">Visit</a></button>
                              </div>
                              </div>  </div>
          </div></>
      )
    }) : null
    }
    <div className='project'>
      <div className='container'>
        <h2 className="text-center">Projects</h2>
        <p className="text-secondary text-center" >
          Recent Works
        </p>
        <div className='projects'>
         { Projects.map((project) => {
           return (
             <div className='project-card' key={project.Title} onClick={() => detailsHandler(project)}>
               <img src={require(`../../assets/project/${project.Image}.png`)} alt={project.Title} />
               <div className='project-title'>{project.Title}</div>
               <div className='project-details'> <a href={project.Link} style={{color:'gray'}}> Demo   <i className="fa fa-arrow-right"></i> </a></div>
             </div>
           )
         })

         }
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Project