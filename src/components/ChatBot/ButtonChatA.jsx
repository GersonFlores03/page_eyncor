import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ButtonChatA = () => {
    const handleClick = () => {
        triggerNextStep();
    };
    return (
        <div>
        <Link to={"/adaptable"}>  <button className='brochure' onClick={handleClick} > Adaptable </button> </Link>
    </div>
    );
};

ButtonChatA.propTypes = {
    triggerNextStep: PropTypes.func.isRequired 
};

export default ButtonChatA;