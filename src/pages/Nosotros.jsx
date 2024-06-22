import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../components/ExampleCarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import eyncor from "../assets/nosotros/eyncor.webp"
import ofrecer from "../assets/nosotros/ofrecer.webp"
import erp_estrategia from "../assets/nosotros/erp_estrategia.webp"
import erp_mision from "../assets/nosotros/erp_mision.webp"
import erp_vision from "../assets/nosotros/erp_vision.webp"

import banner_nosotros from "../assets/banners/banner_nosotros.webp"


import { Link } from 'react-router-dom';

const Nosotros = () => {
    return (
        <section className=' lg:mt-[103px]'>
            <Carousel className='eyncor_erp_carrusel mb-7'>
                <Carousel.Item>
                    <img
                        className="banner_global d-block w-full h-[300px]  lg:h-[700px] object-cover"
                        src={banner_nosotros}
                        alt="nosotros"
                    />
                    <Carousel.Caption className="arousel-caption-centered 
                    absolute top-[50%] left-[-150px] -translate-y-1/2 text-left pl-[200px]   
                    lg:absolute lg:top-[60%] lg:left-0 lg:-translate-y-1/2 lg:text-left ñg:pl-[200px]">
                        <div className='flex flex-col gap-4'>
                            <strong className='text-xl  lg:text-5xl'>Explora el camino hacia el éxito con EYNCOR ERP.</strong>
                            <div className='hidden text-xl w-9/12  lg:text-xl lg:w-9/12 lg:block'>
                                <p>Descubre el camino hacia el éxito empresarial con EYNCOR ERP, tu solución integral para optimizar procesos y alcanzar tus objetivos.</p>
                            </div>
                            <Link>
                                <button className='btn_acceso_header w-[150px] h-[25px]  lg:w-[200px] lg:h-[50px]'>CONTÁCTANOS</button>
                            </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <section class="py-10 sm:py-16 lg:py-24">
                <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div class="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10 ">
                        <div class="pl-16 hidden pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
                            <div class="overflow-hidden aspect-w-3 aspect-h-4">
                                <img class="object-cover rounded-lg w-full h-full" src={eyncor} alt="" />
                            </div>
                        </div>

                        <div class="md:order-1">
                            <h2 class="eyncor_titulo flex items-center justify-center  lg:block   text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">  ¿Qué es EYNCOR ERP?</h2>
                            <p class="mt-4 text-xl leading-relaxed text-gray-600">Somos CORPORACIÓN EYNCOR S.A.C RUC 20477441565, comprometidos con la honestidad y la transparencia desde el 2002. Nuestra dedicación se refleja en la completa sistematización y eficiente control de procesos y servicios, esenciales para el funcionamiento óptimo de las áreas clave en cualquier organización.</p>
                        </div>

                        <div class="pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2 ">
                            <div class="overflow-hidden aspect-w-3 aspect-h-4">
                                <img class="object-cover rounded-lg w-full h-full" src={eyncor} alt="" />
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
                                <img class="object-cover rounded-lg w-full h-full" src={ofrecer} alt="" />
                            </div>
                        </div>

                        <div class="md:order-1">
                            <h2 class="eyncor_titulo flex items-center justify-center  lg:block   text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"> ¿Qué ofrece EYNCOR ERP?</h2>
                            <p class="mt-4 text-xl leading-relaxed text-gray-600">Nuestro sitema se centra en integrar todas estas funciones en una sola plataforma para mejorar la eficiencia operativa, reducir costos y mejorar la visibilidad y el control sobre los procesos empresariales. Además, puede ofrecer características adicionales adaptadas a las necesidades específicas de diferentes sectores industriales.</p>
                        </div>
                        <div class="pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
                            <div class="overflow-hidden aspect-w-3 aspect-h-4">
                                <img class="object-cover rounded-lg w-full h-full" src={ofrecer} alt="" />
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
                                <img class="object-cover rounded-lg w-full h-full" src={erp_estrategia} alt="" />
                            </div>

                        </div>
                        <div class="md:order-1">
                            <h2 class="eyncor_titulo flex items-center justify-center  lg:block   text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">  Nuestra Estrategia</h2>
                            <p class="mt-4 text-xl leading-relaxed text-gray-600">La esencia central de nuestra estrategia competitiva radica en un enfoque integral, fusionando diversas soluciones diseñadas para el control eficiente de procesos administrativos. Nos especializamos en la creación de entornos que impulsan la productividad y eficiencia, tanto en el sector público como en el privado, a través de nuestro avanzado software ERP.</p>

                            <div class="pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2 hidden">
                                <div class="overflow-hidden aspect-w-3 aspect-h-4">
                                    <img class="object-cover rounded-lg w-full h-full" src={erp_estrategia} alt="" />
                                </div>

                            </div>
                            <Link to={"/impacto"} >
                                <div className='flex items-center justify-center  lg:block  '>
                                    <button className='inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700'>
                                        SABER MÁS
                                    </button>

                                </div>
                            </Link>

                        </div>

                        <div class="pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
                                <div class="overflow-hidden aspect-w-3 aspect-h-4">
                                    <img class="object-cover rounded-lg w-full h-full" src={erp_estrategia} alt="" />
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
                                <img class="object-cover rounded-lg w-full h-full" src={erp_mision} alt="" />
                            </div>

                        </div>


                        <div class="md:order-1">
                            <h2 class="eyncor_titulo flex items-center justify-center  lg:block   text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"> Mision de Eyncor</h2>
                            <p class="mt-4 text-xl leading-relaxed text-gray-600"> Nuestra misión es impulsar la innovación y el progreso al proporcionar soluciones tecnológicas de vanguardia, incluyendo nuestro potente software ERP, que transforma la forma en que las personas trabajan, se conectan y prosperan en un mundo digitalmente interconectado.</p>
                            <div class="pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2 hidden">
                                <div class="overflow-hidden aspect-w-3 aspect-h-4">
                                    <img class="object-cover rounded-lg w-full h-full" src={erp_mision} alt="" />
                                </div>

                            </div>
                            <Link to={"/mision"} >
                                <div className='flex items-center justify-center  lg:block '>
                                    <button className='inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700'>
                                        SABER MÁS
                                    </button>

                                </div>
                            </Link>

                        </div>

                        <div class="pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
                                <div class="overflow-hidden aspect-w-3 aspect-h-4">
                                    <img class="object-cover rounded-lg w-full h-full" src={erp_mision} alt="" />
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
                                <img class="object-cover rounded-lg w-full h-full" src={erp_vision} alt="" />
                            </div>
                        </div>


                        <div class="md:order-1">
                            <h2 class="eyncor_titulo flex items-center justify-center  lg:block   text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"> Vision de Eyncor</h2>
                            <p class="mt-4 text-xl leading-relaxed text-gray-600">Nos visualizamos como líderes globales en innovación tecnológica, siendo reconocidos por nuestra capacidad para anticipar y adaptarnos a las demandas del mercado, con nuestro destacado software ERP.</p>
                            <div class="pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2 hidden">
                                <div class="overflow-hidden aspect-w-3 aspect-h-4">
                                    <img class="object-cover rounded-lg w-full h-full" src={erp_vision} alt="" />
                                </div>
                            </div>
                            <Link to={"/vision"} >
                                <div className='flex items-center justify-center  lg:block '>

                                    <button className='inline-flex   px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700'>
                                        SABER MÁS
                                    </button>
                                </div>
                            </Link>

                        </div>

                        <div class="pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
                                <div class="overflow-hidden aspect-w-3 aspect-h-4">
                                    <img class="object-cover rounded-lg w-full h-full" src={erp_vision} alt="" />
                                </div>
                            </div>

                    </div>
                </div>
            </section>


            {/* Banner explicando que nos hace diferentes */}


            {/* Ejemplo para hacer el filtro de clientes*/}

            <section class="pt-10 bg-gray-100 sm:pt-16 lg:pt-24">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="eyncor_titulo text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Nosotros somos EYNCOR</h2>
                        <p class="mt-6 text-lg text-gray-900">Creemos en el poder del cambio y estamos aquí para apoyar cada paso de tu camino hacia el crecimiento sostenible y el éxito.</p>
                        <a href="/contacto" title="" class="inline-flex items-center justify-center px-6 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button">
                            <svg class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            Contáctanos
                        </a>
                    </div>
                </div>

                <div class="mx-auto 2xl:px-12 -z-10">
                    <img class="w-full rounded-lg mt-6" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/4/group-of-people.png" alt="" />
                </div>
            </section>

        </section>

    );
};

export default Nosotros;