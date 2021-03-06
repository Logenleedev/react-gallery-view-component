import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import 'antd/dist/antd.css';
import { Typography } from 'antd';
const { Paragraph } = Typography;


class Desciption extends Component {
  render() {
    return (
      <div className="Description">
        <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
          {this.props.description}
        </Paragraph>
      </div>
    );
  }
}

export default Desciption;