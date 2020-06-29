import React, { Component } from "react";
import "./style.css";
import ReactDOM from "react-dom";

import { Typography } from "antd";
const { Title } = Typography;

class JobTitle extends Component {
  render() {
    return (
      <div className="Title">
        <Title level={3}>{this.props.title}</Title>
      </div>
    );
  }
}

export default JobTitle;
