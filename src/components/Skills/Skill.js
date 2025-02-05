import React from "react";
import "./Skill.css";
function Skill() {
  const skill = [
    {
      title: "Front End",
      skills: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "Angular",
      ],

    },
    {
      title: "Back End",
      skills: [
        "Node",
        "Express",
        "Python",
        "Flask",
        "FastAPI",
        "MongoDB",
        "Neo4j",
      ],
    },
    {
      title: "Other Skills",
      skills: ["Azure", "Docker", "GitHub", "AWS","OpenAI", "Langchain",],
    },
  ];
  return (
    <div className="Skills">
      <h2 className="text-center">Skills</h2>
      <p className="text-secondary text-center" >
      Worked On
      </p>
      <div className="container">
        <div className="skills">
          {skill.map((skill, index) => (
            <div className="skill">
              <h4>{skill.title}</h4><div className="skillitems">
             <br></br>
            {skill.skills.map((item) => (
                
                <span><img
                src={require(`../../assets/icons/${item}.svg`)}
                width="20"
                style={{ padding: "2%" }}
              /> {item} </span>
                
            ))}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
