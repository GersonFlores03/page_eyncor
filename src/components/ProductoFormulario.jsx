import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'sonner';

const ProductoFormulario = () => {
    
    const { register, handleSubmit , reset} = useForm();
    const [successMessage, setSuccessMessage] = useState('');
    
    const onSubmit = (data) => {
        try {
            axios.post("http://eyncor.com/correo/enviar_correo.php" , data)
            .then(res => setCorreo(res.data))
            toast.success('Nuestro equipo se comunicará con usted pronto.');
            reset();
        } catch (error) {
            setSuccessMessage('Necesitas llenar los campos');
        }
    };



    return (
            <div class="overflow-hidden bg-white rounded-md">
                <div class="p-6 sm:p-10">
                    <h3 class="text-3xl font-semibold text-black mb-4">Contáctanos</h3>


                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="space-y-6">
                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> RUC </label>
                                <div class="mt-2.5 relative">
                                    <input
                                        type="text"
                                        placeholder="RUC"
                                        class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                                        {...register('ruc', { required: true })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Empresa </label>
                                <div class="mt-2.5 relative">
                                    <input
                                        type="text"
                                        placeholder="Giro de la Empresa"
                                        class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                                        {...register('giro', { required: true })}
                                    />
                                </div>
                            </div>



                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Nombre </label>
                                <div class="mt-2.5 relative">
                                    <input
                                        type="text"
                                        placeholder="Nombres y Apellidos"
                                        class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                                        {...register('nombre', { required: true })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Teléfono </label>
                                <div class="mt-2.5 relative">
                                    <input
                                        type="text"
                                        placeholder="Teléfono"
                                        class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                                        {...register('telefono', { required: true })}
                                    />
                                </div>
                            </div>


                            {/* 
                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Fecha </label>
                                <div class="mt-2.5 relative">
                                    <input
                                        type="date"
                                        placeholder="Fecha para la demo"
                                        class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                                        {...register('fecha', { required: true })}
                                    />
                                </div>
                            </div>
                            
                            */}


                          {/* 
                          
                             <div>
                                <label for="" class="text-base font-medium text-gray-900"> Hora </label>
                                <div class="mt-2.5 relative">
                                    <input
                                        type="time"
                                        placeholder="Hora para la demo"
                                        class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                                        {...register('hora', { required: true })}
                                    />
                                </div>
                            </div>
                          
                          
                          */}



                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Comentario </label>
                                <div class="mt-2.5 relative">
                                    <textarea
                                        placeholder="Comentario"
                                        class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                                        rows="4"
                                        {...register('comentario', { required: true })}
                                    ></textarea>
                                </div>
                            </div>

                            <div>
                                <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-md focus:outline-none hover:bg-orange-600 focus:bg-orange-600">
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <Toaster position="bottom-right"/>
         </div>

         
        


    );
};

export default ProductoFormulario;