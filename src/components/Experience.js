import React from "react";
import ExpList from "./ExpList";
import "../styles/Experience.css";
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
            <span className="section-title">/ experience</span>
          </div>
          <ExpList></ExpList>
        </FadeInSection>
      </div>
    );
  }
}

export default Experience;
