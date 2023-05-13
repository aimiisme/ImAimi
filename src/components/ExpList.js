import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import FadeInSection from "./FadeInSection";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const ExpList = () => {
  const [value, setValue] = React.useState(0);

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, display: "flex", height: 300 }}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 5, borderColor: "divider" }}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>

          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return <li key={i}>{descItem}</li>;
            })}
          </ul>
        </TabPanel>
      ))}
    </Box>
  );
};

export default ExpList;
