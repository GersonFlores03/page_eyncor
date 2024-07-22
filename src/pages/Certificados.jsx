import React, { useState } from 'react';
//import { useOrden } from '../context/OrdenProvider';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Card, ListGroup } from 'react-bootstrap';
import Testimonial from '../components/Testimonial';
import ventas from "../assets/banners/ventas.png"
import center from "../assets/general.webp"

const Certificados = () => {

  //Se para enlazar los productos

  //const { createProducto } = useOrden()

  return (

    <div className='certificados_contenedor   lg:mt-[103px]'>

      <Carousel className='eyncor_erp_carrusel mb-7'>
        <Carousel.Item>
          <img
            className="banner_global -block w-full h-[300px] lg:h-[600px] "
            src={ventas}
            alt="tienda"
          />
        </Carousel.Item>
      </Carousel>


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
                mb-2
                '>
          Certificado Digital para Factura Electrónica SUNAT
        </h2>
        <p className='text-center text-sm'>Certificado Digital para Factura Electrónica según los requisitos de la SUNAT</p>
      </div>

      <section className='mb-6'>

        <div className='flex items-center justify-center flex-col lg:flex lg:items-center lg:justify-center lg:flex-row gap-40 mb-16'>
          <section class="py-20 bg-white sm:py-16">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
                <div class="overflow-hidden bg-white border-2 border-gray-100 rounded-md">
                  <div class="p-8 xl:px-12">
                    <h3 class="text-base font-semibold text-purple-600">1 AÑO</h3>
                    <p class="text-5xl font-bold text-black mt-7">S/260.00</p>
                    <p class="mt-3 text-base text-gray-600">incluye igv</p>

                    <ul class="inline-flex flex-col items-start space-y-5 text-left mt-9">
                      <li class="inline-flex items-center space-x-2">
                        <svg class="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-base font-medium text-gray-900"> Firma de documentos XML </span>
                      </li>

                      <li class="inline-flex items-center space-x-2">
                        <svg class="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-base font-medium text-gray-900"> Compatible con facturador sunat </span>
                      </li>

                      <li class="inline-flex items-center space-x-2">
                        <svg class="h-5 text-indigo-500 flex-shrink-0w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-base font-medium text-gray-900"> Formato .PFX, .P12 y .CER. </span>
                      </li>

                      <li class="inline-flex items-center space-x-2">
                        <svg class="h-5 text-indigo-500 flex-shrink-0w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-base font-medium text-gray-900"> Certificado de Agente Automatizado </span>
                      </li>

                      <li class="inline-flex items-center space-x-2">
                        <svg class="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="pb-0.5 text-base font-medium text-gray-900 border-b border-black border-dashed"> Soporte Gratis </span>
                      </li>
                    </ul>

                    <a href="/certificados" title="" class="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button">  Más información  </a>

                  </div>
                </div>

                <div class="overflow-hidden bg-white border-2 border-gray-100 rounded-md shadow-lg">
                  <div class="p-8 xl:px-12">
                    <h3 class="text-base font-semibold text-purple-600">2 AÑOS</h3>
                    <p class="text-5xl font-bold text-black mt-7"> S/450.00 </p>
                    <p class="mt-3 text-base text-gray-600">Incluye igv</p>

                    <ul class="inline-flex flex-col items-start space-y-5 text-left mt-9">
                      <li class="inline-flex items-center space-x-2">
                        <svg class="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-base font-medium text-gray-900"> Firma de documentos XML </span>
                      </li>

                      <li class="inline-flex items-center space-x-2">
                        <svg class="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-base font-medium text-gray-900"> Compatible con facturador sunat </span>
                      </li>

                      <li class="inline-flex items-center space-x-2">
                        <svg class="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-base font-medium text-gray-900"> Formato .PFX, .P12 y .CER. </span>
                      </li>

                      <li class="inline-flex items-center space-x-2">
                        <svg class="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-base font-medium text-gray-900"> Certificado de Agente Automatizado </span>
                      </li>

                      <li class="inline-flex items-center space-x-2">
                        <svg class="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="pb-0.5 text-base font-medium text-gray-900 border-b border-black border-dashed"> Soporte Gratis </span>
                      </li>
                    </ul>

                    <a href="/certificados" title="" class="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80" role="button"> Más información </a>
                  </div>
                </div>

                <div class="overflow-hidden bg-white border-2 border-gray-100 rounded-md">
                  <div class="p-8 xl:px-12">
                    <h3 class="text-base font-semibold text-purple-600">3 AÑOS</h3>
                    <p class="text-5xl font-bold text-black mt-7">S/650.00</p>
                    <p class="mt-3 text-base text-gray-600">incluye igv</p>

                    <ul class="inline-flex flex-col items-start space-y-5 text-left mt-9">
                      <li class="inline-flex items-center space-x-2">
                        <svg class="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-base font-medium text-gray-900"> Firma de documentos XML </span>
                      </li>

                      <li class="inline-flex items-center space-x-2">
                        <svg class="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-base font-medium text-gray-900"> Compatible con facturador sunat </span>
                      </li>

                      <li class="inline-flex items-center space-x-2">
                        <svg class="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-base font-medium text-gray-900"> Formato .PFX, .P12 y .CER. </span>
                      </li>

                      <li class="inline-flex items-center space-x-2">
                        <svg class="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-base font-medium text-gray-900"> Certificado de Agente Automatizado </span>
                      </li>

                      <li class="inline-flex items-center space-x-2">
                        <svg class="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="pb-0.5 text-base font-medium text-gray-900 border-b border-black border-dashed"> Soporte Gratis </span>
                      </li>
                    </ul>

                    <a href="/certificados" title="" class="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button"> Más información </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/*-----------Nuevo diseño de certificado campos adicionales--------------*/}

        <div className='  lg:flex lg:items-center lg:justify-center gap-10 '>


          <div className='lg:mb-[360px]'>
            {/* ------------------------------------ */}
            <Card className='mb-3 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[720px] mx-auto' >
              <Card.Header className='text-2xl text-blue-500' as="h5">
                TIEMPO DE ENTREGA:
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  La entrega del certificado es INMEDIATA en cuanto validemos la identidad del solicitante y realice el pago (IMPORTANTE: la identidad puede validarse en minutos o de 1 a 2 días hábiles). Se le enviará el Certificado a través de un ambiente seguro y cifrado (nadie tendrá acceso al certificado o la clave privada, eso nos incluye a nosotros).

                </Card.Text>
              </Card.Body>
            </Card>

            {/* ------------------------------------ */}

            <Card className='mb-3 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[720px] mx-auto' >
              <Card.Header className='text-2xl text-blue-500' as="h5">
                EYNCOR ERP
              </Card.Header>
              <Card.Body>
                <Card.Text className='mb-4'>

                  ¿Porqué trabajar con NOSOTROS? es una empresa peruana con el compromiso de proveer seguridad digital a personas y organizaciones de todo tipo en el uso de aplicaciones web.

                </Card.Text>

                <Card.Text className='mb-4' >

                  Actualmente las soluciones que EYNCOR ofrece, se extienden a soluciones PKI escalables basados en la nube para instituciones financieras, gobiernos, organizaciones de todo tipo y empresas que tienen que realizar comercio, las comunicaciones, entrega de contenido e interacciones con la comunidad digital de forma segura.

                </Card.Text>

                <Card.Text className='mb-4' >

                  Entre los tipos de certificados digitales que provee son: Certificado digital para Factura Electrónica según lo solicitado por SUNAT en el Perú para firmar archivos XML, Certificados SSL para páginas web, correo electrónico, PDF, autenticación, firma de código, etc.

                </Card.Text>
                <Card.Text className='mb-4' >

                  En calidad de Entidad de Certificación, EYNCOR emite certificados bajo los stándares de certificación internacional.

                </Card.Text>
                <Card.Text className='mb-4' >

                  En calidad de Entidad de Registro, EYNCOR brinda los servicios de registro o verificación de sus clientes, tanto en el caso de personas jurídicas como naturales.

                </Card.Text>
              </Card.Body>
            </Card>


          </div>

          <div>
            {/* ------------------------------------ */}
            <Card className='mb-3 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[720px] mx-auto'>
              <Card.Header className='text-2xl text-blue-500' as="h5">
                REQUISITOS PARA TRAMITAR SU CERTIFICADO DIGITAL
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  1. Documento de identidad. - DNI emisión vigente en RENIEC.
                </Card.Text>

                <Card.Text>
                  2. Vigencia Poder no mayor a 30 días calendario. No aplica para personas naturales solo personas jurídicas

                </Card.Text>


                <Card.Text>
                  3. Ficha RUC obtenida de SUNAT con su Clave SOL. Emitida dentro del mes en curso

                </Card.Text>

                <Card.Text>
                  4. Email donde desea que se envíe el correo del certificado


                </Card.Text>

                <Card.Text>
                  5. Nombre del Gerente, número de teléfono y correo electrónico para la validación de identidad
                </Card.Text>

                <Card.Text>
                  6. Constancia de Pago:
                </Card.Text>

                <Card.Text className='text-blue-500'>

                  Cuenta de CORPORACION EYNCOR SAC.
                  <br />
                  BANCO: BANCO CREDITO
                  <br />
                  EMPRESA: CORPORACION EYNCOR SAC
                  <br />
                  RUC: 20477441565
                  <br />
                  CUENTA SOLES: 570-2155828-0-13
                  <br />
                  INTERBANCARIO: 00257000215582801303
                  <br />
                  CUENTA EYNCOR DETRACCIÓN (BCO DE LA NACIÓN):00741248212 ( MONTO MAYOR A 700.00 SOLES )

                </Card.Text>
              </Card.Body>
            </Card>


            {/* ------------------------------------ */}


            <Card className='mb-3 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[720px] mx-auto' >
              <Card.Header className='text-2xl text-blue-500' as="h5">
                Pasos para la emisión del Certificado Digital
              </Card.Header>
              <Card.Body>
                <Card.Text className='mb-4'>
                  Tiempo de entrega del certificado INMEDIATA. Una vez que validemos la identidad del solicitante y verifiquemos el pago

                  IMPORTANTE: la identidad puede validarse en minutos o de 1 a 2 días hábiles.

                </Card.Text>

                <Card.Text className='mb-4'>

                  PASO 1

                  Ingresa a EYNCOR ERP
                  Desde allí podrás solicitar el certificado digital, te enviaremos instrucciones para poder realizar el pago con Tarjetas, transferencia, depósito o Paypal.

                </Card.Text>

                <Card.Text className='mb-4'>

                  PASO 2

                  Realizaremos la validación de IDENTIDAD de la persona.

                </Card.Text>

                <Card.Text>

                  PASO 3

                  Te enviaremos un link de descarga del certificado digital a tu email.

                </Card.Text>

                <div className='flex items-center justify-center'>
                  <img className='w-72' src={center} alt="" />

                </div>

              </Card.Body>
            </Card>

            {/* ------------------------------------ */}

          </div>

        </div>
      </section>

      <hr className='linea-cetificado w-[90%]' />

      <div className='clientes-certificados'>
        <Testimonial />
      </div>


    </div>


  );
};

export default Certificados;
