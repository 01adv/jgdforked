import React, { useState } from 'react';

const YouTubeThumbnail = ({ videoId }) => {
  const [showVideo, setShowVideo] = useState(false);
  

  const handleClick = () => {
    setShowVideo(true);
  };

  return (
    <div>
      {!showVideo && (
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt="Video Thumbnail"
          onClick={handleClick}
          height="315"
          width="560"
          style={{ cursor: 'pointer' }}
        />
      )}
      {showVideo && (
        <iframe
          title="YouTube Video"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default YouTubeThumbnail;
