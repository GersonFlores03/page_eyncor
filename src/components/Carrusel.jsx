import React from 'react';
import empresa_left01 from "../assets/empresas/left01.webp"


const Carrusel = () => {
    const testimonials = [
        {
            image: empresa_left01
        },
        {

            image: empresa_left01
        },
        {

            image: empresa_left01
        },
        {

            image: empresa_left01
        },
        {

            image: empresa_left01
        },
        {

            image: empresa_left01
        },
        {

            image: empresa_left01
        },
        {

            image: empresa_left01
        },
        {

            image: empresa_left01
        },
        {

            image: empresa_left01
        },


    ];
    return (
        <>
            {/* Slider para testimonios*/}

            <div className='eyncor_productos'>
                <h2 className='
                eyncor_titulo 
                text-2xl
                text-center
                lg:flex 
                lg:items-center 
                lg:justify-center
                lg:mb-3 
                lg:text-5xl
                '>
                    Lo que dicen nuestros clientes
                </h2>
            </div>
            <div className="contenedor_carrusel_general">
                <div className="carrusel-slider">
                    {testimonials.map((testimonial, index) => (
                        <div className="carrusel-card" key={index}>
                            <div>
                                <img src={testimonial.image} className='contenedor_carrusel' alt="contenedor_carrusel" />
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </>

    );
};

export default Carrusel;