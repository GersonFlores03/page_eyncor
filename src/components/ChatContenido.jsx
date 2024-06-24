import React, { useState } from 'react';
import ChatBot from "react-simple-chatbot"
import FormularioChat from './ChatBot/FormularioChat';
import ListaVentajas from './ChatBot/ListaVentajas';
import ListaAdaptable from './ChatBot/ListaAdaptable';
import ListaContable from './ChatBot/ListaContable';
import ListaGlp from './ChatBot/ListaGlp';
import ListaTienda from './ChatBot/ListaTienda';
import ListaTransporte from './ChatBot/ListaTransporte';
import bot from "../assets/icons/bot.webp"
import { Link } from 'react-router-dom';
import ButtonChat from './ChatBot/ButtonChat';
import ButtonChatG from "./ChatBot/ButtonChatG";
import ButtonChatT from "./ChatBot/ButtonChatT";
import ButtonChatTi from "./ChatBot/ButtonChatTi";
import ButtonChatC from "./ChatBot/ButtonChatC";
import ButtonChatA from "./ChatBot/ButtonChatA";
import {ThemeProvider} from "styled-components"

const ChatContenido = () => {

  const [showChat, setShowChat] = useState(false);

  const handleToggleChat = () => {
    setShowChat(!showChat);
  };


  const handleFormSubmit = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, user: 'user' },
      { text: 'Thank you for your submission!', user: 'bot' }
    ]);
  };


  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  const floatingButtonStyle = {
    position: 'fixed',
    bottom: '30px',
    left: "30px",
    zIndex: '1000',
    cursor: 'pointer',
  };

  const buttonStyle = {
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '80px',
    height: '80px',
  };

  // Estilos del contenedor del chat
  const chatContainerStyle = {
    position: 'fixed',
    bottom: '220px',
    left: "95px",
    zIndex: '1000',
    width: '300px',
    height: '400px',
  };

  const customBubbleStyle = {
    width: '800px', // Cambia este valor al tamaño deseado
  };


  const steps = [
    {
      id: '0',
      message: '¡Hola! Bienvenido a nuestro asistente virtual de Sistemas ERP!',
      trigger: '1',

    },

    {
      id: '1',
      message: '¿Cuál es tu nombre completo?',
      trigger: '2',
    },

    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hola {previousValue}, un gusto conocerte!',
      trigger: '4'
    },

    {
      id: '4',
      message: 'Para estar en contacto contigo, por favor completa este formulario',
      trigger: '5'
    },


    {
      id: '5',
      component: <FormularioChat />,
      waitAction: true,
      trigger: '6'
    },


    {
      id: '6',
      message: '¿En qué tipo de ERP estás interesado?',
      trigger: '7',
    },


    {
      id: '7',
      options: [

        { value: 'ERP grifos', label: "ERP GRIFOS", trigger: '8' },
        { value: 'ERP glp', label: "ERP GLP", trigger: '31' },
        { value: 'ERP tiendas', label: "ERP TIENDAS", trigger: '39' },
        { value: 'ERP para Contabilidad', label: "ERP CONTABILIDAD", trigger: '24' },
        { value: 'ERP Transporte', label: "ERP TRANSPORTE", trigger: '47' },
        { value: 'ERP Adaptable', label: "ERP ADAPTABLE", trigger: '16' },
      ],
    },

    


    {
      id: '8',
      message: '¿Cuáles son las funcionalidades clave que buscas en un ERP para tu grifo?',
      trigger: '9',
    },


    {
      id: '9',
      user: true,
      trigger: '10'
    },


    {
      id: '10',
      message: 'Algunas de las ventajas que tendrías de trabajar con EYNCOR ERP son:',
      trigger: '11',
    },


    {
      id: '11',
      component: <ListaVentajas />,
      trigger: '12'
    },

    {
      id: '12',
      message: '¿Lo que te acabo de mencionar se ajusta a tus necesidades? ¿O hay algo que nos está faltando?',
      trigger: '13'
    },

    {
      id: '13',
      user: true,
      trigger: '14'
    },

    {
      id: '14',
      message: 'Para poder ofrecerte una solución más detallada, te llevare al apartado de grifos',
      trigger: '15'
    },


    {
      id: '15',
      component: <ButtonChat/>,
      waitAction: true,
      trigger: '6'
    },



   
    //ERP ADPTABLE

    {
      id: '16',
      message: '¿Cuáles son las áreas específicas que deseas personalizar en nuestro ERP adaptable?',
      trigger: '17',
    },


    {
      id: '17',
      user: true,
      trigger: '18'
    },

    {
      id: '18',
      message: 'Algunas de las ventajas que tendrías de trabajar con EYNCOR ERP son:',
      trigger: '19',
    },


    {
      id: '19',
      component: <ListaAdaptable />,
      trigger: '20'
    },

    {
      id: '20',
      message: '¿Lo que te acabo de mencionar se ajusta a tus necesidades? ¿O hay algo que nos está faltando?',
      trigger: '21'
    },


    {
      id: '21',
      user: true,
      trigger: '22'
    },

    {
      id: '22',
      message: 'Para poder ofrecerte una solución más detallada, te llevare al apartado de ERP adaptable',
      trigger: '23'
    },

    {
      id: '23',
      component: <ButtonChatA/>,
      waitAction: true,
      trigger: '6'
    },



    //Contabilidad--------

    {
      id: '24',
      message: '¿Qué aspectos contables necesitas gestionar con nuestro ERP?',
      trigger: '25',
    },


    {
      id: '25',
      user: true,
      trigger: '26'
    },

    {
      id: '26',
      message: 'Algunas de las ventajas que tendrías de trabajar con EYNCOR ERP son:',
      trigger: '27',
    },


    {
      id: '27',
      component: <ListaContable />,
      trigger: '28'
    },

    {
      id: '28',
      message: '¿Lo que te acabo de mencionar se ajusta a tus necesidades? ¿O hay algo que nos está faltando?',
      trigger: '29'
    },
    

    {
      id: '29',
      message: 'Para poder ofrecerte una solución más detallada, te llevare al apartado de ERP Contabilidad',
      trigger: '30'
    },

    {
      id: '30',
      component: <ButtonChatC/>,
      waitAction: true,
      trigger: '6'
    },


    //GLP

    {
      id: '31',
      message: '¿Qué aspectos de la gestión de GLP te gustaría mejorar con nuestro ERP?',
      trigger: '32',
    },


    {
      id: '32',
      user: true,
      trigger: '33'
    },

    {
      id: '33',
      message: 'Algunas de las ventajas que tendrías de trabajar con EYNCOR ERP son:',
      trigger: '34',
    },



    {
      id: '34',
      component: <ListaGlp />,
      trigger: '35'
    },

    {
      id: '35',
      message: '¿Lo que te acabo de mencionar se ajusta a tus necesidades? ¿O hay algo que nos está faltando?',
      trigger: '36',
    },

    {
      id: '36',
      user: true,
      trigger: '37'
    },

    {
      id: '37',
      message: 'Para poder ofrecerte una solución más detallada, te llevare al apartado de ERP GLP',
      trigger: '38'
    },


    {
      id: '38',
      component: <ButtonChatG/>,
      waitAction: true,
      trigger: '6'
    },


   
    //ERP TIENDAS


    {
      id: '39',
      message: '¿Cuáles son las características esenciales que buscas en un ERP para tu tienda?',
      trigger: '40',
    },


    {
      id: '40',
      user: true,
      trigger: '41'
    },

    {
      id: '41',
      message: 'Algunas de las ventajas que tendrías de trabajar con EYNCOR ERP son:',
      trigger: '42',
    },



    {
      id: '42',
      component: <ListaTienda />,
      trigger: '43'
    },

    {
      id: '43',
      message: '¿Lo que te acabo de mencionar se ajusta a tus necesidades? ¿O hay algo que nos está faltando?',
      trigger: '44'
    },


    {
      id: '44',
      user: true,
      trigger: '45'
    },

    {
      id: '45',
      message: 'Para poder ofrecerte una solución más detallada, te llevare al apartado de ERP TIENDAS',
      trigger: '46'
    },

    {
      id: '46',
      component: <ButtonChatTi/>,
      waitAction: true,
      trigger: '6'
    },

    //Transporte



    {
      id: '47',
      message: '¿Qué aspectos de la gestión de transporte te gustaría mejorar con nuestro ERP?',
      trigger: '48',
    },


    {
      id: '48',
      user: true,
      trigger: '49'
    },

    {
      id: '49',
      message: 'Algunas de las ventajas que tendrías de trabajar con EYNCOR ERP son:',
      trigger: '50',
    },



    {
      id: '50',
      component: <ListaTransporte />,
      trigger: '51'
    },

    {
      id: '51',
      message: '¿Lo que te acabo de mencionar se ajusta a tus necesidades? ¿O hay algo que nos está faltando?',
      trigger: '52'
    },


    {
      id: '52',
      user: true,
      trigger: '53'
    },

    {
      id: '53',
      message: 'Para poder ofrecerte una solución más detallada, te llevare al apartado de ERP transporte',
      trigger: '54'
    },


    {
      id: '54',
      component: <ButtonChatT/>,
      waitAction: true,
      trigger: '6'
    },


    //Configurar parte final

  ];


  return (
    <div>


      <div>

        <div style={floatingButtonStyle} onClick={handleToggleChat}>
         
          <img style={buttonStyle} src={bot} alt="" />
        </div>


        {showChat && (
          <div style={chatContainerStyle}>
             <ThemeProvider theme={theme} >
              <ChatBot steps={steps} botBubbleComponent={customBubbleStyle} botAvatar={bot} />
             </ThemeProvider>
          </div>
        )}
      </div>



    </div>
  );
};

export default ChatContenido;