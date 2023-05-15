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
          <h1 className="intro-title">hi, i'm aimi</h1>
        </div>

        <FadeInSection>
          <div className="intro-subtitle">
            Yeah, I speak three languages: Java, JavaScript, and Python!
          </div>
          <div className="intro-desc">
            I'm a software engineer from Atlanta, Georgia, with a strong
            interest in full-stack development and artificial intelligence. I
            enjoy combining my skills in both areas to create cutting-edge
            solutions that enhance user experiences. Let's push the boundaries
            of technology together!
          </div>
          <a href="mailto:aimitranhoang@gmail.com" className="intro-contact">
            <EmailIcon sx={{ marginRight: 1 }}></EmailIcon>
            {"  " + "Contact me"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
