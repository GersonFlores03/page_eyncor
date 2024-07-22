import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../components/ExampleCarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import innovacion from "../assets/nosotros/innovacion.webp"
import banner_impacto from "../assets/banners/banner_impacto.webp"
import impacto_img1 from "../assets/nosotros/impacto_img1.webp"
import impacto_img2 from "../assets/nosotros/impacto_img2.webp"
import { Link } from 'react-router-dom';

const Impacto = () => {
    return (
        <section className=' lg:mt-[103px]'>
            <Carousel className='eyncor_erp_carrusel mb-7 '>
                <Carousel.Item>
                    <img
                        className="banner_global  d-block w-full h-[300px] lg:h-[600px] object-cover"
                        src={banner_impacto}
                        alt="glp"
                    />
                    <Carousel.Caption className="carousel-caption-centered 
                    absolute top-[50%] left-[-150px] -translate-y-1/2 text-left pl-[200px]   
                    lg:absolute lg:top-[60%] lg:left-0 lg:-translate-y-1/2 lg:text-left ñg:pl-[200px]">
                        <div className='flex flex-col gap-4'>
                            <strong className='text-2xl  lg:text-5xl'>Impacto y experiencia del cliente</strong>
                            <div className='hidden text-xl w-9/12  lg:text-xl lg:w-9/12 lg:block'>
                                <p>Lleva la automatización de tu empresa al siguiente nivel con nuestro ERP líder en el mercado.</p>
                            </div>
                            <Link to={"/contacto"}>
                                <button className='btn_acceso_header w-[150px] h-[25px]  lg:w-[200px] lg:h-[50px]'>CONTÁCTANOS</button>
                            </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <section class="py-10 sm:py-16 lg:py-24">
                <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div class="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
                        <div class="pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2 hidden">
                            <div class="overflow-hidden aspect-w-3 aspect-h-4">
                                <img class="object-cover rounded-lg w-full h-full" src={impacto_img1} alt="" />
                            </div>
                        </div>

                        <div class="md:order-1">
                            <h2 class="eyncor_titulo text-3xl font-bold leading-tight sm:text-4xl lg:text-4xl">Impacto Global Amplificado</h2>
                            <p class="mt-4 text-xl leading-relaxed text-gray-600">Nuestra plataforma ERP permite a las empresas conectar todas sus sucursales y equipos en cualquier parte del mundo en una sola interfaz integrada. Esto elimina las barreras geográficas y facilita la colaboración en tiempo real, lo que impulsa la eficiencia y la innovación a escala global.</p>
                        </div>

                        <div class="pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
                            <div class="overflow-hidden aspect-w-3 aspect-h-4">
                                <img class="object-cover rounded-lg w-full h-full" src={impacto_img1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="py-10 sm:py-16 lg:py-24">
                <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div class="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
                        <div class="pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2 hidden">

                            <div class="overflow-hidden aspect-w-3 aspect-h-4">
                                <img class="object-cover rounded-lg w-full h-full" src={impacto_img2} alt="" />
                            </div>
                        </div>
                        <div class="md:order-1">
                            <h2 class="eyncor_titulo text-3xl font-bold leading-tight  sm:text-4xl lg:text-4xl">Impacto Económico Positivo</h2>
                            <p class="mt-4 text-xl leading-relaxed text-gray-600">Nuestro ERP mejora la eficiencia operativa y brinda una visibilidad completa de los costos, lo que permite identificar áreas de gastos innecesarios. Esto facilita la implementación de medidas de ahorro de costos efectivas y la toma de decisiones financieras informadas, contribuyendo así a un impacto económico positivo para las empresas.</p>

                        </div>

                        <div class="pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">

                            <div class="overflow-hidden aspect-w-3 aspect-h-4">
                                <img class="object-cover rounded-lg w-full h-full" src={impacto_img2} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            <section class="py-10 sm:py-16 lg:py-24">
                <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div class="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
                        <div class="pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2 hidden">
                            <div class="overflow-hidden aspect-w-3 aspect-h-4">
                                <img class="object-cover rounded-lg w-full h-full" src={innovacion} alt="" />
                            </div>

                        </div>
                        <div class="md:order-1">
                            <h2 class="eyncor_titulo text-3xl font-bold leading-tight sm:text-4xl lg:text-4xl">  Mejora en la Toma de Decisiones </h2>
                            <p class="mt-4 text-xl leading-relaxed text-gray-600">Ofrecemos datos en tiempo real y análisis avanzados, permitiendo a los líderes empresariales tomar decisiones estratégicas. Esto les ayuda a identificar oportunidades de crecimiento, anticipar riesgos y optimizar el rendimiento financiero, generando así un impacto económico positivo a largo plazo para la empresa.</p>

                        </div>

                        <div class="pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
                            <div class="overflow-hidden aspect-w-3 aspect-h-4">
                                <img class="object-cover rounded-lg w-full h-full" src={innovacion} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>






            {/* Testimonios  */}

            <section class="pt-10 bg-gray-100 sm:pt-16 lg:pt-24">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">La Misión de Eyncor</h2>
                        <p class="mt-6 text-lg text-gray-900">Creemos en el poder del cambio y estamos aquí para apoyar cada paso de tu camino hacia el crecimiento sostenible y el éxito.</p>
                        <Link to={"/contacto"}>

                            <button className="inline-flex items-center justify-center px-6 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700">
                                Contáctanos
                            </button>

                        </Link>
                    </div>
                </div>

                <div class="mx-auto 2xl:px-12 -z-10">
                    <img class="w-full mt-6" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/4/group-of-people.png" alt="" />
                </div>
            </section>

        </section>
    );
};

export default Impacto;