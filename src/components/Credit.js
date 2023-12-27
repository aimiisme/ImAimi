import React from "react";
import "../styles/Credit.css";
import FadeInSection from "./FadeInSection";

class Credit extends React.Component {
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
      <FadeInSection>
        <div id="credits">
          <div className="ending-credits">
            <div>Built and designed by Aimi Tran. </div>
          </div>
        </div>
      </FadeInSection>
    );
  }
}

export default Credit;
