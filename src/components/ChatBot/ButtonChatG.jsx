import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ButtonChatG = ({ triggerNextStep }) => {
    const handleClick = () => {
        triggerNextStep();
    };
    return (
        <div>
            <Link to={"/glp"}>  <button className='brochure' onClick={handleClick} > GLP </button> </Link>
        </div>
    );
};

ButtonChatG.propTypes = {
    triggerNextStep: PropTypes.func.isRequired 
};


export default ButtonChatG;