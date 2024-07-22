import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
//import { useCorreo } from '../../context/CorreoProvider';
import { Toaster, toast } from 'sonner';
import axios from 'axios';



const FormularioChat = ({ triggerNextStep }) => {

    const { register, handleSubmit, reset } = useForm();
    const [correo, setCorreo] = useState({});

    const [successMessage, setSuccessMessage] = useState('');


    const onSubmit = (data) => {
        try {
            axios.post("http://localhost:8000/enviar_correo.php", data)
                .then(res => setCorreo(res.data))
            toast.success('Nuestro equipo se comunicará con usted pronto.');
            reset();
            triggerNextStep()
        } catch (error) {
            setSuccessMessage('Necesitas llenar los campos');
        }
    };




    return (
        <div className="form-container flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className='mb-3 text-xl text-blue-600 font-extrabold'>  Solicita Reserva </h2>

                <div className="form-group mb-3">

                    <p className='mb-1'> RUC: </p>
                    <input
                        className='inputChat' type="text"
                        placeholder='RUC'
                        {...register('ruc', { required: true })}
                    />
                </div>

                <div className="form-group mb-3">

                    <p className='mb-1'> Empresa: </p>
                    <input
                        className='inputChat' type="text"
                        placeholder='Giro de la Empresa'
                        {...register('giro', { required: true })}
                    />
                </div>



                <div className="form-group mb-3">
                    <p>Nombres y Apellidos:</p>
                    <input className='inputChat'
                        type="text" {...register('nombre', { required: true })}
                        placeholder='Nombre y Apellidos'

                    />
                </div>
                <div className="form-group mb-3">
                    <p className='mb-1' > Teléfono: </p>
                    <input className='inputChat'
                        type="text"
                        {...register('telefono', { required: true })}
                        placeholder='Teléfono'
                    />

                </div>


                <div className="form-group mb-3">

                    <p className='mb-1'> Fecha: </p>
                    <input
                        className='inputChat' type="date"
                        placeholder='Fecha para la demo'
                        {...register('fecha', { required: true })}
                    />
                </div>

                <div className="form-group mb-3">

                    <p className='mb-1'>Hora: </p>
                    <input
                        className='inputChat' type="time"
                        placeholder='Hora para la demo'
                        {...register('hora', { required: true })}
                    />
                </div>




                <div className="form-group mb-3">
                    <p className='mb-1' > Comentario: </p>
                    <textarea
                        className='inputDescripcion'
                        {...register('comentario', { required: true })}
                        placeholder='Comentario'
                    />

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



