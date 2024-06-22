import React from 'react';

const Enlace = ({url ,label}) => {
    return (
        <div>
              <a href={url} target="_blank" rel="noopener noreferrer">
                
                {label}
              
              </a>
        </div>
    );
};

export default Enlace;