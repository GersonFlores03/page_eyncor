import React, { useState } from 'react';
import ChatBot from "react-simple-chatbot"
import FormularioChat from './ChatBot/FormularioChat';
import ListaVentajas from './ChatBot/ListaVentajas';
import ListaAdaptable from './ChatBot/ListaAdaptable';
import ListaContable from './ChatBot/ListaContable';
import ListaGlp from './ChatBot/ListaGlp';
import ListaTienda from './ChatBot/ListaTienda';
import ListaTransporte from './ChatBot/ListaTransporte';
import { ThemeProvider } from 'styled-components';

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
    backgroundColor: '#0084ff',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    fontSize: '20px',
  };

  // Estilos del contenedor del chat
  const chatContainerStyle = {
    position: 'fixed',
    bottom: '200px',
    left: "95px",
    zIndex: '1000',
    width: '300px',
    height: '400px',
  };


  const steps = [
    {
      id: '0',
      message: '¡Hola! Bienvenido a nuestro asistente virtual de Sistemas ERP!',
      trigger: '1',

    },

    {
      id: '1',
      message: '¿Cuál es tu nombre?',
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
      message: '¿En qué tipo de ERP estás interesado?',
      trigger: '5',
    },


    {
      id: '5',
      options: [

        { value: 'ERP grifos', label: "ERP GRIFOS", trigger: '6' },
        { value: 'ERP glp', label: "ERP GLP", trigger: '30' },
        { value: 'ERP tiendas', label: "ERP TIENDAS", trigger: '38' },
        { value: 'ERP para Contabilidad', label: "ERP CONTABILIDAD", trigger: '23' },
        { value: 'ERP Transporte', label: "ERP TRANSPORTE", trigger: '46' },
        { value: 'ERP Adaptable', label: "ERP ADAPTABLE", trigger: '15' },
      ],
    },


    {
      id: '6',
      message: '¿Cuáles son las funcionalidades clave que buscas en un ERP para tu grifo?',
      trigger: '7',
    },


    {
      id: '7',
      user: true,
      trigger: '8'
    },


    {
      id: '8',
      message: 'Algunas de las ventajas que tendrías de trabajar con EYNCOR ERP son:',
      trigger: '9',
    },


    {
      id: '9',
      component: <ListaVentajas />,
      trigger: '10'
    },

    {
      id: '10',
      message: '¿Lo que te acabo de mencionar se ajusta a tus necesidades? ¿O hay algo que nos está faltando?',
      trigger: '11'
    },

    {
      id: '11',
      user: true,
      trigger: '12'
    },

    {
      id: '12',
      message: 'Para poder ofrecerte una solución más detallada, por favor, facilítanos tus datos de contacto',
      trigger: '13'
    },


    {
      id: '13',
      component: <FormularioChat />,
      trigger: '14'
    },

    {
      id: '14',
      message: 'Gracias por confiar en nosotros al completar el formulario. Nos pondremos en contacto con usted a la brevedad.',
      end: true
    },


    //ERP ADPTABLE

    {
      id: '15',
      message: '¿Cuáles son las áreas específicas que deseas personalizar en nuestro ERP adaptable?',
      trigger: '16',
    },


    {
      id: '16',
      user: true,
      trigger: '17'
    },

    {
      id: '17',
      message: 'Algunas de las ventajas que tendrías de trabajar con EYNCOR ERP son:',
      trigger: '18',
    },


    {
      id: '18',
      component: <ListaAdaptable />,
      trigger: '19'
    },

    {
      id: '19',
      message: '¿Lo que te acabo de mencionar se ajusta a tus necesidades? ¿O hay algo que nos está faltando?',
      trigger: '20'
    },


    {
      id: '20',
      user: true,
      trigger: '21'
    },

    {
      id: '21',
      message: 'Para poder ofrecerte una solución más detallada, por favor, facilítanos tus datos de contacto',
      trigger: '22'
    },


    {
      id: '22',
      component: <FormularioChat />,
      end: true
    },



    //Contabilidad--------

    {
      id: '23',
      message: '¿Qué aspectos contables necesitas gestionar con nuestro ERP?',
      trigger: '24',
    },


    {
      id: '24',
      user: true,
      trigger: '25'
    },

    {
      id: '25',
      message: 'Algunas de las ventajas que tendrías de trabajar con EYNCOR ERP son:',
      trigger: '26',
    },


    {
      id: '26',
      component: <ListaContable />,
      trigger: '27'
    },


    {
      id: '27',
      user: true,
      trigger: '28'
    },

    {
      id: '28',
      message: 'Para poder ofrecerte una solución más detallada, por favor, facilítanos tus datos de contacto',
      trigger: '29'
    },


    {
      id: '29',
      component: <FormularioChat />,
      end: true
    },


    //GLP

    {
      id: '30',
      message: '¿Qué aspectos de la gestión de GLP te gustaría mejorar con nuestro ERP?',
      trigger: '31',
    },


    {
      id: '31',
      user: true,
      trigger: '32'
    },

    {
      id: '32',
      message: 'Algunas de las ventajas que tendrías de trabajar con EYNCOR ERP son:',
      trigger: '33',
    },



    {
      id: '33',
      component: <ListaGlp />,
      trigger: '34'
    },

    {
      id: '34',
      message: '¿Lo que te acabo de mencionar se ajusta a tus necesidades? ¿O hay algo que nos está faltando?',
      trigger: '35',
    },

    {
      id: '35',
      user: true,
      trigger: '36'
    },

    {
      id: '36',
      message: 'Para poder ofrecerte una solución más detallada, por favor, facilítanos tus datos de contacto.',
      trigger: '37'
    },


    {
      id: '37',
      component: <FormularioChat />,
      end: true
    },


    //ERP TIENDAS


    {
      id: '38',
      message: '¿Cuáles son las características esenciales que buscas en un ERP para tu tienda?',
      trigger: '39',
    },


    {
      id: '39',
      user: true,
      trigger: '40'
    },

    {
      id: '40',
      message: 'Algunas de las ventajas que tendrías de trabajar con EYNCOR ERP son:',
      trigger: '41',
    },



    {
      id: '41',
      component: <ListaTienda />,
      trigger: '42'
    },

    {
      id: '42',
      message: '¿Lo que te acabo de mencionar se ajusta a tus necesidades? ¿O hay algo que nos está faltando?',
      trigger: '43'
    },


    {
      id: '43',
      user: true,
      trigger: '44'
    },

    {
      id: '44',
      message: 'Para poder ofrecerte una solución más detallada, por favor, facilítanos tus datos de contacto.',
      trigger: '45'
    },


    {
      id: '45',
      component: <FormularioChat />,
      end: true
    },

    //Transporte



    {
      id: '46',
      message: '¿Qué aspectos de la gestión de transporte te gustaría mejorar con nuestro ERP?',
      trigger: '47',
    },


    {
      id: '47',
      user: true,
      trigger: '48'
    },

    {
      id: '48',
      message: 'Algunas de las ventajas que tendrías de trabajar con EYNCOR ERP son:',
      trigger: '49',
    },



    {
      id: '49',
      component: <ListaTransporte />,
      trigger: '50'
    },

    {
      id: '50',
      message: '¿Lo que te acabo de mencionar se ajusta a tus necesidades? ¿O hay algo que nos está faltando?',
      trigger: '51'
    },


    {
      id: '51',
      user: true,
      trigger: '52'
    },

    {
      id: '52',
      message: 'Para poder ofrecerte una solución más detallada, por favor, facilítanos tus datos de contacto.',
      trigger: '53'
    },


    {
      id: '53',
      component: <FormularioChat />,
      end: true
    },



    //Configurar parte final

  ];


  return (
    <div>


      <div>

        <div style={floatingButtonStyle} onClick={handleToggleChat}>
          <button style={buttonStyle}> Chat </button>
        </div>


        {showChat && (
          <div style={chatContainerStyle}>

            <ThemeProvider theme={theme}>

              <ChatBot steps={steps} />

            </ThemeProvider>


          </div>
        )}
      </div>



    </div>
  );
};

export default ChatContenido;