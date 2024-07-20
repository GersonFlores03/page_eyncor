import React from 'react';
import gasolina from "../assets/gasolina.webp";
import gas from "../assets/gas.webp";
import camion from "../assets/camion.webp";
import center from "../assets/center.webp";
import adaptable from "../assets/adaptable.webp";
import contabilidad from "../assets/contabilidad.webp";

const CardHover = () => {
    return (
        <>
            <div className='Card_Padre lg:flex lg:items-center lg:justify-center lg:flex-row mb-6 flex flex-col items-center'>
                <div class="container max-w-sm mx-2 my-2 lg:my-0">
                    <img src={gasolina} alt="Avatar" class="image w-full" />
                    <div class="middle">
                        <div class="contenido_overlay">
                            <h2 className='text-2xl font-bold mb-4'>ERP GRIFOS 100% WEB Y MÓVIL</h2>
                            <p className='mb-4'>
                                Con el ERP GRIFOS, puedes controlar todas tus estaciones de manera remota y en tiempo real, sin depender de servidores físicos. Sobre todo nuestra solución te brinda la flexibilidad de gestionar tus operaciones desde cualquier lugar, permitiéndote monitorear el rendimiento de cada estación y tomar decisiones informadas al instante.
                            </p>
                            <button className="btn_acceso px-4 py-2 rounded-lg duration-300">
                                SABER MÁS
                            </button>
                        </div>
                    </div>
                </div>
                <div class="container max-w-sm mx-2 my-2 lg:my-0">
                    <img src={gas} alt="Avatar" class="image w-full" />
                    <div class="middle">
                        <div class="contenido_overlay">
                            <h2 className='text-2xl font-bold mb-4'>ERP GLP 100% WEB Y MÓVIL</h2>
                            <p className='mb-4'>
                                Nuestro ERP GLP  es una herramienta integral diseñada para otorgar a las empresas un control total sobre la producción y distribución de este tipo de combustible, desde la gestión de la materia prima hasta las órdenes de compra.
                            </p>
                            <button className="btn_acceso px-4 py-2 rounded-lg duration-300">
                                SABER MÁS
                            </button>
                        </div>
                    </div>
                </div>
                <div class="container max-w-sm mx-2 my-2 lg:my-0">
                    <img src={camion} alt="Avatar" class="image w-full" />
                    <div class="middle">
                        <div class="contenido_overlay">
                            <h2 className='text-2xl font-bold mb-4'>ERP TRANSPORTE 100% WEB Y MÓVIL</h2>
                            <p className='mb-4'>
                                Con nuestro ERP para transporte, puedes coordinar eficientemente todas las actividades relacionadas con la logística, desde la planificación de rutas y la asignación de recursos hasta el seguimiento en tiempo real de las flotas.
                            </p>
                            <button className="btn_acceso px-4 py-2 rounded-lg duration-300">
                                SABER MÁS
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='Card_Padre flex flex-col items-center lg:flex lg:items-center lg:justify-center lg:flex-row mb-6'>
                <div class="container max-w-sm mx-2 my-2 lg:my-0">
                    <img src={center} alt="Avatar" class="image w-full" />
                    <div class="middle">
                        <div class="contenido_overlay">
                            <h2 className='text-2xl font-bold mb-4'>ERP TIENDAS 100% WEB y MÓVIL</h2>
                            <p className='mb-4'>
                                El ERP para tiendas es una solución integral diseñada para ayudar a las empresas minoristas a repotenciar su productividad al mejorar sus canales de venta desde cualquier lugar. Este sistema ofrece una amplia gama de funcionalidades para optimizar la gestión de los procesos comerciales, desde la administración del inventario hasta la atención al cliente.
                            </p>
                            <button className="btn_acceso px-4 py-2 rounded-lg duration-300">
                                SABER MÁS
                            </button>
                        </div>
                    </div>
                </div>
                <div class="container max-w-sm mx-2 my-2 lg:my-0">
                    <img src={adaptable} alt="Avatar" class="image w-full" />
                    <div class="middle">
                        <div class="contenido_overlay">
                            <h2 className='text-2xl font-bold mb-4'>ERP ADAPTABLE 100% WEB Y MÓVIL</h2>
                            <p className='mb-4'>
                                Nuestro ERP adaptable es la solución perfecta para impulsar la eficiencia y flexibilidad de tu empresa. Diseñado para adaptarse a tus necesidades cambiantes, nuestro sistema te permite personalizar fácilmente flujos de trabajo, formularios, informes y más, para que se ajusten perfectamente a los procesos específicos de tu negocio.
                            </p>
                            <button className="btn_acceso px-4 py-2 rounded-lg duration-300">
                                SABER MÁS
                            </button>
                        </div>
                    </div>
                </div>
                <div class="container max-w-sm mx-2 my-2 lg:my-0">
                    <img src={contabilidad} alt="Avatar" class="image w-full" />
                    <div class="middle">
                        <div class="contenido_overlay">
                            <h2 className='text-2xl font-bold mb-4'>ERP CONTABILIDAD 100% WEB Y MÓVIL</h2>
                            <p className='mb-4'>
                                Nuestro ERP de Contabilidad centraliza todas las operaciones financieras en una plataforma fácil de usar, lo que te permite realizar tareas como la contabilidad general, la gestión de activos fijos, la elaboración de informes financieros y mucho más, todo desde un solo lugar.
                            </p>
                            <button className="btn_acceso px-4 py-2 rounded-lg duration-300">
                                SABER MÁS
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default CardHover;