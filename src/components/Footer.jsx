import React from 'react';
import logo from "../assets/logofooter.webp"
import TikTok from '../assets/icons/Tiktok';
import Facebook from '../assets/icons/Facebook';
import Instagram from '../assets/icons/Instagram';
import Linkedln from '../assets/icons/Linkedln';
import Youtube from '../assets/icons/Youtube';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='eyncor-footer 
        lg:w-full lg:h-full text-white lg:flex lg:items-center lg:justify-around 
        '>

            {/* ---- Segundo footer----  */}

            <section class="py-10 sm:pt-16 lg:pt-16 ">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
                        <div class="col-span-2 md:col-span-4 xl:pr-8">
                            <img class="w-auto h-9" src={logo} alt="" />

                            <p class="text-base leading-relaxed mt-7">Con un enfoque en la integración de procesos, datos y funciones empresariales clave, nuestro ERP proporciona una plataforma centralizada y escalable</p>

                            <a href="/contacto" title="" class="inline-flex items-center justify-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700 mt-7">
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                Contáctanos
                            </a>
                        </div>

                        <div class="lg:col-span-2">
                            <p class="text-base font-semibold ">Nuestro Servicios</p>

                            <ul class="mt-6 space-y-5">
                                <li>
                                    <Link to={"/grifo"}>
                                        ERP GRIFOS
                                    </Link>
                                </li>

                                <li>
                                    <Link to={"/glp"}>
                                        ERP GLP
                                    </Link>
                                </li>

                                <li>
                                    <Link to={"/tienda"}>
                                        ERP TIENDAS
                                    </Link>
                                </li>

                                <li>
                                    <Link to={"/adaptable"}>
                                        ERP ADAPTABLE
                                    </Link>

                                </li>
                                <li>

                                    <Link to={"/transporte"}>
                                        ERP TRANSPORTE
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/contabilidad"}>
                                        ERP CONTABILIDAD
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div class="lg:col-span-2">
                            <p class="text-base font-semibold">Enlaces Directos</p>

                            <ul class="mt-6 space-y-4">
                                <li>
                                    <Link to={"/nosotros"}>
                                        EMPRESA
                                    </Link>
                                </li>

                                <li>
                                    <Link to={"/utiles"}>
                                        UTILES
                                    </Link>
                                </li>

                                <li>
                                    <Link to={"/cliente"}>
                                        CLIENTE
                                    </Link>
                                </li>

                            </ul>
                        </div>


                        <div class="lg:col-span-2">
                            <p class="text-base font-semibold"> Contacto  </p>
                            <ul class="mt-6 space-y-5">
                                <li>
                                    <p class="flex text-sm  transition-all duration-200 hover:text-blue-500 focus:text-blue-600" > Ca. Inca Roca 253 Urb. Sta María 1era Etapa Trujillo-Perú </p>
                                </li>

                                <li>
                                    <p class="flex text-sm  transition-all duration-200 hover:text-blue-500 focus:text-blue-600" > ventas@eyncor.com </p>

                                </li>

                                <li>

                                    <p class="flex text-sm  transition-all duration-200 hover:text-blue-500 focus:text-blue-600" > +51 948774628 </p>

                                </li>

                            </ul>
                        </div>
                    </div>

                    <hr class="mt-16 mb-10 border-gray-200" />

                    <div class="sm:flex sm:items-center sm:justify-between">
                        <p class="text-sm ">© Copyright 2024, EYNCOR ERP</p>

                        <ul class="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">


                            <li>
                                <div className='eyncor_redes'>
                                    <a target='_blank' href="https://www.facebook.com/eyncor">
                                        <Facebook />
                                    </a>

                                </div>
                            </li>

                            <li>
                                <div className='eyncor_redes'>
                                    <a target='_blank' href="https://www.instagram.com/eyncor.erp/?hl=es-la">
                                        <Instagram />
                                    </a>
                                </div>
                            </li>

                            <li>

                                <div className='eyncor_redes'>
                                    <a target='_blank' href="https://www.tiktok.com/@eyncor.erp">
                                        <TikTok />

                                    </a>
                                </div>

                            </li>

                            <li>
                                <div className='eyncor_redes'>
                                    <a target='_blank' href="https://www.linkedin.com/company/eyncor/">
                                        <Linkedln />
                                    </a>
                                </div>
                            </li>

                            <li>
                                <div className='eyncor_redes'>
                                    <a target='_blank' href="https://www.youtube.com/@eyncorerp/videos">
                                        <Youtube />
                                    </a>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </section>




        </div>
    );
};

export default Footer;