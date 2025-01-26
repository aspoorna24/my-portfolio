import React from 'react'
import "./About.css"
function About() {
  return (
    <div className="container p-3" id="About">
         <h2  className="text-center">About Me</h2>
         <p className="text-secondary text-center">Get to know</p>
         <div className="row justify-content-center">
           <div className="col-md-4 p-5" style={{textAlign: "center"}}>
            <div className="About-picture">
             <img src={require('../../assets/home/profile.jpeg')} alt="no internet connection"  /> 
            </div>
           </div>
           <div class="col-md-6 p-5">
             <p class="p-3" style={{fontSize:'large',textAlign: "justify"}}>
             I am Software engineer with over 2 years of experience specializing in Neo4j, LangChain, and backend development along with a solid understanding of front-end development. Proficient in designing
             and optimizing data‑driven solutions, building scalable backend systems, and integrating graph databases. Seeking opportunities to
             leverage technical expertise and problem‑solving skills in dynamic, innovation‑driven projects.
              
              
             </p>
            
           </div>
         </div>
       </div>

  )
}

export default About