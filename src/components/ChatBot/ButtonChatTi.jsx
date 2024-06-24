import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ButtonChatTi = ({ triggerNextStep }) => {
    const handleClick = () => {
        triggerNextStep();
    };
    return (
        <div>
            <Link to={"/tienda"}>  <button className='brochure' onClick={handleClick} > Tienda </button> </Link>
        </div>
    );
};

ButtonChatTi.propTypes = {
    triggerNextStep: PropTypes.func.isRequired 
};


export default ButtonChatTi;