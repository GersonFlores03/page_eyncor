import React from 'react';
import alborada from "../assets/icons/alborada.webp"
import caxagas from "../assets/icons/caxagas.webp"
import clavijo from "../assets/icons/clavijo.webp"
import crm from "../assets/icons/cmr.webp"
import jevaro from "../assets/icons/jevaro.webp"


const Testimonial = () => {
    const testimonials = [
        {
            author: "Marcos Aurelio La Torre Sanchez",
            position: "Gerente General",
            text: "Desde que comenzamos a utilizar el ERP de EYNCOR, hemos experimentado un aumento significativo en nuestra productividad y rentabilidad. La capacidad de tener todos nuestros datos en una sola plataforma, ha simplificado enormemente nuestras operaciones y nos ha permitido tomar decisiones más informadas y rápidas. ¡Definitivamente recomendaría a EYNCOR a cualquier empresa del rubro que busque mejorar su eficiencia y competitividad.",
            image: caxagas
        },
        {
            author: "Edward Clavijo Yi",
            position: "Gerente General",
            text: "Después de evaluar varias opciones de sistemas ERP, nos decidimos por EYNCOR y no podríamos estar más contentos con nuestra elección. La personalización de su plataforma para adaptarse a nuestras necesidades específicas fue impecable, y la capacitación que proporcionaron a nuestro equipo fue excepcional. Desde entonces, hemos visto una mejora significativa en la eficiencia operativa y una reducción de costos. ¡Gracias a EYNCOR por hacer que nuestra transición a un ERP sea tan suave y exitosa.",
            image: clavijo
        },
        {
            author: "Milagros Almandros Pillco",
            position: "Gerente General",
            text: "Como empresa que busca alcanzar un alto crecimiento, necesitábamos una solución escalable que pudiera acompañar nuestro desarrollo futuro. EYNCOR no solo cumplió con nuestras expectativas, sino que las superó. Su interfaz intuitiva y su capacidad para integrarse con otras herramientas que utilizamos han simplificado enormemente nuestras operaciones diarias. Estamos encantados con los resultados que hemos logrado desde que implementamos el sistema EYNCOR ERP.",
            image: crm
        },
        {
            author: "Hugo Reyes Garcia",
            position: "Gerente General",
            text: "Gracias a EYNCOR ERP, hemos logrado aumentar nuestra productividad, mejorar la calidad de nuestro servicio y optimizar nuestros recursos. Estamos realmente felices de haber tomado la decisión de adquirir este sistema, ya que ha sido una inversión que ha transformado por completo nuestra empresa para mejor.",
            image: alborada
        },
        {
            author: "Cesar Ramos Chirinos",
            position: "Gerente General",
            text: "Implementar el sistema de ERP DE EYNCOR ha sido una verdadera transformación para nuestro negocio. Antes, estábamos luchando entre diferentes departamentos. Ahora, gracias a su solución integrada, todo está más organizado, eficiente y transparente. ¡Estamos muy contentos con los resultados!",
            image: jevaro
        }
    ];
    return (
        <div className='mb-10'>
          {/* Slider para testimonios*/}

          <div className='eyncor_productos'>
                <h2 className='
                eyncor_titulo 
                text-2xl
                text-center
                lg:flex 
                lg:items-center 
                lg:justify-center
                lg:text-5xl
                lg:p-5
                '>
                  Lo que dicen nuestros clientes
                </h2>
            </div>
            <div className="testimonials">
            <div className="testimonial-slider">
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                        <div>
                            <img src={testimonial.image} className='circle_testimonios' alt="circle_testimonios" />
                        </div>
                        <h3 className="testimonial-author">{testimonial.author}</h3>
                        <p className='testimonios_cargo text-base mb-2'>{testimonial.position}</p>
                        <p className="testimonial-text">{testimonial.text}</p>
                    </div>
                ))}
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={index + testimonials.length}>
                        <div>
                            <img src={testimonial.image} className='circle_testimonios' alt="circle_testimonios" />
                        </div>
                        <h3 className="testimonial-author">{testimonial.author}</h3>
                        <p className='testimonios_cargo text-base mb-2'>{testimonial.position}</p>
                        <p className="testimonial-text">{testimonial.text}</p>
                    </div>
                ))}
            </div>


                


        </div>
        </div>
       
    );
};

export default Testimonial;