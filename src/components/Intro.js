import React from "react";
import "../styles/Intro.css";
import EmailIcon from "@mui/icons-material/Email";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <div className="intro-typing">
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"aimi"}</span>
            {" here."}
          </span>
        </div>

        <FadeInSection>
          <div className="intro-subtitle">I create stuff sometimes.</div>
          <div className="intro-desc">
            I'm a software engineer based in Atlanta, Georgia. I have great
            interest in full-stack development, artificial intelligence,
            human-computer interactions, and everything in between.
          </div>
          <a href="mailto:aimitranhoang@gmail.com" className="intro-contact">
            <EmailIcon sx={{ marginRight: 1 }}></EmailIcon>
            {"  " + "Say hi!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
