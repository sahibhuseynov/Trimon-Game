import React from "react";
import "./Team.scss";
import {BsTwitch, BsYoutube } from 'react-icons/bs'
import teamImg1 from "../../assets/image/team-1.jpg";
import teamImg2 from "../../assets/image/team-2.jpg";
import teamImg3 from "../../assets/image/team-3.jpg";

const Team = () => {
  return (
    <div className="team__grid">
      <div className="team__item">
        <div className="item__top">
          <img src={teamImg1} alt="" />
        </div>
        <div className="item__bottom">
          <h2>GERALD TIMMONS</h2>
          <span>Creator</span>
          <div className="item__icons">
          <BsTwitch className="icon" />
            <BsYoutube className="icon" />
          </div>
        </div>
      </div>

      <div className="team__item">
        <div className="item__top">
          <img src={teamImg2} alt="" />
        </div>
        <div className="item__bottom">
        <h2>MELITA HWANG</h2>
          <span>Developer</span>
          <div className="item__icons">
            <BsTwitch className="icon" />
            <BsYoutube className="icon" />
          </div>
        </div>
      </div>

      <div className="team__item">
        <div className="item__top">
          <img src={teamImg3} alt="" />
        </div>
        <div className="item__bottom">
        <h2>HINRIK GYLFASON</h2>
          <span>Animator</span>
          <div className="item__icons">
          <BsTwitch  className="icon"  />
            <BsYoutube  className="icon"/>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Team;
