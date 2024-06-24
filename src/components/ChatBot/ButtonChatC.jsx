import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ButtonChatC = ({ triggerNextStep }) => {
    const handleClick = () => {
        triggerNextStep();
    };
    return (
        <div>
            <Link to={"/contabilidad"}>  <button className='brochure' onClick={handleClick} > Contabilidad </button> </Link>
        </div>
    );
};

ButtonChatC.propTypes = {
    triggerNextStep: PropTypes.func.isRequired 
};


export default ButtonChatC;