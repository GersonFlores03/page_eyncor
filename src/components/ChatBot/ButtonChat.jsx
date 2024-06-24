import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ButtonChat = ({ triggerNextStep }) => {
    const handleClick = () => {
        triggerNextStep();
    };
    return (
        <div>
            <Link to={"/grifo"}>  <button className='brochure' onClick={handleClick} > Grifos </button> </Link>
        </div>
    );
};

ButtonChat.propTypes = {
    triggerNextStep: PropTypes.func.isRequired 
};


export default ButtonChat;