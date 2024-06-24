import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ButtonChatT = ({ triggerNextStep }) => {
    const handleClick = () => {
        triggerNextStep();
    };
    return (
        <div>
            <Link to={"/transporte"}>  <button className='brochure' onClick={handleClick} > Transporte </button> </Link>
        </div>
    );
};

ButtonChatT.propTypes = {
    triggerNextStep: PropTypes.func.isRequired 
};


export default ButtonChatT;