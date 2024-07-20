import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../components/ExampleCarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import glp from "../assets/glp.webp"
import grifo from "../assets/grifo.webp"
import AnimatedCard from '../components/AnimateCard';
import sunat from "../assets/sunat.webp"
import general from "../assets/general.webp"
import web from "../assets/web.webp"
import Testimonial from '../components/Testimonial';
import banner_conteo from "../assets/banners/banner_conteo.jpg"
import objetivo from "../assets/icons/objetivo.png"
import realimentacion from "../assets/icons/realimentacion.png"
import exito from "../assets/icons/exito.png"
import banner_presencia from "../assets/portalweb.webp"
import banner_grifo from "../assets/banners/banner_grifo.webp"
import banner_glp from "../assets/banners/banner_envasado.webp"
import banner_tienda from "../assets/banners/banner_tienda.webp"
import banner_transporte from "../assets/banners/banner_transporte.webp"
import banner_empleado from "../assets/banners/banner_empleadot.webp"
import banner_ferreteria from "../assets/banners/banner_ferretaria.webp"
import movil_banner from "../assets/desing_movil.png"
import banner_ventas from "../assets/certificadosweb.webp"
import video_movil from "../assets/video_movil.mp4"
import { Link } from 'react-router-dom';
import Servicios from '../components/Servicios';
import Modal from '../components/Modal';


