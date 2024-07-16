import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../components/ExampleCarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import produccion from "../assets/glp/producion.webp"
import relacion from "../assets/glp/relacion.webp"
import almacen from "../assets/glp/almacen.webp"
import informes from "../assets/glp/informes.webp"
import icon_salario from "../assets/icons/icon_salario.webp"
import icon_contabilidad from "../assets/icons/icon_contabilidad.webp"
import Accordion from 'react-bootstrap/Accordion';
import finanzas from "../assets/nosotros/finanza.webp"
import ventas from "../assets/nosotros/ventas.webp"
import compras from "../assets/nosotros/compras.webp"
import inventario from "../assets/nosotros/almacen.webp"
import solucion from "../assets/nosotros/solucion.webp"
import facturacion from "../assets/nosotros/facturacion.webp"
import Testimonial from "../components/Testimonial"
import banner_glp from "../assets/glp/banner_glp.webp"
import banner_envasado from "../assets/banners/banner_envasado.webp"
import Servicios from '../components/Servicios';
import ProductoFormulario from '../components/ProductoFormulario';


const Glp = () => {
    return (
        <section className='eyncor_productos lg:mt-[103px]'>
            <Carousel className='eyncor_erp_carrusel mb-7'>
                <Carousel.Item>
                    <img
                        className="banner_global d-block w-full h-[300px] lg:h-[600px] object-cover"
                        src={banner_glp}
                        alt="glp"
                    />
                    <Carousel.Caption className="carousel-caption-centered 
                    absolute top-[55%] left-[-150px] -translate-y-1/2 text-left pl-[200px]   
                    lg:absolute lg:top-[60%] lg:left-0 lg:-translate-y-1/2 lg:text-left ñg:pl-[200px]">
                        <div className='flex flex-col gap-4'>
                            <strong className='text-2xl  lg:text-5xl'>ERP PARA GLP Y EMBASADORAS DE GAS</strong>
                            <div className='hidden text-xl w-9/12  lg:text-xl lg:w-9/12 lg:block'>
                                <p>OTROS SOLO VENDEN SOFTWARE NOSOTROS TE AYUDAMOS A QUE TU EMPRESA CREZCA.</p>
                            </div>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img
                        className="banner_global d-block w-full h-[300px] lg:h-[600px] object-cover"
                        src={banner_envasado}
                        alt="glp"
                    />
                    <Carousel.Caption className="carousel-caption-centered 
                    absolute top-[55%] left-[-150px] -translate-y-1/2 text-left pl-[200px]   
                    lg:absolute lg:top-[60%] lg:left-0 lg:-translate-y-1/2 lg:text-left ñg:pl-[200px]">
                        <div className='flex flex-col gap-4'>
                            <strong className='text-2xl  lg:text-5xl'>ERP PARA GLP Y EMBASADORAS DE GAS</strong>
                            <div className='hidden text-xl w-9/12  lg:text-xl lg:w-9/12 lg:block'>
                                <p>OTROS SOLO VENDEN SOFTWARE NOSOTROS TE AYUDAMOS A QUE TU EMPRESA CREZCA.</p>
                            </div>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>



            </Carousel>

            <div className='eyncor_productos_estaciones mb-3'>
                <h2 className='
                eyncor_titulo 
                text-center
                text-xl
                lg:flex 
                lg:items-center 
                lg:justify-center
                mb-3 
                lg:text-5xl
                '>
                    Explora los módulos de GLP
                </h2>
                <h4 className='
                eyncor_subtitulo
                text-center
                text-base
                lg:flex 
                lg:items-center 
                lg:justify-center
                lg:text-base
                mb-10
                '>
                    Desde la innovación hasta la transparencia y la responsabilidad.
                </h4>
                <a href="https://www.eyncor.com/images/brochure/EYNCOR_ERP_GLP_BROCHURE.pdf" target="_blank" rel="noopener noreferrer">


                    <button className='brochure'>BROCHURE</button>

                </a>
            </div>

            <div className='grifos_acordeon block lg:flex lg:items-start lg:justify-center mb-20'>

                <div className='flex-1 lg:max-w-lg'>
                    <ProductoFormulario />
                </div>

                <Accordion className='p-5 lg:w-[700px]'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>PRODUCCIÓN</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    Registro de cliente preferenciales.
                                </li>
                                <li>
                                    Registro de orden de compra
                                </li>
                                <li>
                                    Autorización para límite de compra.
                                </li>
                                <li>
                                    Registro de pago adelantado.
                                </li>
                                <li>
                                    Autorizaciones de descuento por cantidad de compra.
                                </li>
                                <li>
                                    Control facturación en Tiempo Real.
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>COMERCIAL</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    Genera ticket, boletas, facturas, nota de crédito, notas de débito.
                                </li>
                                <li>
                                    Facturación Electrónica directa hacia SUNAT. Registrando DNI, placas odómetro en comprobantes.
                                </li>
                                <li>
                                    Facturación en lotes Una sola facturación rápida de comprobantes y en bloques.
                                </li>
                                <li>
                                    Emisión de notas de ventas y guías al contado y crédito para ser canjeados con boletas y/o facturas.
                                    Facturación con tarjeta de crédito.
                                </li>
                                <li>
                                    Múltiples formas de pago en un mismo comprobante con 1 o 2 tarjetas de crédito y efectivo al mismo tiempo.
                                    Permite ventas por pago adelantado y control detallado de los mismos.
                                </li>
                                <li>
                                    Permite ventas con órdenes de compra de clientes y control detallado de los mismos.
                                </li>
                                <li>
                                    Permite ventas por consumo interno, serafín y otras salidas.
                                </li>
                                <li>
                                    Permite generar recibos por ingreso a bóveda por ventas en efectivo.
                                </li>
                                <li>
                                    Control de precios para clientes preferenciales.
                                </li>
                                <li>
                                    Descuento por cantidad de límites de compra.
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>ALMACEN</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    Cuadre de caja por turno y día.
                                </li>
                                <li>
                                    Control de stock.
                                </li>
                                <li>
                                    Catálogo de productos.
                                </li>
                                <li>
                                    Control de kardex.
                                </li>
                                <li>
                                    Descuento por cantidad de límites de compra.
                                </li>
                                <li>
                                    Facturación con tarjeta de crédito.
                                </li>
                                <li>
                                    Control de precios para clientes preferenciales.
                                </li>
                                <li>
                                    Control de Inventario y más.
                                </li>
                                <li>
                                    Permite ventas por consumo interno, serafín y otras salidas.
                                </li>
                                <li>
                                    Permite generar recibos por ingreso a bóveda por ventas en efectivo.
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>CONTABILIDAD</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    Catálogo de Productos.
                                </li>
                                <li>
                                    Órdenes de Compra.
                                </li>
                                <li>
                                    Generacion de guías
                                </li>
                                <li>
                                    Control de Stock de producto.
                                </li>
                                <li>
                                    Guías en consignación.
                                </li>
                                <li>
                                    Generación de guías y notas de almacén.
                                </li>
                                <li>
                                    Confirmación de guías por traslado.
                                </li>
                                <li>
                                    Control de traspaso de productos.
                                </li>
                                <li>
                                    Registro de contometro por surtidores
                                </li>
                                <li>
                                    Registro de varillaje.
                                </li>
                                <li>
                                    Verificación previa al transporte de mercadería.
                                </li>
                                <li>
                                    Información de lote, serie y kit de productos.
                                </li>
                                <li>
                                    Verifica en línea el avance y diferencias del inventario.
                                </li>
                                <li>
                                    Asegura la existencia real de su stock utilizando las lecturas de hasta 3 conteos por inventario para una correcta toma de decisiones.
                                    Generación y/o autogeneración de documentos en las operaciones de recepción y despacho.
                                    Imprime comprobantes vía WiFi o Bluetooth.
                                </li>
                                <li>
                                    Cruzar los saldos de contabilidad con el saldo final del inventario.
                                </li>
                                <li>
                                    Corrobora la existencia real de su stock realizando hasta tres conteos.
                                </li>
                                <li>
                                    Generar gráficos estadísticos del estado de progreso del inventario
                                </li>
                                <li>
                                    Conocer la participación del personal en los conteos de su inventario en tiempo real.
                                </li>
                                <li>
                                    Emitir reportes de ubicación y diferencias de la mercadería.
                                </li>
                                <li>
                                    Generar el informe de toma de inventario general de existencias anual.
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header>  PLANILLAS </Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    Saldos de apertura Plantilla Excel.
                                </li>
                                <li>
                                    Maestro de sucursales.
                                </li>
                                <li>
                                    Maestro de productos.
                                </li>
                                <li>
                                    Maestro de sucursales.
                                </li>
                                <li>
                                    Plan de cuentas, auxiliares, orígenes, tipos de comprobantes.
                                    Cuentas de Bancos, tablas diversas, correlativos.
                                </li>
                                <li>
                                    Registro de comprobantes compras, ventas, honorarios y otros.
                                    Impresión de ventas.
                                </li>
                                <li>
                                    Operaciones Bancarias las diferentes operaciones Bancarias.
                                    Asientos manuales.
                                </li>
                                <li>
                                    Libros de inventarios, balances y estados financieros.
                                </li>
                                <li>
                                    Conciliaciones Bancarias plantilla de Excel y conciliación automática.
                                </li>
                                <li>
                                    Control de cuentas por cobrar / pagar.
                                </li>
                                <li>
                                    Almacén - compras - proveedores.
                                </li>
                                <li>
                                    Caja chica y Bancos Reportes diversos.
                                </li>
                                <li>
                                    Análisis de cuentas.
                                </li>
                                <li>
                                    Libros PLE compras y ventas.
                                </li>
                                <li>
                                    Libros PLE, diario y mayor electrónico SUNAT.
                                </li>
                                <li>
                                    Libros caja y Bancos.
                                </li>
                                <li>
                                    Generación de libros electrónicos obligatorios por SUNAT y PLE.
                                </li>
                                <li>
                                    Análisis de detalle de comprobantes.
                                </li>
                                <li>
                                    Agrupamientos diversos y resúmenes y minería de datos.
                                </li>
                                <li>
                                    Gráficos estadísticos diversas.
                                </li>
                                <li>
                                    Balances mensuales, anuales.
                                </li>
                                <li>
                                    Análisis de gastos mensual por centro de costo / gasto y cuenta además
                                    resumen del mismo como por ejemplo llantas que gastan un determinado vehículo,
                                    combustible ya que en el comprobante de provisión se registra el producto.
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                        <Accordion.Header>INFORMES GERENCIALES Y SUNAT</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    Registro de personal
                                </li>
                                <li>
                                    Calculo de planillas y comisiones
                                </li>
                                <li>
                                    Boleta de pago, Planillas, Vacaciones y Descuentos
                                </li>
                                <li>
                                    Generación del plame SUNAT
                                </li>
                                <li>
                                    Generación de archivo planillas Excel
                                </li>
                                <li>
                                    Ventana de ficha de personal donde se guarda la información del personal.
                                </li>
                                <li>
                                    Venta de control de documentos judiciales y otros por cada personal.
                                </li>
                                <li>
                                    Ventanas para configurar para llenar datos complementarios del personal.
                                </li>
                                <li>
                                    Ventana para configurar las AFPs.
                                </li>
                                <li>
                                    Ventana para generar contratos del empleado.
                                </li>
                                <li>
                                    Ventana de centro de costos.
                                </li>
                                <li>
                                    Ventana de conceptos de planilla para distribuir los ingresos, descuentos, aportes de acuerdo al tipo de contrato del empleado.
                                </li>
                                <li>
                                    Ventana de control de boleta de permiso.
                                </li>
                                <li>
                                    Ventana de mantenimiento de planilla para la creación, modificación, impresión de la planilla de pagos.
                                </li>
                                <li>
                                    La boleta de pago del empleado.
                                </li>
                                <li>
                                    El resumen de planilla, resumen de AFP.
                                </li>
                                <li>
                                    El listado de empleados con SNP.
                                </li>
                                <li>
                                    El listado de empleados con aporte a ESSALUD.
                                </li>
                                <li>
                                    El listado de empleados sin régimen de salud.
                                </li>
                                <li>
                                    La relación de empleados con cheque no tienen cuenta corriente.
                                </li>
                                <li>
                                    El listado para la impresión de cheques.
                                </li>
                                <li>
                                    El listado de empleados con descuentos judicial con la impresión de cheque de sus beneficiarios.
                                </li>

                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                        <Accordion.Header> AUDITORIA A TRANSACCIONES</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    Depreciación
                                </li>
                                <li>
                                    Control de bienes
                                </li>
                                <li>
                                    Registro de bienes
                                </li>
                                <li>
                                    Actualización de factores
                                </li>


                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

            </div>

            <div className='eyncor_productos_estaciones'>
                <h2 className='
                eyncor_titulo 
                text-2xl
                text-center
                lg:flex 
                lg:items-center 
                lg:justify-center
                mb-3 
                lg:text-5xl
                '>
                    Control total para GLP y estaciones de servicio
                </h2>
                <h4 className='
                eyncor_subtitulo
                text-center
                text-base
                lg:flex 
                lg:items-center 
                lg:justify-center
                lg:text-base
                mb-10
                '>
                    Descubre nuestro ERP especializado para GLP y estaciones de servicio, brindando control integral de calidad.
                </h4>
            </div>



            {/* Modulo_Card */}

            <div className='grifo_modulo_general mb-11'>
                <div className='modulo_contometro p-3  w-[360px] h-[190px]  lg:w-[490px] lg:h-[200px] rounded-lg cursor-pointer flex items-center justify-center gap-10'>
                    <section className='icono_contometro'>
                        <img src={produccion} className='w-16' alt="icon_grifo" />
                    </section>

                    <section className='contometro_texto w-80'>
                        <h3 className='text-xl text-white font-bold mb-2'>
                            PRODUCCIÓN
                        </h3>
                        <p className='text-white'>
                            Optimización integral de producción con EYNCOR ERP, control de pedidos,  liquidación de guías, inventario valorizado, mantenimiento y reportes estadísticos en PDF y Excel.
                        </p>
                    </section>
                </div>
                <div className='modulo_soporte p-3  w-[360px] h-[190px]  lg:w-[490px] lg:h-[200px] rounded-lg cursor-pointer flex items-center justify-center gap-10'>
                    <section className='icono_soporte'>
                        <img src={relacion} className='w-16' alt="icon_soporte" />
                    </section>

                    <section className='soporte_texto w-80'>
                        <h3 className='text-xl text-white font-bold mb-2'>
                            COMERCIAL
                        </h3>
                        <p className='text-white'>
                            Optimización de ventas, órdenes de pedido, facturación electrónica móvil, conexión directa con Sunat y Reniec, asignación de precios y cuotas, control de créditos, otros.
                        </p>
                    </section>
                </div>
                <div className='modulo_tanques p-3  w-[360px] h-[190px]   lg:w-[490px] lg:h-[200px] rounded-lg cursor-pointer flex items-center justify-center gap-10'>
                    <section className='icono_tanques'>
                        <img src={almacen} className='w-16' alt="icon_camionn" />
                    </section>

                    <section className='tanques_texto w-80'>
                        <h3 className='text-xl text-white font-bold mb-1'>
                            ALMACEN
                        </h3>
                        <p className='text-white'>
                            Control total de inventario, catálogo de productos, órdenes de compra, generación de guías, control de stock, verificación de traspasos, inventarios detallados, registros precisos en tiempo real.
                        </p>
                    </section>
                </div>
                <div className='modulo_actualizacion p-3  w-[360px] h-[190px]  lg:w-[490px] lg:h-[200px] rounded-lg cursor-pointer flex items-center justify-center gap-10'>
                    <section className='icono_actualizacion'>
                        <img src={icon_salario} className='w-16' alt="" />
                    </section>

                    <section className='actualizacion_texto w-80'>
                        <h3 className='text-xl text-white font-bold mb-2'>
                            CONTABILIDAD
                        </h3>
                        <p className='text-white'>
                            Gestión financiera completa, registro de compras, operaciones bancarias, asientos manuales, conciliaciones automáticas, libros obligatorios por SUNAT,  entre otros.
                        </p>
                    </section>
                </div>
                <div className='modulo_gestion p-3  w-[360px] h-[190px]  lg:w-[490px] lg:h-[200px] rounded-lg cursor-pointer flex items-center justify-center gap-10'>
                    <section className='icono_gestion'>
                        <img src={informes} className='w-16' alt="" />
                    </section>

                    <section className='gestion_texto w-80'>
                        <h3 className='text-xl text-white font-bold mb-2'>
                            PLANILLAS
                        </h3>
                        <p className='text-white'>
                            Registro y gestión integral del personal, cálculo de planillas, generación de archivos para SUNAT y Excel control de documentos.
                        </p>
                    </section>
                </div>
                <div className='modulo_contabilidad p-3  w-[360px] h-[190px]  lg:w-[490px] lg:h-[200px] rounded-lg cursor-pointer flex items-center justify-center gap-10'>
                    <section className='icono_contabilidad'>
                        <img src={icon_contabilidad} className='w-16' alt="" />
                    </section>

                    <section className='contabilidad_texto w-80'>
                        <h3 className='text-xl text-white font-bold mb-2'>
                            INFORMES
                        </h3>
                        <p className='text-white'>
                            Análisis exhaustivo, reportes diversos, análisis de gastos por puntos de venta, generación de libros electrónicos, e indicadores de gestión en formatos Excel y PDF.
                        </p>
                    </section>
                </div>
            </div>


            <Testimonial />


            <Servicios />





            <div className='eyncor_productos'>
                <h2 className='
                eyncor_titulo 
                text-2xl
                text-center
                lg:flex 
                lg:items-center 
                lg:justify-center
                mb-20 
                lg:text-5xl
                '>
                    Tenemos todo lo que necesitas
                </h2>
            </div>

            <div className='grifos_necesidades mb-40 lg:grid gap-4 place-items-center grid-cols-3'>
                <section className='eyncor_finanzas'>
                    <div className='flex items-center justify-center'>
                        <img src={finanzas} className=' w-80 rounded-lg lg:w-96' alt="finanzas" />

                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='eyncor_square w-80  h-28 lg:w-full lg:h-[140px] flex items-center justify-center flex-col'>
                            <h3 className='text-blue-700 text-xl font-bold gap-2'>
                                Finanzas
                            </h3>
                            <p>
                                Gestión Financiera Empresarial
                            </p>
                        </div>
                    </div>
                </section>
                <section className='eyncor_ventas'>
                    <div className='flex items-center justify-center'>
                        <img src={ventas} className='w-80 rounded-lg lg:w-96' alt="ventas" />
                    </div>
                    <div className='flex items-center justify-center'>

                        <div className='eyncor_square w-80  h-28 lg:w-full lg:h-[140px] flex items-center justify-center flex-col'>
                            <h3 className='text-blue-700 text-xl font-bold gap-2'>
                                Ventas
                            </h3>
                            <p>
                                Optimiza tus Ventas Empresariales
                            </p>
                        </div>
                    </div>
                </section>
                <section className='eyncor_compras'>
                    <div className='flex items-center justify-center'>

                        <img src={compras} className='w-80 rounded-lg lg:w-96' alt="compras" />
                    </div>
                    <div className='flex items-center justify-center'>

                        <div className='eyncor_square w-80  h-28 lg:w-full lg:h-[140px] flex items-center justify-center flex-col'>
                            <h3 className='text-blue-700 text-xl font-bold gap-2'>
                                Compras
                            </h3>
                            <p>
                                Eficiencia en Gestión de Compras
                            </p>
                        </div>
                    </div>
                </section>
                <section className='eyncor_inventario'>
                    <div className='flex items-center justify-center'>
                        <img src={inventario} className='w-80 rounded-lg lg:w-96' alt="inventario" />

                    </div>
                    <div className='flex items-center justify-center'>

                        <div className='eyncor_square w-80  h-28 lg:w-full lg:h-[140px] flex items-center justify-center flex-col'>
                            <h3 className='text-blue-700 text-xl font-bold gap-2'>
                                Inventario
                            </h3>
                            <p>
                                Control Total del Inventario Empresarial
                            </p>
                        </div>
                    </div>
                </section>
                <section className='eyncor_solucion'>
                    <div className=' flex items-center justify-center'>

                        <img src={solucion} className='w-80 rounded-lg lg:w-96' alt="solucion" />
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='eyncor_square w-80  h-28 lg:w-full lg:h-[140px] flex items-center justify-center flex-col'>
                            <h3 className='text-blue-700 text-xl font-bold gap-2'>
                                Soluciones
                            </h3>
                            <p>
                                Soluciones Móviles para tu Empresa
                            </p>
                        </div>

                    </div>
                </section>
                <section className='eyncor_facturacion'>
                    <div className='flex items-center justify-center'>
                        <img src={facturacion} className='w-80 rounded-lg lg:w-96' alt="factura" />

                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='eyncor_square w-80  h-28 lg:w-full lg:h-[140px] flex items-center justify-center flex-col'>
                            <h3 className='text-blue-700 text-xl font-bold gap-2'>
                                Facturación Electrónica
                            </h3>
                            <p className='text-center'>
                                Integración Eficiente de Facturación Electrónica
                            </p>
                        </div>

                    </div>
                </section>
            </div>



        </section>
    );
};

export default Glp;