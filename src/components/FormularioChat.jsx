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
                    <label>RUC:</label>
                    <input type="text" {...register('ruc', { required: true })} />
                    {errors.ruc && <span className="error">El RUC es requerido</span>}
                </div>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input type="text" {...register('nombre', { required: true })} />
                    {errors.name && <span className="error">El nombre es requerido</span>}
                </div>
                <div className="form-group">
                    <label>Teléfono:</label>
                    <input type="tel" {...register('telefono', { required: true })} />
                    {errors.phone && <span className="error">El teléfono es requerido</span>}
                </div>
                <div className="form-group">
                    <label>Comentario:</label>
                    <textarea {...register('comentario', { required: true })}></textarea>
                    {errors.message && <span className="error">El comentario es requerido</span>}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default FormularioChat;