const Home = () => {

  

    return (
        <section className='eyncorerp_carrusel mt-[53px] lg:mt-[103px] '>
            {/* Z index para que no se muestre encima */}
            <Carousel className='eyncor_erp_carrusel mb-7 '>
                <Carousel.Item interval={3000} >

                    <img
                        className="banner_global d-block w-100 lg:h-[650px]"
                        src={banner_presencia}
                        alt="presentacion"
                    />
                    <Carousel.Caption className="carousel-caption-centered
                    absolute top-[45%] left-[-150px] -translate-y-1/2 text-left pl-[200px]   
                     lg:absolute lg:top-[60%] lg:left-0 lg:-translate-y-1/2 lg:text-left ñg:pl-[200px]">
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Primer banner de grifo */}
                <Carousel.Item interval={3000}>

                    <img
                        className="banner_global d-block w-100 lg:h-[650px]"
                        src={grifo}
                        alt="grifo"
                    />


                    <Carousel.Caption className="carousel-caption-centered 
                    absolute top-[40%] left-[-150px] -translate-y-1/2 text-left pl-[200px]   
                    lg:absolute lg:top-[60%] lg:left-0 lg:-translate-y-1/2 lg:text-left ñg:pl-[200px]">
                        <div className='flex flex-col gap-4'>
                            <strong className='text-xl lg:text-5xl'>ERP ESPECIALIZADO PARA GRIFOS</strong>
                            <div className='hidden text-xl w-9/12  lg:text-xl lg:w-9/12 lg:block'>
                                <p>Enciende el motor del progreso con el mejor combustible digital ERP para Grifos 100% Web Móvil</p>
                            </div>
                            <Link to={"/grifo"}>  <button className='btn_acceso_header w-[150px] h-[25px]  lg:w-[200px] lg:h-[50px]'>Comienza ahora</button> </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Segunda imagen para grifo  */}

                <Carousel.Item interval={3000}>

                    <img
                        className="banner_global d-block w-100 lg:h-[650px]"
                        src={banner_grifo}
                        alt="grifo"
                    />


                    <Carousel.Caption className="carousel-caption-centered 
                    absolute top-[40%] left-[-150px] -translate-y-1/2 text-left pl-[200px]   
                    lg:absolute lg:top-[60%] lg:left-0 lg:-translate-y-1/2 lg:text-left ñg:pl-[200px]">
                        <div className='flex flex-col gap-4'>
                            <strong className='text-xl  lg:text-5xl'>ERP ESPECIALIZADO PARA GRIFOS</strong>
                            <div className='hidden text-xl w-9/12  lg:text-xl lg:w-9/12 lg:block'>
                                <p>Enciende el motor del progreso con el mejor combustible digital ERP para Grifos 100% Web Móvil</p>
                            </div>
                            <Link to={"/grifo"}>  <button className='btn_acceso_header w-[150px] h-[25px]  lg:w-[200px] lg:h-[50px]'>Comienza ahora</button> </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>




                {/* Primer banner glp */}

                <Carousel.Item interval={3000}>

                    <img
                        className="banner_global d-block w-100 lg:h-[650px]"
                        src={glp}
                        alt="glp"
                    />


                    <Carousel.Caption className="carousel-caption-centered 
                    absolute top-[40%] left-[-150px] -translate-y-1/2 text-left pl-[200px]   
                    lg:absolute lg:top-[60%] lg:left-0 lg:-translate-y-1/2 lg:text-left ñg:pl-[200px]">
                        <div className='flex flex-col gap-3'>
                            <strong className='text-xl  lg:text-5xl'>ERP ESPECIALIZADO PARA PLANTAS ENVASADORAS DE GAS</strong>
                            <div className='hidden text-xl w-9/12  lg:text-xl lg:w-9/12 lg:block'>
                                <p>Descubre una gestión inteligente y sin complicaciones para tu planta de envasado de gas con nuestra tecnología 100% Web Móvil.</p>
                            </div>
                            <Link to={"/glp"}>  <button className='btn_acceso_header w-[150px] h-[25px]  lg:w-[200px] lg:h-[50px]'>Comienza ahora</button> </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>


                {/* Segundo banner de glp */}

                <Carousel.Item interval={3000}>

                    <img
                        className="banner_global d-block w-100 lg:h-[650px]"
                        src={banner_glp}
                        alt="glp"
                    />


                    <Carousel.Caption className="carousel-caption-centered 
                    absolute top-[40%] left-[-150px] -translate-y-1/2 text-left pl-[200px]   
                    lg:absolute lg:top-[60%] lg:left-0 lg:-translate-y-1/2 lg:text-left ñg:pl-[200px]">
                        <div className='flex flex-col gap-3'>
                            <strong className='text-xl  lg:text-5xl'>ERP ESPECIALIZADO PARA PLANTAS ENVASADORAS DE GAS</strong>
                            <div className='hidden text-xl w-9/12  lg:text-xl lg:w-9/12 lg:block'>
                                <p>Descubre una gestión inteligente y sin complicaciones para tu planta de envasado de gas con nuestra tecnología 100% Web Móvil.</p>
                            </div>
                            <Link to={"/glp"}>  <button className='btn_acceso_header w-[150px] h-[25px]  lg:w-[200px] lg:h-[50px]'>Comienza ahora</button> </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Primer banner tienda */}


                <Carousel.Item interval={3000}>
                    <img
                        className="banner_global d-block w-100 lg:h-[650px]"
                        src={banner_tienda}
                        alt="tienda"
                    />
                    <Carousel.Caption className="absolute top-[40%] left-[-150px] -translate-y-1/2 text-left pl-[200px]   
                    lg:absolute lg:top-[60%] lg:left-0 lg:-translate-y-1/2 lg:text-left ñg:pl-[200px]">
                        <div className='flex flex-col gap-3'>
                            <strong className='text-xl  lg:text-5xl'>GESTIONA TU TIENDA DE FORMA EFICIENTE CON NUESTRO ERP</strong>
                            <div className='hidden text-xl w-9/12  lg:text-xl lg:w-9/12 lg:block'>
                                <p>Maximiza la eficiencia y rentabilidad de tu tienda con nuestro ERP y simplifica procesos de gestión comercial 100% Web Móvil.</p>
                            </div>
                            <Link to={"/tienda"}>  <button className='btn_acceso_header w-[150px] h-[25px]  lg:w-[200px] lg:h-[50px]'>Comienza ahora</button> </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <img
                        className="banner_global d-block w-100 lg:h-[650px]"
                        src={banner_ferreteria}
                        alt="tienda"
                    />
                    <Carousel.Caption className="absolute top-[40%] left-[-150px] -translate-y-1/2 text-left pl-[200px]   
                    lg:absolute lg:top-[60%] lg:left-0 lg:-translate-y-1/2 lg:text-left ñg:pl-[200px]">
                        <div className='flex flex-col gap-3'>
                            <strong className='text-xl  lg:text-5xl'>GESTIONA TU TIENDA DE FORMA EFICIENTE CON NUESTRO ERP</strong>
                            <div className='hidden text-xl w-9/12  lg:text-xl lg:w-9/12 lg:block'>
                                <p>Maximiza la eficiencia y rentabilidad de tu tienda con nuestro ERP y simplifica procesos de gestión comercial 100% Web Móvil.</p>
                            </div>
                            <Link to={"/tienda"}>  <button className='btn_acceso_header w-[150px] h-[25px]  lg:w-[200px] lg:h-[50px]'>Comienza ahora</button> </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Primer banner transporte */}

                <Carousel.Item interval={3000}>
                    <img
                        className="banner_global d-block w-100 lg:h-[650px]"
                        src={banner_empleado}
                        alt="Transporte"
                    />
                    <Carousel.Caption className="carousel-caption-centered 
                    absolute top-[40%] left-[-150px] -translate-y-1/2 text-left pl-[200px]   
                    lg:absolute lg:top-[60%] lg:left-0 lg:-translate-y-1/2 lg:text-left ñg:pl-[200px]">
                        <div className='flex flex-col gap-3'>
                            <strong className='text-xl   lg:text-5xl'>CONDUCE HACIA EL ÉXITO CON NUESTRO ERP TRANSPORTE</strong>
                            <div className='hidden text-xl w-9/12  lg:text-xl lg:w-9/12 lg:block'>
                                <p>Nuestro ERP especializado en transporte impulsa el éxito empresarial mediante herramientas específicas que optimizan operaciones y mejoran la eficiencia comercial.</p>
                            </div>
                            <Link to={"/transporte"}>  <button className='btn_acceso_header w-[150px] h-[25px]  lg:w-[200px] lg:h-[50px]'>Comienza ahora</button> </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>


                {/*Segundo banner transporte */}

                <Carousel.Item interval={3000} >
                    <img
                        className="banner_global d-block w-100 lg:h-[650px]"
                        src={banner_transporte}
                        alt="Transporte"
                    />
                    <Carousel.Caption className="carousel-caption-centered 
                    absolute top-[40%] left-[-150px] -translate-y-1/2 text-left pl-[200px]   
                    lg:absolute lg:top-[60%] lg:left-0 lg:-translate-y-1/2 lg:text-left ñg:pl-[200px]">
                        <div className='flex flex-col gap-3'>
                            <strong className='text-xl   lg:text-5xl'>CONDUCE HACIA EL ÉXITO CON NUESTRO ERP TRANSPORTE</strong>
                            <div className='hidden text-xl w-9/12  lg:text-xl lg:w-9/12 lg:block'>
                                <p>Nuestro ERP especializado en transporte impulsa el éxito empresarial mediante herramientas específicas que optimizan operaciones y mejoran la eficiencia comercial.</p>
                            </div>
                            <Link to={"/transporte"}>  <button className='btn_acceso_header w-[150px] h-[25px]  lg:w-[200px] lg:h-[50px]'>Comienza ahora</button> </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item interval={3000} >
                    <img
                        className="banner_global d-block w-100 lg:h-[650px]"
                        src={banner_ventas}
                        alt="Transporte"
                    />

                    <Carousel.Caption className="carousel-caption-centered 
                    absolute top-[40%] left-[-150px] -translate-y-1/2 text-left pl-[200px]   
                    lg:absolute lg:top-[60%] lg:left-0 lg:-translate-y-1/2 lg:text-left ñg:pl-[200px]">
                        <div className='flex flex-col gap-3'>
                            <strong className='text-xl   lg:text-5xl'>ADQUIERE TU CERTIFICADO DIGITAL</strong>
                            <div className='hidden text-xl w-9/12  lg:text-xl lg:w-9/12 lg:block'>
                                <p>Certificado Digital para Factura Electrónica SUNAT</p>
                            </div>
                            <Link to={"/certificados"}>  <button className='btn_acceso_header w-[150px] h-[25px]  lg:w-[200px] lg:h-[50px]'>Comienza ahora</button> </Link>
                        </div>
                    </Carousel.Caption>

                </Carousel.Item>


                {/* Video de prueba */}


                <Carousel.Item interval={3000}>
                    <video className='w-full h-full' src={video_movil} autoPlay muted loop></video>
                    <Carousel.Caption >
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>

            {/*  Card Hover  */}

            <div className='eyncor_productos'>
                <h2 className='eyncor_titulo text-xl text-center mb-3 lg:flex lg:items-center lg:justify-center lg:mb-4 lg:text-5xl'>Encuentra el ERP Adecuado Para Tu Empresa</h2>
                <h4 className='eyncor_subtitulo text-center text-sm lg:flex lg:items-center lg:justify-center lg:text-xl  mb-16'>Ofrecemos ERP de gestión para optimizar procesos y crear compañías más eficientes y rentables</h4>
                <section className="min-h-screen bg-gradient-to-br mb-12 from-primary to-primary/70 grid place-items-center md:mb-5">
                    <AnimatedCard />

                </section>
            </div>


            {/* SUNAT  */}

            <section className="-z-10 relative py-20 mb-4 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32 lg:mb-10 ">
                <div class="absolute inset-0">
                    <img class="object-cover w-full h-full md:origin-top-left" src={sunat} alt="sunat" />
                </div>

                <div class="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

                <div class="absolute inset-0 block bg-black/60 md:hidden"></div>

                <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="lg:w-[800px]">
                        <h2 class="text-xl font-extrabold leading-tight text-white sm:text-xl lg:text-4xl">Facturación Electrónica directo a SUNAT y además contamos con OSE</h2>
                        <p class="mt-4 text-xl text-gray-200">Operador de Servicios Electrónicos OSE autorizado, lo que asegura una gestión eficiente y confiable de tus documentos tributarios electrónicos. Simplifica tus procesos contables y fiscales con nuestra solución de Facturación Electrónica respaldada por la experiencia y la tecnología de EYNCOR ERP.</p>

                    </div>
                </div>
            </section>

            <Testimonial />

            {/* Banner conteo */}

            <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32 -z-10">
                <div class="absolute inset-0">
                    <img class="object-cover w-full h-full md:origin-top-left" src={banner_conteo} alt="sunat" />
                </div>

                <div class="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

                <div class="absolute inset-0 block bg-black/60 md:hidden"></div>

                <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl ">
                    <div class="flex items-center justify-center flex-col  lg:flex lg:items-center lg:flex-row lg:justify-around">
                        <div className='text-center mb-8 md:mb-0'>
                            <div className='circulo_opacity flex items-center justify-center'>
                                <img src={objetivo} className='w-20' alt="objetivo" />
                            </div>
                            <strong className='titulo_home font-bold '> 300 + </strong>
                            <h5 className='sub_titulo_home'>Tratos con empresas</h5>
                        </div>

                        <div className='text-center mb-8 md:mb-0'>
                            <div className='circulo_opacity flex items-center justify-center'>
                                <img src={realimentacion} className='w-20' alt="realimentacion" />
                            </div>
                            <strong className='titulo_home font-bold '> 600 + </strong>
                            <h5 className='sub_titulo_home'>Clientes Satisfechos</h5>
                        </div>

                        <div className='text-center'>
                            <div className='circulo_opacity flex items-center justify-center'>
                                <img src={exito} className='w-20' alt="exito" />
                            </div>
                            <strong className='titulo_home font-bold '> 360 + </strong>
                            <h5 className='sub_titulo_home'>Trabajos concluidos</h5>
                        </div>
                    </div>
                </div>
            </section>



            <Servicios />


            <div className='movil-banner'>

                <img className='object-cover' src={movil_banner} alt="sunat" />

            </div>



            <section class="py-10 sm:py-16 lg:py-24 flex">
                <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div class="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
                        <div class="pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
                            <div class="overflow-hidden hidden aspect-w-3 aspect-h-4 lg:block">
                                <img class="object-cover w-full h-full" src={general} alt="cloud" />
                            </div>
                        </div>

                        <div class="md:order-1">
                            <h2 class="eyncor_titulo text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"> EYNCOR CLOUD</h2>
                            <p class="mt-4 text-xl leading-relaxed text-gray-600">EYNCOR CLOUD es una solución integral que combina accesibilidad, seguridad, y versatilidad, haciéndola ideal para empresas de todos los tamaños que buscan optimizar sus operaciones y fomentar una mayor colaboración. Con su enfoque en la simplicidad y la eficiencia, se posiciona como una herramienta esencial en el panorama tecnológico actual.</p>
                        </div>
                        <div class="overflow-hidden aspect-w-3 aspect-h-4 lg:hidden">
                            <img class="object-cover w-full h-full" src={general} alt="cloud" />
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-10 sm:py-16 lg:py-24">
                <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div class="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
                        <div class="pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">

                        </div>
                        <div class="md:order-1">
                            <h2 class="eyncor_titulo  text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">SOFTWARE 100% WEB Y MÓVIL</h2>
                            <p class="mt-4 text-xl leading-relaxed text-gray-600"> Nuestra plataforma te ofrece la máxima flexibilidad y conveniencia, permitiéndote gestionar tus tareas y proyectos de manera eficiente tanto en tu computadora como en tu dispositivo móvil.</p>
                        </div>

                        <div class="overflow-hidden aspect-w-3 aspect-h-4">
                            <img class="object-cover w-full h-full rounded-xl" src={web} alt="software" />
                        </div>

                    </div>
                </div>
            </section>




        </section>
    );
};

export default Home;