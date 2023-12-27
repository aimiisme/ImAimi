import React from "react";
import FadeInSection from "./FadeInSection";

const ExpList = () => {
  const experienceItems = {
    Avanade: {
      jobTitle: "Backend Developer Intern @",
      duration: "MAY 2023 - AUG 2023",
      desc: [
        "Developed expertise in Microsoft technologies including Azure DevOps and Microsoft SQL Server.",
        "Employed SSMS and SQL Server to update the database and remove inactive sites from the search system of client’s performance tool, resulting in enhanced user experiences.",
        "Optimized search accuracy algorithm using C# and third-party JavaScript libraries, resulting in enhanced search efficiency.",
        "Collaborated with 3 senior developers and cross-functional teams on client projects, contributing ideas for tool enhancement and demonstrating effective problem-solving.",
      ],
    },
    GoogleDSC: {
      jobTitle: "Software Development Engineer @",
      duration: "MAR 2022 - MAR 2023",
      desc: [
        "Designed, implemented and maintained front-end code of 8 responsive web pages and 20+ UI/UX features.",
        "Participated in product releases and code reviews with 4 other team leads to update sites throughout production lifecycle.",
        "Supervised, lead, and mentored 3 new junior front-end developers on team in expanding JavaScript and React skillset.",
        "Worked in an Agile, collaborative environment to receive design requirements, peer program, and test applications.",
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
