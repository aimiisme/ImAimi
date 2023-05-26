import React from "react";
import FadeInSection from "./FadeInSection";

const ExpList = () => {
  const experienceItems = {
    Avanade: {
      jobTitle: "Backend Developer Intern @",
      duration: "MAY 2023 - AUG 2023",
      desc: [
        "Develop and deliver detailed IT solutions through consulting project activities.",
        "Bring interpersonal and technical skills to engagements - Proactively identify problems, system architecture definition.",
        "Quality assurance (QA) testing.",
        "Programming using C#, Java,TypeScript, JavaScript (React/Angular/Vue) and SQL Server, MySQL, Cosmos, MongoDB.",
      ],
    },
    GoogleDSC: {
      jobTitle: "Software Development Engineer @",
      duration: "MAR 2022 - MAR 2023",
      desc: [
        "Design, implement and maintain front-end code of 8 responsive web pages and 20+ UI/UX features.",
        "Participate in product releases and code reviews with 4 other team leads to update sites throughout production lifecycle.",
        "Supervise, lead, and mentor 3 new junior front-end developers on team in expanding JavaScript and React skillset.",
        "Work in an Agile, collaborative environment to receive design requirements, peer program, and test applications.",
      ],
    },
  };

  return (
    <div id="timeline" className="timeline-containter">
      {Object.keys(experienceItems).map((key, i) => (
        <div className="timeline-block">
          <div className="timeline-img"></div>
          <div className="timeline-content">
            <h2>
              {experienceItems[key]["jobTitle"] + " "}
              <span className="joblist-job-company">{key}</span>
            </h2>

            <ul className="job-description">
              {experienceItems[key]["desc"].map(function (descItem, i) {
                return (
                  <FadeInSection>
                    <li key={i}>{descItem}</li>
                  </FadeInSection>
                );
              })}
            </ul>

            <span className="timeline-date">
              {experienceItems[key]["duration"]}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpList;
