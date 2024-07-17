import React from 'react';
import { useForm } from 'react-hook-form';
import { useCorreo } from '../context/CorreoProvider';

const FormularioChat = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const {CorreoProvider} = useCorreo()

    const onSubmit = (data) => {
        CorreoProvider(data)
    };



    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="form-group">
                    <label>Ruc:</label>
                    <input type="text" {...register('ruc', { required: true })} />
            
                </div>

                <div className="form-group">
                    <label>Giro Empresa:</label>
                    <input type="text" {...register('giro', { required: true })} />
                    
                </div>

                <div className="form-group">
                    <label>Nombre:</label>
                    <input type="text" {...register('nombre', { required: true })} />
                    
                </div>
                <div className="form-group">
                    <label>Teléfono:</label>
                    <input type="text" {...register('telefono', { required: true })} />
                    
                </div>

                <div className="form-group">
                    <label>Fecha:</label>
                    <input type="date" {...register('fecha', { required: true })} />
                    
                </div>

                <div className="form-group">
                    <label>Comentario:</label>
                    <textarea {...register('comentario', { required: true })}></textarea>
                    
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default FormularioChat;

