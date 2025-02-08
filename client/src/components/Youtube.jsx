import React from 'react';

const Youtube = ({ url }) => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row justify-center items-center">
      <img src="./right_arrow.jpg" alt="Left Arrow" className="hidden md:block w-12 h-[130%]" />

      <div className="relative w-full aspect-video">
        <iframe
          src="https://player.twitch.tv/?channel=aatmikrobocek&parent=xplore-blog-seven.vercel.app"
          frameBorder="0"
          allowFullScreen
          scrolling="no"
          className="w-full h-full"
        ></iframe>
      </div>

      <img src="./arrow.jpg" alt="Right Arrow" className="hidden md:block w-12 h-[130%]" />
    </div>
  );
};

export default Youtube;
