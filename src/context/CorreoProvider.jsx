import React, { createContext, useContext, useState } from 'react';
import { createCorreoRequest } from '../api/correo';


const correoContext = createContext()

export const useCorreo = () => {
    const context = useContext(correoContext);
    if (!context) throw new Error("useTasks must be used within a TaskProvider");
    return context;
};


const CorreoProvider = ({children}) => {

    const [correo, setCorreo] = useState()

    
    
    const creacionCorreo = async (data) => {
        const correoCreacion = await createCorreoRequest(data)
        setCorreo(correoCreacion.data)

    }





    return (
        <correoContext.Provider
            value={{
              correo,
              creacionCorreo
            }}
        >
            {children}

        </correoContext.Provider>
    );
};

export default CorreoProvider;