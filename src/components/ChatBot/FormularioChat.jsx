import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { useCorreo } from '../../context/CorreoProvider';
import { Toaster, toast } from 'sonner';



const FormularioChat = ({ triggerNextStep }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [successMessage, setSuccessMessage] = useState('');

    const { creacionCorreo } = useCorreo();

    const onSubmit = (data) => {
        try {
            creacionCorreo(data)
            toast.success('Nuestro equipo se comunicará con usted pronto.');
            triggerNextStep()
        } catch (error) {
            setSuccessMessage('Necesitas llenar los campos');
        }
    };



    return (
        <div className="form-container flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className='mb-3 text-xl text-blue-600 font-extrabold'> Fomulario EYNCOR ERP </h2>

                <div className="form-group mb-3">

                    <p className='mb-1'> RUC: </p>
                    <input className='inputChat' type="text" {...register('ruc', { required: true })} />
                </div>
                <div className="form-group mb-3">
                    <p>Nombre:</p>
                    <input className='inputChat' type="text" {...register('nombre', { required: true })} />
                    {errors.name && <span className="error">El nombre es requerido</span>}
                </div>
                <div className="form-group mb-3">
                    <p className='mb-1' > Teléfono</p>
                    <input className='inputChat' type="text" {...register('telefono', { required: true })} />
                    {errors.phone && <span className="error">El teléfono es requerido</span>}
                </div>
                <div className="form-group mb-3">
                    <p className='mb-1' >Detalle: </p>
                    <input className='inputChat' type="text" {...register('comentario', { required: true })} />
                    {errors.message && <span className="error">El comentario es requerido</span>}
                </div>
                <button className='chaBotBoton mb-2' type="submit">Enviar</button>
            </form>
                 <Toaster position="top-center" />
        </div>
    );
};


FormularioChat.propTypes = {
    triggerNextStep: PropTypes.func.isRequired,
};


export default FormularioChat;