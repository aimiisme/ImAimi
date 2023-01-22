import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        Hi, I'm Aimi Tran, currently a third year <b>Computer Science</b> major
        at
        <a target="_blank" href="https://www.kennesaw.edu/">
          {" "}
          Kennesaw State University
        </a>{" "}
        and a <b>Frontend software engineer</b> at{" "}
        <a target="_blank" href="https://developers.google.com/community/gdsc">
          GoogleDSC
        </a>
        . I have great interest in full-stack development that just work across
        all platforms and browsers. I care deeply about building interfaces that
        are usable and pleasant for the most number of people possible.
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in following the developments of
        science. I also love playing ukulele and kalimba.
      </p>
    );

    const desc_items = [one, two];

    const tech_stack = [
      "Javascript ES6+",
      "Python",
      "React.js",
      "Java",
      "Node.js",
      "HTML & CSS",
    ];

    const tech_items = tech_stack.map((stack) => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
              <a
                href="/assets/AimiResume.pdf"
                download="AimiResume.pdf"
                className="resume-btn"
              >
                Download Resume
              </a>
            </div>
            <div className="about-image">
              <img src={"/assets/me3.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
