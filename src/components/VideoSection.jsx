import React from "react";
import video from "../assets/digital-video.mp4";
import "./VideoSection.css";

export default function VideoSection() {
  return (
    <div className="video-section">
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="digital-video"
      />
    </div>
  );
}
