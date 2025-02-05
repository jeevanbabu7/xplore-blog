import React from 'react';

const Youtube = ({ url }) => {
  return (
    <div className='w-full z-50 bg- h-fit flex justify-center items-center'>
      <iframe
        width="600"
        height="450"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Youtube;
