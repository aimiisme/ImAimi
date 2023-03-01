import React from "react";
import ExpList from "./ExpList";
import ProjectList from "./ProjectList";
import "../styles/Projects.css";
import FadeInSection from "./FadeInSection";

class Experience extends React.Component {
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
      <div id="experience">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ side projects</span>
          </div>
          <ExpList></ExpList>
          {/* <ProjectList></ProjectList> */}
        </FadeInSection>
      </div>
    );
  }
}

export default Experience;
