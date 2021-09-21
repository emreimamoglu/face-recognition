import React from "react";
import "./FaceRecognition.css";
const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img alt="" id="output" src={imageUrl}></img>
      </div>
    </div>
  );
};

export default FaceRecognition;
