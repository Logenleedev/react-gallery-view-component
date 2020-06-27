import React, { Component } from "react";
import "./style.css";
import ReactDOM from "react-dom";

// Import members' job title and description
import Description from "../Description/index.js";
import JobTitle from "../JobTitle/index.js";

// Import ant design
import { Card } from 'antd';
const { Meta } = Card;



class Team extends Component {
  render() {
    return (
      <div className="team-section">
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <JobTitle />
          <Description />
        </Card>,
      </div>
    );
  }
}

export default Team;
