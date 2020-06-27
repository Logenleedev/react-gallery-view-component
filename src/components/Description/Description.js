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
          Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
          a design language for background applications, is refined by Ant UED Team. Ant Design, a
          design language for background applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team.
        </Paragraph>
      </div>
    );
  }
}

export default Desciption;