import React from 'react'
import './About.css'
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
             <div className='about-flex'>
              <div>
              <i class="fa fa-briefcase"></i>
               <div className='title'>Experience</div> 
               <span className='desc'>2 + years</span>
              </div>
              <div>
              <i class="fa fa-graduation-cap"></i>
               <div className='title'>Education</div> 
               <span className='desc'>BE in CS</span>
              </div>
              <div>
              <i class="fa fa-headphones"></i>
               <div className='title'>Support</div> 
               <span className='desc'>24/7</span>
              </div>
             </div>
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
