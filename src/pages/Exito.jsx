import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../components/ExampleCarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import lider from "../assets/nosotros/lider.webp"
import enfoque from "../assets/nosotros/enfoque.webp"
import innovacion from "../assets/nosotros/innovacion.webp"
import banner_exito from "../assets/banners/banner_exito.webp"
import { Link } from 'react-router-dom';

const Exito = () => {
    return (
        <section className=' lg:mt-[103px]'>
            <Carousel className='eyncor_erp_carrusel mb-7'>
                <Carousel.Item>
                    <img
                        className="banner_global d-block w-full h-[300px] lg:h-[600px] object-cover"
                        src={banner_exito}
                        alt="glp"
                    />
                    <Carousel.Caption className="carousel-caption-centered 
                    absolute top-[50%] left-[-150px] -translate-y-1/2 text-left pl-[200px]   
                    lg:absolute lg:top-[60%] lg:left-0 lg:-translate-y-1/2 lg:text-left ñg:pl-[200px]">
                        <div className='flex flex-col gap-4'>
                            <strong className='text-2xl  lg:text-5xl'>Impulsando el Éxito de Nuestros Clientes</strong>
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
                                <img class="object-cover w-full h-full rounded-lg" src={lider} alt="" />
                            </div>
                        </div>

                        <div class="md:order-1">
                            <h2 class="eyncor_titulo text-3xl font-bold leading-tight sm:text-4xl lg:text-4xl"> La Clave del Éxito del Cliente</h2>
                            <p class="mt-4 text-xl leading-relaxed text-gray-600">Creemos firmemente que la clave del éxito del cliente radica en nuestra dedicación inquebrantable para comprender y satisfacer las necesidades individuales de cada cliente. Para nosotros, el éxito del cliente no es solo un objetivo, sino un compromiso fundamental que impulsa todas nuestras acciones y decisiones.</p>
                        </div>

                        <div class="pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
                            <div class="overflow-hidden aspect-w-3 aspect-h-4">
                                <img class="object-cover w-full h-full rounded-lg" src={lider} alt="" />
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
                                <img class="object-cover w-full h-full rounded-lg" src={enfoque} alt="" />
                            </div>

                        </div>
                        <div class="md:order-1">
                            <h2 class="eyncor_titulo text-3xl font-bold leading-tight sm:text-4xl lg:text-4xl">
                                Compromiso con el Éxito del Cliente</h2>
                            <p class="mt-4 text-xl leading-relaxed text-gray-600">Nos dedicamos a ser un verdadero socio en el viaje hacia el logro de los objetivos de nuestros clientes, brindando un nivel excepcional de atención, apoyo y recursos para garantizar su éxito a largo plazo.</p>

                        </div>

                        <div class="pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
                            <div class="overflow-hidden aspect-w-3 aspect-h-4">
                                <img class="object-cover w-full h-full rounded-lg" src={enfoque} alt="" />
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
                                <img class="object-cover w-full h-full rounded-lg " src={innovacion} alt="" />
                            </div>

                        </div>
                        <div class="md:order-1">
                            <h2 class="eyncor_titulo text-3xl font-bold leading-tight sm:text-4xl lg:text-4xl">  Transformando Desafíos en Oportunidades </h2>
                            <p class="mt-4 text-xl leading-relaxed text-gray-600">Únete a nosotros mientras exploramos cómo nuestros clientes han convertido desafíos en oportunidades, y descubre cómo tú también puedes hacerlo con EYNCOR ERP</p>

                        </div>

                        <div class="pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
                            <div class="overflow-hidden aspect-w-3 aspect-h-4">
                                <img class="object-cover w-full h-full rounded-lg " src={innovacion} alt="" />
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

export default Exito;