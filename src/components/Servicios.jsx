import React from 'react';
import boton_actualizar from "../assets/grifo/actualizacion.jpg"
import costo_actualizar from "../assets/grifo/costos.jpg"
import controla_empresa from "../assets/grifo/controla_tu_empresa.jpg"
import adjunto from "../assets/grifo/adjunto.jpg"
import decidir from "../assets/grifo/decidir.jpg"
import empresa from "../assets/grifo/empresa.jpg"
import proteccion from "../assets/grifo/proteccion.jpg"
import software from "../assets/grifo/software.jpg"
import varios_doc from "../assets/grifo/varios_documentos.jpg"

const Servicios = () => {
    return (
        <section className="py-10 m:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="max-w-2xl mx-auto text-center mb-12">
                <h2 class="eyncor-titulo  font-bold leading-tight sm:text-4xl lg:text-2xl">
                    OTROS SOLO VENDEN SOFTWARE
                    "NOSOTROS TE AYUDAMOS A QUE TU EMPRESA CREZCA"
                </h2>

            </div>

            <div class="flex items-center justify-between flex-wrap gap-5 ">
                <div>
                    <img class="object-cover rounded-lg w-80" src={boton_actualizar} alt="item" />
                </div>

                <div class="hidden lg:block"></div>

                <div>
                    <img class="object-cover rounded-lg w-80" src={controla_empresa} alt="item" />

                </div>

                <div class="hidden lg:block"></div>

                <div>
                    <img class="object-cover rounded-lg w-80" src={costo_actualizar} alt="item" />

                </div>

                <div class="hidden lg:block"></div>

                <div>
                    <img class="object-cover rounded-lg w-80" src={adjunto} alt="item" />

                </div>

                <div class="hidden lg:block"></div>

                <div>
                    <img class="object-cover rounded-lg w-80" src={decidir} alt="item" />

                </div>

                <div class="hidden lg:block"></div>

                <div>
                    <img class="object-cover rounded-lg w-80" src={empresa} alt="item" />

                </div>

                <div class="hidden lg:block"></div>

                <div>
                    <img class="object-cover rounded-lg w-80" src={proteccion} alt="item" />

                </div>

                <div class="hidden lg:block"></div>

                <div>
                    <img class="object-cover rounded-lg w-80" src={software} alt="item" />

                </div>

                <div class="hidden lg:block"></div>

                <div>
                    <img class="object-cover rounded-lg w-80" src={varios_doc} alt="item" />

                </div>
            </div>
        </div>
    </section>

    );
};

export default Servicios;