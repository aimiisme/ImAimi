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
      id={`vertical-tabpanel`}
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
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
const ExpList = () => {
  const [value, setValue] = React.useState(0);
  const experienceItems = {
    GoogleDSC: {
      jobTitle: "Software Development Engineer @",
      duration: "MAR 2022 - MAR 2023",
      desc: [
        "Design, implement and maintain front-end code of 8 responsive web pages and 20+ UI/UX features.",
        "Participate in product releases and code reviews with 4 other team leads to update sites throughout production lifecycle.",
        "Supervise, lead, and mentor 3 new junior front-end developers on team in expanding JavaScript and React skillset.",
        "Work in an Agile, collaborative environment to receive design requirements, peer program, and test applications.",
      ],
      link: "https://gdsc.community.dev/",
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="exp-list-container">
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <a
            className="joblist-job-company"
            href={experienceItems[key]["link"]}
            target="_blank"
          >
            {key}
          </a>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default ExpList;
