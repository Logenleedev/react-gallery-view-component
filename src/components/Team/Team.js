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
  
 renderCard(profileImage, title, desciption){

     return (
          <Card
              loading
              size="small"
              className="MemberCard"
              style={{ width: 240 }}
              cover={<img alt="example" src={profileImage} />}
          >
            <JobTitle title={title}/>
            <Description description={desciption}/>
          </Card>
     )
   
 }
  
  render() {
    return (
      <div className="team-section">
        {this.renderCard("https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60", "Founder&CEO", "ex Quora")}
        {this.renderCard("https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80", "Founder&COO", "ex Facebook")}
        {this.renderCard("https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", "Software Engineer", "IOS, Web dev")}
        {this.renderCard("https://images.unsplash.com/photo-1536057222397-e51989d3cb8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60", "Data Scientist", "ML, AI, and more!")}
      </div>
    );
  }
}

export default Team;
