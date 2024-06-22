import React, { createContext, useContext, useEffect, useState } from 'react';
import { DetalleOrdenRequest, createOrdenRequest, createProductRequest } from '../api/orden';

const OrdenContext = createContext();

export const useOrden = () => {
    const context = useContext(OrdenContext);
    if (!context) throw new Error("useTasks must be used within a TaskProvider");
    return context;
};


const OrdenProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);
    //const [error, setError] = useState([])

    const getTasks = async () => {
        const res = await DetalleOrdenRequest();
        setTasks(res.data);
    };


    
    


    const myproducto = [
        {
            nombre: 'Facturacion electronica 1 año',
            descripcion: 'Certificado digital para facturación electrónica que permite firmar documentos XML',
            imagen: 'imagen ejemplo',
            precio: 260.00
        },
        {
            nombre: 'Facturacion electronica 2 años',
            descripcion: 'Certificado digital para facturación electrónica que permite firmar documentos XML',
            imagen: 'imagen ejemplo',
            precio: 450.00
        },
        {
            nombre: 'Facturacion electronica 3 años',
            descripcion: 'Certificado digital para facturación electrónica que permite firmar documentos XML',
            imagen: 'imagen ejemplo',
            precio: 650.00 
        },
    ]

    /* 
     useEffect(() => {
        if (error.length > 0) {
          const timer = setTimeout(() => {
            setError([]);
          }, 5000);
          return () => clearTimeout(timer);
        }
      }, [error]);
    
    */



    const createProducto = async (index) => {
        try {
            const producto = myproducto[index];
            const res = await createProductRequest(producto)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    const createOrden = async (orden) => {
        try {
            const res = await createOrdenRequest(orden)
            console.log(res)
        } catch (error) {
           console.log(error)
        }
    }



    return (
        <OrdenContext.Provider
            value={{
                tasks,
                createOrden,
                createProducto,
                getTasks

            }}

        >
            {children}
        </OrdenContext.Provider>
    );
};

export default OrdenProvider;