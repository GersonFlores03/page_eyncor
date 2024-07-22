import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Utiles from './pages/Utiles'
import Cliente from './pages/Cliente'
import Nosotros from './pages/Nosotros'
import Home from './pages/Home'
import Footer from './components/Footer'
import Grifos from './pages/Grifos'
import Glp from './pages/Glp'
import Vision from './pages/Vision'
import ScrollTop from "./components/ScrollTop"
import Mision from "./pages/Mision"
import Impacto from "./pages/Impacto"
import Exito from "./pages/Exito"
import Confianza from "./pages/Confianza"
import Innovacion from "./pages/Innovacion"
import Tiendas from "./pages/Tiendas"
import Adaptable from "./pages/Adaptable"
import Transporte from "./pages/Transporte"
import Contabilidad from "./pages/Contabilidad"
import Contacto from "./pages/Contacto"
import social from "./assets/social.png"
import { FloatingWhatsApp } from "react-floating-whatsapp"
import Certificados from "./pages/Certificados"
import { ProtectedRoute } from "./route"
import HomeCertificados from "./pages/HomeCertificados"
import CallCenter from "./pages/CallCenter"
import Oxigeno from "./pages/Oxigeno"
import Restaurante from "./pages/Restaurante"
import Talleres from "./pages/Talleres"
import Ccomercio from "./pages/Ccomercio"
import Colegios from "./pages/Colegios"
import ChatContenido from "../src/components/ChatContenido"
import AccesoClientes from "./pages/AccesoClientes"
import NotFound from "./pages/NotFound"
import Modal from "./components/Modal"
import { useEffect, useState } from "react"


function App() {


  return (
    <div>

      <ChatContenido />



      <FloatingWhatsApp
        phoneNumber="+51948774628"
        accountName="EYNCOR ERP"
        statusMessage="Disponible para chat"
        avatar={social}
        chatMessage="¡Hola! ¿En qué ERP estas interesado?"
        placeholder="Escribe un mensaje"

      />


      <nav>
        <Navbar />
      </nav>
      <main>
        <ScrollTop />
        <Routes>
          {/*-----------Rutas de nosotros general---------- */}
          <Route path='/' element={<Home />} />
          <Route path="/certificados" element={<Certificados />} />
          <Route path="/precios" element={<HomeCertificados />} />
          <Route path="/utiles" element={<Utiles />} />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/mision" element={<Mision />} />
          <Route path="/impacto" element={<Impacto />} />
          <Route path="/confianza" element={<Confianza />} />
          <Route path="/exito" element={<Exito />} />
          <Route path="/innovacion" element={<Innovacion />} />
          <Route path="/acceso-clientes" element={<AccesoClientes />} />
          {/*-----------Rutas de nosotros general---------- */}

          {/*-----------Rutas de productos general---------- */}
          <Route path="/grifo" element={<Grifos />} />
          <Route path="/glp" element={<Glp />} />
          <Route path="/tienda" element={<Tiendas />} />
          <Route path="/oxigeno" element={<Oxigeno />} />
          <Route path="/adaptable" element={<Adaptable />} />
          <Route path="/restaurantes" element={<Restaurante />} />
          <Route path="/transporte" element={<Transporte />} />
          <Route path="/contabilidad" element={<Contabilidad />} />
          <Route path="/callcenter" element={<CallCenter />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/utiles" element={<Utiles />} />
          <Route path="/talleres" element={<Talleres />} />
          <Route path="/camara-comercio" element={<Ccomercio />} />
          <Route path="/colegios-profesionales" element={<Colegios />} />

          {/*-----------Rutas para certificados---------- */}


          {/*-----------Rutas de productos general---------- */}


          {
            /*
            -----------Rutas Protegidas---------- 
            
            
               <Route element={<ProtectedRoute />}>
              <Route path="/orden" element={<OrderForms />} />
              <Route path="/detalle" element={<DetalleOrden />} />
            </Route>
            
            */
          }

          <Route path="*" element={<NotFound />} />

          </Routes>



      </main>

      {/* Modal para publicidad de la aplicacion movil*/}
      
      <Modal />


      <footer>
        <Footer />
      </footer>


    </div>
  )
}

export default App
