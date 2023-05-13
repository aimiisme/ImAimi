import React from "react";

import { Typography, Link, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import GitHubIcon from "@mui/icons-material/GitHub";
import FadeInSection from "./FadeInSection";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function Item(props) {
  return (
    <Paper
      className="proj-item"
      elevation={10}
      sx={{ bgcolor: "var(--lightest-navy)", borderRadius: "30px" }}
    >
      <Typography
        className="proj-title"
        variant="h5"
        sx={{ mb: "12px", fontWeight: "bold" }}
      >
        {props.item.name}
      </Typography>

      <Typography className="proj-duration">{props.item.duration}</Typography>
      <Typography className="proj-tech" sx={{ mb: "12px" }}>
        {props.item.techstack}
      </Typography>
      <Typography className="proj-desc">{props.item.description}</Typography>
      <div className="icon-link">
        <Link href={props.item.link} target="_blank" className="live-link">
          <OpenInBrowserIcon fontSize="medium" />
        </Link>
        <Link href={props.item.github} target="_blank" className="github-link">
          <GitHubIcon fontSize="medium" />
        </Link>
      </div>
      {/* <img className="proj-image" src={props.item.image}></img> */}
    </Paper>
  );
}

const ProjectList = (props) => {
  const items = [
    {
      name: "Google DSC Landing Page",
      duration: "MAR 2022",
      techstack: "ReactJS, Material UI, JavaScript(ES5+)",
      description: [
        "Serves as the primary landing site for the Google Developer Student Club @ Kennesaw State University.",
      ],
      link: "https://dsc.ksu",
      github: "https://github.com/KSU-Google-DSC/Webapp",
      image: "/assets/gdsc_landingpage.png",
    },
    {
      name: "Weather App",
      duration: "MAR 2022",
      techstack: "ReactJS, CSS, JavaScript(ES5+), JSON API",
      description: [
        "A user-friendly Weather App for user to track the weather forecast around 200,000 cities in the world map.",
      ],
      link: "",
      github: "https://github.com/KSU-Google-DSC/Webapp",
      image: "/assets/weatherapp.png",
    },
    {
      name: "Portfolio Website v.1",
      duration: "2021",
      techstack: "HTML, CSS, JavaScript(ES5+), JSON API",
      description: [
        "A personal portfolio website with the theme of glassmorphism, inspired by Mac OS Big Sur. This is my first project when I start coding with HTML and CSS.",
      ],
      link: "https://aimihere.netlify.app/",
      github: "https://github.com/aimiisme/Portfolio-Website",
      image: "/assets/portfolio_v1.png",
    },
  ];

  return (
    <Carousel NextIcon={<ChevronRightIcon />} PrevIcon={<ChevronLeftIcon />}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default ProjectList;
