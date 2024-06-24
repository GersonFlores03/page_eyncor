import React from 'react';
import anydesk from "../assets/icons/anydesk.webp"
import navegadores from "../assets/icons/navegadores.webp"
import comunicacion from "../assets/icons/comunicacion.webp"
import antivirus from "../assets/icons/antivirus.jpg"
import openlibre from "../assets/icons/open-libre.webp"
import notes from "../assets/icons/ever-wunder.webp"


const Utiles = () => {
    return (
        <div className='containerUtiles'>
            <section class="py-10 bg-gray-50 sm:py-16 lg:py-40">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">ASISTENCIA REMOTA</h2>
                    </div>

                    <div class="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        <div class="overflow-hidden bg-white rounded shadow">
                            <div class="p-8">
                                <div class="flex items-center">
                                    <img class="flex-shrink-0 w-24 h-auto" src={anydesk} alt="" />

                                    <div class="ml-5 mr-auto">
                                        <p class="text-xl font-semibold text-black">Anydesk y Más</p>
                                        <p class="mt-px text-sm text-gray-600">Software</p>
                                    </div>
                                </div>
                                <ul class="text-base leading-relaxed text-gray-600 mt-7" >
                                    <li>
                                        <a href="https://www.eyncor.com/aplicaciones/anydesk-6-1-4_eyncor.exe" target="_blank" rel="noopener noreferrer">
                                            Aplicacion AnyDesk Windows Descargar
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://anydesk.com/es/downloads" target="_blank" rel="noopener noreferrer">
                                            Link Web AnyDesk (AyudaRemota)
                                        </a>

                                    </li>
                                    <li>

                                        <a href="https://www.eyncor.com/aplicaciones/TeamViewerQS_v15.38.3.exe" target="_blank" rel="noopener noreferrer">
                                            Aplicacion TeamViewer Windows Descargar
                                        </a>


                                    </li>
                                    <li>

                                        <a href="https://www.teamviewer.com/es/descarga/" target="_blank" rel="noopener noreferrer">
                                            Link Web TeamViewer (Ayuda Remota)
                                        </a>


                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="overflow-hidden bg-white rounded shadow">
                            <div class="p-8">
                                <div class="flex items-center">
                                    <img class="flex-shrink-0 w-24 h-auto" src={navegadores} alt="" />
                                    <div class="ml-5 mr-auto">
                                        <p class="text-xl font-semibold text-black">
                                            Utiles Diversos</p>
                                        <p class="mt-px text-sm text-gray-600">Navegadores</p>
                                    </div>

                                </div>
                                <ul class="text-base leading-relaxed text-gray-600 mt-7" >
                                    <li>

                                        <a href="https://www.eyncor.com/aplicaciones/firefox/FirefoxSetup79.0b9_browser.exe" target="_blank" rel="noopener noreferrer">
                                            Firefox
                                        </a>

                                    </li>
                                    <li>

                                        <a href="https://www.eyncor.com/aplicaciones/firefox/FirefoxSetup79.0b5_developer.exe" target="_blank" rel="noopener noreferrer">
                                            Firefox Desarrollo
                                        </a>
                                    </li>
                                    <li>

                                        <a href="https://www.eyncor.com/aplicaciones/firefox/FirefoxDesactivarActualizar.reg" target="_blank" rel="noopener noreferrer">

                                            Firefox (Desactivar actualizaciones)

                                        </a>


                                    </li>
                                    <li>

                                        <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank" rel="noopener noreferrer">

                                            Google Chrome

                                        </a>


                                    </li>
                                    <li>
                                        <a href="https://www.google.com/intl/es-419/chrome/dev/" target="_blank" rel="noopener noreferrer">
                                            Google Chrome Developer
                                        </a>
                                    </li>


                                </ul>
                            </div>
                        </div>


                        <div class="overflow-hidden bg-white rounded shadow">
                            <div class="p-8">
                                <div class="flex items-center">
                                    <img class="flex-shrink-0 w-24 h-auto" src={navegadores} alt="" />
                                    <div class="ml-5 mr-auto">
                                        <p class="text-xl font-semibold text-black">Utiles Diversos</p>
                                        <p class="mt-px text-sm text-gray-600">Navegadores</p>
                                    </div>

                                </div>
                                <ul class="text-base leading-relaxed text-gray-600 mt-7" >
                                    <li>
                                        <a href="https://chromium.woolyss.com/download/es/" target="_blank" rel="noopener noreferrer">
                                            Google Chromium
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.microsoft.com/es-es/edge/" target="_blank" rel="noopener noreferrer">
                                            Microsfot Edge
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.opera.com/es-419" target="_blank" rel="noopener noreferrer">

                                            Opera navegador

                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://vivaldi.com/es/" target="_blank" rel="noopener noreferrer">
                                            Vivaldi navegador
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.mozilla.org/en-US/firefox/all/" target="_blank" rel="noopener noreferrer">
                                            Firefox todas las versiones
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>



                        <div class="overflow-hidden bg-white rounded shadow">
                            <div class="p-8">
                                <div class="flex items-center">
                                    <img class="flex-shrink-0 w-24 h-auto" src={comunicacion} alt="" />
                                    <div class="ml-5 mr-auto">
                                        <p class="text-xl font-semibold text-black">
                                            Asistencia via Chat </p>
                                        <p class="mt-px text-sm text-gray-600">Comunicación</p>
                                    </div>
                                    <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                                <ul class="text-base leading-relaxed text-gray-600 mt-7">
                                    <li>
                                        <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                                            WhatsApp
                                        </a>
                                    </li>

                                    <li>

                                        <a href="http://www.skype.com/es/download-skype/skype-for-computer/" target="_blank" rel="noopener noreferrer">
                                            Skype
                                        </a>

                                    </li>

                                </ul>

                            </div>
                        </div>

                        <div class="overflow-hidden bg-white rounded shadow">
                            <div class="p-8">
                                <div class="flex items-center">
                                    <img class="flex-shrink-0 w-24 h-auto" src={antivirus} alt="" />
                                    <div class="ml-5 mr-auto">
                                        <p class="text-xl font-semibold text-black">
                                            Antivirus Gratuito
                                        </p>
                                        <p class="mt-px text-sm text-gray-600">Seguridad</p>
                                    </div>
                                    <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>

                                <ul class="text-base leading-relaxed text-gray-600 mt-7" >
                                    <li>
                                        <a href="https://www.microsoft.com/es-es/download/details.aspx?id=5201" target="_blank" rel="noopener noreferrer">
                                            Antivirus Microsoft Gratis
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://free.avg.com/ww-es/free-antivirus-download" target="_blank" rel="noopener noreferrer">
                                            AVG Antivirus Gratuito
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.avira.com/es/avira-free-antivirus" target="_blank" rel="noopener noreferrer">
                                            Avira antivirus Gratuito
                                        </a>
                                    </li>
                                    <li>

                                        Comodoto Firewall y Antivirus

                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="overflow-hidden bg-white rounded shadow">
                            <div class="p-8">
                                <div class="flex items-center">
                                    <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/sketch-logo.png" alt="" />
                                    <div class="ml-5 mr-auto">
                                        <p class="text-xl font-semibold text-black">Utiles Diversos</p>
                                        <p class="mt-px text-sm text-gray-600">Integración</p>
                                    </div>

                                </div>
                                <ul class="text-base leading-relaxed text-gray-600 mt-7">
                                    <li>
                                        <a href="https://www.ccleaner.com/es-es/ccleaner/download/standard" target="_blank" rel="noopener noreferrer">

                                            Ccleaner (Limpiar PC de temporales que dejan paginas webs)

                                        </a>

                                    </li>
                                    <li>
                                        <a href="https://notepad-plus-plus.org/download/" target="_blank" rel="noopener noreferrer">
                                            Notepad+++ (Ver archivos txt Sunat - Para Windows)
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.7-zip.org/download.html" target="_blank" rel="noopener noreferrer">

                                            7Zip (Zipear archivos - Todos los sistemas operativos)
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.screenpresso.com/download/" target="_blank" rel="noopener noreferrer">

                                            Screenpresso (Recortes Capturar pantalla - Para Windows)
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div class="overflow-hidden bg-white rounded shadow">
                            <div class="p-8">
                                <div class="flex items-center">
                                    <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/sketch-logo.png" alt="" />
                                    <div class="ml-5 mr-auto">
                                        <p class="text-xl font-semibold text-black">Utiles Diversos</p>
                                        <p class="mt-px text-sm text-gray-600">Integración</p>
                                    </div>

                                </div>
                                <ul class="text-base leading-relaxed text-gray-600 mt-7">
                                    <li>
                                        <a href="https://app.prntscr.com/es/download.html" target="_blank" rel="noopener noreferrer">
                                            LightShop (Capturar pantalla - Para Windows)

                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://prnt.sc/" target="_blank" rel="noopener noreferrer">
                                            LightShop (Subir imagen y enviarlo via link - En Web)
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://snipboard.io/" target="_blank" rel="noopener noreferrer">

                                            SnipBoard (Capturar pantalla y enviarlo via link - En Web)

                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div class="overflow-hidden bg-white rounded shadow">
                            <div class="p-8">
                                <div class="flex items-center">
                                    <img class="flex-shrink-0 w-24 h-auto" src={notes} alt="" />
                                    <div class="ml-5 mr-auto">
                                        <p class="text-xl font-semibold text-black">
                                            Office Gratiuto
                                        </p>
                                        <p class="mt-px text-sm text-gray-600">Software</p>
                                    </div>

                                </div>

                                <ul class="text-base leading-relaxed text-gray-600 mt-7">

                                    <li>
                                        <a href="https://evernote.com/intl/es-latam/download/" target="_blank" rel="noopener noreferrer">

                                            Aplicacion Evernote (Agenda)
                                        </a>

                                    </li>
                                    <li>
                                        <a href="https://to-do.office.com/tasks/" target="_blank" rel="noopener noreferrer">
                                            Aplicacion Microsoft To Do (Tareas)
                                        </a>

                                    </li>
                                    <li>
                                        <a href="https://privnote.com/" target="_blank" rel="noopener noreferrer">
                                            Web PrivNote (crear mensajes destruibles)
                                        </a>
                                    </li>
                                    <li>


                                        <a href="https://www.transfernow.net/es/" target="_blank" rel="noopener noreferrer">
                                            Web TransferNow (enviar archivos hasta 4 gigas)
                                        </a>
                                    </li>

                                </ul>

                            </div>
                        </div>

                        <div class="overflow-hidden bg-white rounded shadow">
                            <div class="p-8">
                                <div class="flex items-center">
                                    <img class="flex-shrink-0 w-24 h-auto" src={notes} alt="" />
                                    <div class="ml-5 mr-auto">
                                        <p class="text-xl font-semibold text-black">
                                            Office Gratiuto
                                        </p>
                                        <p class="mt-px text-sm text-gray-600">Software</p>
                                    </div>

                                </div>

                                <ul class="text-base leading-relaxed text-gray-600 mt-7">

                                    <li>
                                        <a href="https://www.fromsmash.com/" target="_blank" rel="noopener noreferrer">
                                            Web Fromsmash (enviar archivos sin limite)
                                        </a>

                                    </li>
                                    <li>
                                        <a href="https://wetransfer.com/%22" target="_blank" rel="noopener noreferrer">
                                            Web Wetransfer (enviar archivos hasta 3 gigas)
                                        </a>

                                    </li>
                                    <li>
                                        <a href="https://prnt.sc/" target="_blank" rel="noopener noreferrer">
                                            Web Prnt.sc (capturar pantalla y enviarlo via link web)
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://snipboard.io/" target="_blank" rel="noopener noreferrer">
                                            Web SnipBoard (capturar pantalla y enviarlo via Link web)
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://get.opera.com/ftp/pub/opera/" target="_blank" rel="noopener noreferrer">
                                            Ftp OPpera
                                        </a>
                                    </li>

                                </ul>

                            </div>
                        </div>


                        <div class="overflow-hidden bg-white rounded shadow">
                            <div class="p-8">
                                <div class="flex items-center">
                                    <img class="flex-shrink-0 w-24 h-auto" src={openlibre} alt="" />
                                    <div class="ml-5 mr-auto">
                                        <p class="text-xl font-semibold text-black">
                                            Agenda Utiles
                                        </p>
                                        <p class="mt-px text-sm text-gray-600">Software</p>
                                    </div>
                                    <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>

                                <ul class="text-base leading-relaxed text-gray-600 mt-7">

                                    <li>
                                        <a href="http://www.openoffice.org/es/" target="_blank" rel="noopener noreferrer">
                                            Oppen Office

                                        </a>

                                    </li>
                                    <li>
                                        <a href="http://es.libreoffice.org/descarga/" target="_blank" rel="noopener noreferrer">
                                            Libre Office
                                        </a>
                                    </li>

                                </ul>

                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </div>
    );
};

export default Utiles;