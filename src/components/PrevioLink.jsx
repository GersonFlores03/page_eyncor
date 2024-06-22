import React, { useState } from 'react';

const PrevioLink = ({ url, text }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleMouseOver = (event) => {
    const rect = event.target.getBoundingClientRect();
    setPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
    setShowPreview(true);
  };

  const handleMouseLeave = () => {
    setShowPreview(false);
  };

  return (
    <div>
      <a
        href={url}
        className="preview-link"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
      {showPreview && (
        <div
          className="preview-container"
          style={{ top: `${position.top}px`, left: `${position.left}px` }}
        >
          <iframe className="preview-iframe" src={url} frameBorder="0"></iframe>
        </div>
      )}
    </div>
  );
};

export default PrevioLink;
