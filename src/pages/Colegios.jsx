import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../components/ExampleCarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon_apoyo from "../assets/tienda/apoyo.webp"
import icon_logistico from "../assets/tienda/logistica.webp"
import icon_optimizacion from "../assets/tienda/optimizacion.webp"
import icon_actualizacion from "../assets/icons/icon_actualizacion.webp"
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
import boton_actualizar from "../assets/grifo/actualizacion.jpg"
import costo_actualizar from "../assets/grifo/costos.jpg"
import controla_empresa from "../assets/grifo/controla_tu_empresa.jpg"
import adjunto from "../assets/grifo/adjunto.jpg"
import decidir from "../assets/grifo/decidir.jpg"
import empresa from "../assets/grifo/empresa.jpg"
import proteccion from "../assets/grifo/proteccion.jpg"
import software from "../assets/grifo/software.jpg"
import varios_doc from "../assets/grifo/varios_documentos.jpg"
import colegios from "../assets/banners/colegio.webp"
import { Link } from 'react-router-dom';
import ProductoFormulario from '../components/ProductoFormulario';

const Colegios = () => {
    return (
        <section className='eyncor_productos lg:mt-[103px]'>
            <Carousel className='eyncor_erp_carrusel mb-7'>
                <Carousel.Item>
                    <img
                        className="banner_global -block w-full h-[300px] lg:h-[600px] object-cover"
                        src={colegios}
                        alt="tienda"
                    />
                    <Carousel.Caption className="carousel-caption-centered 
                absolute top-[55%] left-[-150px] -translate-y-1/2 text-left pl-[200px]   
                lg:absolute lg:top-[60%] lg:left-0 lg:-translate-y-1/2 lg:text-left ñg:pl-[200px]">
                        <div className='flex flex-col gap-4'>
                            <strong className='text-2xl  lg:text-5xl'>ERP PARA COLEGIOS PROFESIONALES </strong>
                            <div className='hidden text-xl w-9/12  lg:text-xl lg:w-9/12 lg:block'>
                                <p>Descubre cómo un ERP puede impulsar el crecimiento de tu negocio con tácticas probadas y consejos prácticos que te ayudarán a alcanzar tus metas empresariales.</p>
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
                    Explora los módulos de camara de comercio ERP
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
               
                    <Link to={"/contacto"} >

                        <button className="demo_eyncor top-0 right-0" >
                            SOLICITA UNA DEMO
                        </button>

                    </Link>

               
            </div>

            <div className='grifos_acordeon flex items-start justify-center lg:items-start lg:justify-around mb-20'>

                   
              <div className='flex-1 lg:max-w-lg'>
                    <ProductoFormulario />
                </div>
 
                <Accordion className='w-80 lg:w-[700px]'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>MODULO ADMINISTRATIVO COMERCIAL</Accordion.Header>
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
                        <Accordion.Header> PUNTO DE VENTA - PLAYA</Accordion.Header>
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
                                    Múltiples formas de pago en un mismo comprobante (con 1 o 2 tarjetas de crédito y efectivo al mismo tiempo).
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
                        <Accordion.Header>MODULO PUNTO VENTA MARKET</Accordion.Header>
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
                        <Accordion.Header> LOGÍSTICA ALMACÉN </Accordion.Header>
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
                        <Accordion.Header> CONTABILIDAD EN TIEMPO REAL </Accordion.Header>
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
                        <Accordion.Header> MODULO PLANILLAS</Accordion.Header>
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
                        <Accordion.Header> MODULO PLANILLAS</Accordion.Header>
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

                    <Accordion.Item eventKey="7">
                        <Accordion.Header> REPORTES EMPRESARIALES </Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    Comprobante de pago denominado FACTURA, emitido a través del sistema
                                    de emisión electrónica desarrollado desde los sistemas del contribuyente.
                                </li>
                                <li>
                                    Control en tiempo real de stocks en estaciones.
                                </li>
                                <li>
                                    Reportes diversos
                                </li>
                                <li>
                                    Estados financieros
                                </li>
                                <li>
                                    Minería de datos
                                </li>
                                <li>
                                    Gráficos estadísticos
                                </li>
                                <li>
                                    Dashboard ejecutivo
                                </li>
                                <li>
                                    Reportes de Stock
                                </li>
                                <li>
                                    Control de Kardex.
                                </li>
                                <li>
                                    Reportes de saldos.
                                </li>
                                <li>
                                    Kardex por productos.
                                </li>
                                <li>
                                    Inventarios iniciales.
                                </li>
                                <li>
                                    Reportes de producto vendidos
                                </li>
                                <li>
                                    Reporte de compras de clientes
                                </li>
                                <li>
                                    Reportes de ventas por vendedores.
                                </li>
                                <li>
                                    Reporte de clientes al crédito
                                </li>
                                <li>
                                    Reportes productos diversos.
                                </li>
                                <li>
                                    Reporte gerenciales con diagramas
                                </li>
                                <li>
                                    Reporte de cuentas por cobrar con fechas de vencimientos y alertas.
                                </li>
                                <li>
                                    Reportes Personalizados en Base a Necesidad del Cliente
                                </li>
                                <li>
                                    Ventana de consultas de resúmenes de planilla por fecha.
                                </li>
                                <li>
                                    Reporte de relación de empleados.
                                </li>
                                <li>
                                    Reporte de relación de onomástico de empleados.
                                </li>
                                <li>
                                    Reporte de historial de boletas por trabajador o planilla.
                                </li>
                                <li>
                                    Reporte de listado de planillas.
                                </li>
                                <li>
                                    Ventana de exportación de datos al PDT 601 PLAME.
                                </li>
                                <li>
                                    Ventana de exportación de datos al archivo abono para empleados con cuenta corriente distribuido por centro de costo.
                                </li>
                                <li>
                                    Reporte de empleados con cuenta corriente del archivo abono.
                                </li>
                                <li>
                                    Ventana de exportación de datos al AFP NET para empleados que estén afiliados a una AFP. Se genera un archivo de Excel.
                                </li>



                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="8">
                        <Accordion.Header>AUDITORIA A TRANSACCIONES</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    Gestiona los permisos a cada usuario en el sistema, el Administrador tiene
                                    la capacidad de indicar por cada usuario sus permisos y capacidades en los
                                    diversos formularios del sistema. Esta capacidad además de otorgar seguridad
                                    a la información, permite definir las responsabilidades y funciones de cada
                                    usuario en el uso del sistema.
                                </li>
                                <li>
                                    Algunas de las capacidades que se pueden definir por usuario son:
                                    Activar o Bloquear la modificación de información de días anteriores,
                                    poder o no poder vender productos con stock negativo, activar o bloquear
                                    la modificación de los precios de venta al atender al público.
                                </li>
                                <li>
                                    EYNCOR ERP cuenta con la herramienta de cierre de día, permite bloquear la
                                    información en los días cerrados y mes contable cerrado declarado a SUNAT
                                    evitando que algunos de los usuarios altere la información del sistema.
                                </li>
                                <li>
                                    Crea automáticamente una copia de seguridad en modo automático diariamente
                                    por medidas de seguridad.
                                </li>
                                <li>
                                    EYNCOR ERP le permitirá a través de su usuario y en tiempo real tener integrada
                                    todas las oficinas de las empresas sin importar la distancia que las separa;
                                    además sus clientes pueden sacar créditos y canjear puntos y acumular en cualquier
                                    tipo de información, esta herramienta le dará el poder de Gerenciar a distancias,
                                    pensado para Empresarios que están mayor parte del tiempo fuera de su Empresas,
                                    usando una computadora portátil o un dispositivo móvil puede acceder a la información
                                    de su empresa.
                                </li>
                                <li>
                                    EYNCOR ERP al ser un software vía web NO existirán caídas de sistema por lo cual
                                    garantizamos él % 99 de operatividad del año.
                                </li>
                                <li>
                                    EYNCOR ERP los capacita de forma personalizada realizando casos reales según
                                    la actividad de la empresa ya que cuenta con personal especializados en la gestión
                                    computarizada de servicios, con amplia experiencia.
                                </li>
                                <li>
                                    Con EYNCOR ERP si no existiera internet existe un software de contingencia para que
                                    pueda seguir facturando luego que se restablece serán enviados a los servidores de Internet.
                                </li>
                                <li>
                                    Todas las opciones y/o operaciones que realizan los usuarios cuentan con Auditoria a
                                    los acceso, actualización, modificación, eliminación, consulta y selección de opción a
                                    todas las transacciones que se realizan en EYNCOR.
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
            lg:text-4xl
            '>
                    POTENCIA TU OPERACIÓN LOGÍSTICA CON NUESTRAS SOLUCIONES ERP
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
                    Descubre cómo un ERP puede impulsar el crecimiento de tu negocio con tácticas probadas y consejos prácticos que te ayudarán a alcanzar tus metas empresariales.
                </h4>
            </div>

            {/* Modulo_Card */}

            <div className='grifo_modulo_general mb-11'>
                <div className='modulo_contometro p-3  w-[360px] h-[190px]  lg:w-[490px] lg:h-[200px] rounded-lg cursor-pointer flex items-center justify-center gap-10'>
                    <section className='icono_contometro'>
                        <img src={icon_apoyo} className='w-16' alt="icon_grifo" />
                    </section>

                    <section className='contometro_texto w-80'>
                        <h3 className='text-xl text-white font-bold mb-2'>
                            Facturación electrónica
                        </h3>
                        <p className='text-white'>
                            Simplifica procesos, cumple requisitos legales y crece sin limites.
                        </p>
                    </section>
                </div>
                <div className='modulo_soporte p-3  w-[360px] h-[190px]  lg:w-[490px] lg:h-[200px] rounded-lg cursor-pointer flex items-center justify-center gap-10'>
                    <section className='icono_soporte'>
                        <img src={icon_logistico} className='w-16' alt="icon_soporte" />
                    </section>

                    <section className='soporte_texto w-80'>
                        <h3 className='text-xl text-white font-bold mb-2'>
                            Soporte gratis 24/7
                        </h3>
                        <p className='text-white'>
                            Garantizamos un acompañamiento continuo para tu tranquilidad.
                        </p>
                    </section>
                </div>
                <div className='modulo_tanques p-3  w-[360px] h-[190px]  lg:w-[490px] lg:h-[200px] rounded-lg cursor-pointer flex items-center justify-center gap-10'>
                    <section className='icono_tanques'>
                        <img src={icon_optimizacion} className='w-16' alt="icon_camionn" />
                    </section>

                    <section className='tanques_texto w-80'>
                        <h3 className='text-xl text-white font-bold mb-2'>
                            Logistica / Almacen
                        </h3>
                        <p className='text-white'>
                            Optimiza la gestión logística con control en tiempo real
                        </p>
                    </section>
                </div>
                <div className='modulo_actualizacion p-3  w-[360px] h-[190px]  lg:w-[490px] lg:h-[200px] rounded-lg cursor-pointer flex items-center justify-center gap-10'>
                    <section className='icono_actualizacion'>
                        <img src={icon_actualizacion} className='w-16' alt="" />
                    </section>

                    <section className='actualizacion_texto w-80'>
                        <h3 className='text-xl text-white font-bold mb-2'>
                            Actualizaciones personalizadas
                        </h3>
                        <p className='text-white'>
                            Optimiza la gestión logística con control en tiempo real
                        </p>
                    </section>
                </div>
                <div className='modulo_gestion p-3  w-[360px] h-[190px]  lg:w-[490px] lg:h-[200px] rounded-lg cursor-pointer flex items-center justify-center gap-10'>
                    <section className='icono_gestion'>
                        <img src={icon_salario} className='w-16' alt="" />
                    </section>

                    <section className='gestion_texto w-80'>
                        <h3 className='text-xl text-white font-bold mb-2'>
                            Optimización de creditos
                        </h3>
                        <p className='text-white'>
                            Alcanza una eficiente optimización en el control de créditos.
                        </p>
                    </section>
                </div>
                <div className='modulo_contabilidad p-3  w-[360px] h-[190px]  lg:w-[490px] lg:h-[200px] rounded-lg cursor-pointer flex items-center justify-center gap-10'>
                    <section className='icono_contabilidad'>
                        <img src={icon_contabilidad} className='w-16' alt="" />
                    </section>

                    <section className='contabilidad_texto w-80'>
                        <h3 className='text-xl text-white font-bold mb-2'>
                            Contabilidad en tiempo real
                        </h3>
                        <p className='text-white'>
                            Genera Kardex valorizados, asientos automáticos.
                        </p>
                    </section>
                </div>
            </div>


            <Testimonial />


            <section class="py-10 m:py-16 lg:py-24">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="max-w-2xl mx-auto text-center mb-6">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-2xl">OTROS SOLO VENDEN SOFTWARE
                            "NOSOTROS TE AYUDAMOS A QUE TU EMPRESA CREZCA"</h2>

                    </div>

                    <div class="flex items-center justify-between flex-wrap gap-1">
                        <div>
                            <img class="object-cover rounded-lg w-96" src={boton_actualizar} alt="" />
                        </div>

                        <div class="hidden lg:block"></div>

                        <div>
                            <img class="object-cover rounded-lg w-96" src={controla_empresa} alt="" />

                        </div>

                        <div class="hidden lg:block"></div>

                        <div>
                            <img class="object-cover rounded-lg w-96" src={costo_actualizar} alt="" />

                        </div>

                        <div class="hidden lg:block"></div>

                        <div>
                            <img class="object-cover rounded-lg w-96" src={adjunto} alt="" />

                        </div>

                        <div class="hidden lg:block"></div>

                        <div>
                            <img class="object-cover rounded-lg w-96" src={decidir} alt="" />

                        </div>

                        <div class="hidden lg:block"></div>

                        <div>
                            <img class="object-cover rounded-lg w-96" src={empresa} alt="" />

                        </div>

                        <div class="hidden lg:block"></div>

                        <div>
                            <img class="object-cover rounded-lg w-96" src={proteccion} alt="" />

                        </div>

                        <div class="hidden lg:block"></div>

                        <div>
                            <img class="object-cover rounded-lg w-96" src={software} alt="" />

                        </div>

                        <div class="hidden lg:block"></div>

                        <div>
                            <img class="object-cover rounded-lg w-96" src={varios_doc} alt="" />

                        </div>
                    </div>
                </div>
            </section>



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

export default Colegios;