import React from "react";

import {
  Typography,
  Link,
  Paper,
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
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
      // sx={{ bgcolor: "var(--lightest-navy)", borderRadius: "30px" }}
      sx={{
        backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.65), rgba(0,0,0,0.35)),url(${props.item.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no repeat",
        backgroundPosition: "center",
        opacity: "10",
        borderRadius: "30px",
      }}
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
      name: "Google DSC Web App",
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
      link: "https://github.com/aimiisme/Weather-App",
      github: "https://github.com/aimiisme/Weather-App",
      image: "/assets/weatherapp.png",
    },
    {
      name: "Portfolio Website (Glassmorphism)",
      duration: "2021",
      techstack: "HTML, CSS, JavaScript(ES5+)",
      description: [
        "A personal portfolio website (2021 version) with the theme of glassmorphism, inspired by Mac OS Big Sur. This is my first project when I start coding with HTML and CSS.",
      ],
      link: "https://aimihere.netlify.app/",
      github: "https://github.com/aimiisme/Portfolio-Website",
      image: "/assets/portfolio_v1.png",
    },
    {
      name: "Portfolio Website v.2 (Fly to the Galaxy)",
      duration: "MAY 2023",
      techstack: "JavaScript(ES5+), CSS, ReactJS, Material UI",
      description: ["Official personal website - version of 2023"],
      link: "https://aimiisme.github.io/ImAimi",
      github: "https://github.com/aimiisme/ImAimi",
      image: "/assets/portfolio_v2.png",
    },
  ];
  function Card(props) {
    return (
      <div className="project-card">
        <CardContent sx={{ px: 5, pt: 5 }}>
          <Typography variant="h6" component="div" color="var(--white)">
            {props.item.name}
          </Typography>

          <Typography
            variant="body2"
            color="var(--lightest-slate)"
            sx={{ mt: 2 }}
          >
            {props.item.techstack}
          </Typography>
        </CardContent>
        <CardActions sx={{ px: 5 }}>
          <Button size="small" href={props.item.github} target="_blank">
            Learn More
          </Button>
        </CardActions>
      </div>
    );
  }
  return (
    <>
      <Carousel NextIcon={<ChevronRightIcon />} PrevIcon={<ChevronLeftIcon />}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <Box sx={{ flexGrow: 1, mt: 10 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {items.map((item, i) => (
            <Grid item xs={2} sm={4} md={4} key={i}>
              <Card variant="outlined" key={i} item={item}></Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ProjectList;
