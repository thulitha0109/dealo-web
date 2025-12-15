import React, { useState } from "react";
import videoSrc from '../assets/videos/Dealo Web Video_Final_ HD.m4v';
import { VolumeX, Volume2 } from "lucide-react";


const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };




  return (
    <div className="relative w-full h-auto flex flex-col h-screen top-24 items-center overflow-x-hidden overflow-y-hidden py-4">
    <div id="HeroVideo" className="px-4 py-2 flex justify-center container mx-auto relative h-auto">
      <video
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="w-3/4 h-auto object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mute Button */}
      <div id="HeroButton" className="flex bottom-4 right-4">
      <button
        onClick={toggleMute}
        className="relative flex items-end p-2 bg-opacity-50 rounded-full hover:bg-opacity-75 transition"
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
      </div>
    </div>

  </div>
  );
};

export default Hero;