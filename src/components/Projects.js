import React from "react";
import ProjectList from "./ProjectList";
import "../styles/Projects.css";
import FadeInSection from "./FadeInSection";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
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
      <div id="projects">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ side projects</span>
          </div>
          <ProjectList></ProjectList>
        </FadeInSection>
      </div>
    );
  }
}

export default Projects;
