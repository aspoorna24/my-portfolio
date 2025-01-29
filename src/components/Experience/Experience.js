import React from "react";
import "./Experience.css";
const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Persistent Systems",
      duration: "Oct 2023 - Present",
      skills: ["Neo4j GDS", "Docker", "FastAPI", "Langchain"],
      logo:require("../../assets/home/logo.png"),
    },
    {
      title: "Software Engineer",
      company: "Persistent Systems",
      duration: "Aug 2021 - Spet 2023",
      skills: ["Neo4j", "Azure", "Flask", "GenAI"],
      logo: require("../../assets/home/logo.png"),
    },
    {
      title: "Intern",
      company: "BitMask Technology",
      duration: "Aug 2021 - Sept 2021",
      skills: ["Django", "Web Development"],
      logo: require("../../assets/home/logo2.png"),
    },
  ];

  return (
    <div className="container" id="Experience">
      <h2 className="text-center">Experience</h2>
      <p className="text-secondary text-center" >My Works</p>
      <div className="row justify-content-center">
        {experiences.map((exp, index) => (
          <React.Fragment key={index}>
            <div
              className="col-xl-6 m-3 p-3"
              style={{ borderLeft: "1px solid gray", position: "relative" }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flexGrow: 1 }}>
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width="90"
                    style={{ padding: "2%" }}
                  />
                </div>
                <div style={{ flexGrow: 8 }}>
                  <h5>
                    {exp.title}
                    <br />
                    <span style={{ fontSize: "1rem" }}>{exp.company}</span>
                  </h5>
                  <p className="text-secondary">
                    {exp.duration}
                    <br />
                    <span style={{ fontSize: "1rem" }}>
                      <b>Skills:</b> {exp.skills.join(", ")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {index < experiences.length - 1 && (
              <div className="col-12 text-center experience-line" style={{ position: "relative" }}>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: "gray",
                    display: "inline-block",
                    marginTop: "-10px",
                    position: "absolute",
                    left: "5px",
                  
                  }}
                ></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Experience;
