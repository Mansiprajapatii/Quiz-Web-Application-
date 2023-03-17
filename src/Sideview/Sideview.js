import React, { useState, useRef, useEffect } from "react";
import "./Sideview.css";

const Sideview = () => {
  // video part
  var video = document.querySelector("#videoElement");
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
      });
  }

  return (
    // right div
  <div className="camera-app">
      <div className="rounded">
        <video
          className="video"
          autoPlay="{true}"
          id="videoElement"
          width="280"
          height="200"
        >
          {" "}
        </video>
        <div className="detection">
          <span>Face Detected: 0</span>
          <p className="multi-detection">Multi Face Detected: 0</p>
        </div>
      </div>
    </div>
  );
};
export default Sideview;
