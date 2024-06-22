import { useForm } from 'react-hook-form';
import { useOrden } from '../context/OrdenProvider';
import { useNavigate } from 'react-router-dom';



const OrderForm = () => {

  const { createOrden } = useOrden()
  const navigate = useNavigate()
  const { handleSubmit, register, reset } = useForm()

  


  const submit = async (orden) => {
    try {

      const formData = new FormData();
      formData.append('dni', orden.dni);
      formData.append('ruc', orden.ruc);
      formData.append('email', orden.email);
      formData.append('direccion', orden.direccion);
      formData.append('nombre', orden.nombre);
      formData.append('apellido', orden.apellido);
      formData.append('telefono', orden.telefono);
      formData.append('imagen', orden.imagen[0]);


      await createOrden(formData);


      reset();

      navigate("/detalle")
    } catch (error) {
      console.error('Error al enviar la orden:', error);
    }

  }

  return (

    <form onSubmit={handleSubmit(submit)} enctype="multipart/form-data" className='mt-[50px] '>

      <section class="bg-white">
        <div class="grid grid-cols-1 lg:grid-cols-2">


          <div class="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl mb-8">Orden</h2>


              <div class="space-y-5">
                <div>
                  <label for="dni" class="text-base font-medium text-gray-900"> Documento de Identidad </label>
                  <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                    <input
                      placeholder='Documento de Identidad'
                      type="text"
                      id='dni'
                      className='block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
                      {...register("dni")}
                    />

                  </div>
                </div>

                <div>
                  <label for="ruc" class="text-base font-medium text-gray-900"> Ruc </label>
                  <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                    <input
                      placeholder='ruc'
                      type="text"
                      id='ruc'
                      className='block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
                      {...register("ruc")}
                    />

                  </div>
                </div>

                <div>
                  <label for="email" class="text-base font-medium text-gray-900"> Correo electrónico </label>
                  <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                    <input
                      placeholder='Correo electrónico'
                      type="email"
                      id='email'
                      className='block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
                      {...register("email")}
                    />

                  </div>
                </div>
                <div>
                  <label for="direccion" class="text-base font-medium text-gray-900"> Direccion de la Empresa </label>
                  <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600 ">

                    <input
                      placeholder='direccion'
                      type="text"
                      id='direccion'
                      className='block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
                      {...register("direccion")}
                    />

                  </div>
                </div>
                <hr />
                <div>
                  <label for="nombre" class="text-base font-medium text-gray-900"> Nombres </label>
                  <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">


                    <input
                      placeholder='Nombres'
                      type="text"
                      id='nombre'
                      className='block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
                      {...register("nombre")}
                    />

                  </div>
                </div>

                <div>
                  <label for="apellido" class="text-base font-medium text-gray-900"> Apellidos </label>
                  <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                    <input
                      placeholder='Apellidos'
                      type="text"
                      id='apellido'
                      className='block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
                      {...register("apellido")}
                    />

                  </div>
                </div>

                <div>
                  <label for="telefono" class="text-base font-medium text-gray-900"> Teléfono </label>
                  <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">


                    <input
                      placeholder='Teléfono'
                      type="tel"
                      id='telefono'
                      className='block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
                      {...register("telefono")}
                    />

                  </div>
                </div>

                <div>
                  <label for="password" class="text-base font-medium text-gray-900"> Constancia de Pago </label>
                  <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                    <input
                      type="file"
                      id="imagen"
                      className='block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
                      {...register("imagen", { required: true })}
                    />

                  </div>
                </div>

                <div>
                  
                   <button className='inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80 mb-1'> Adquirir mi certificado </button>
                
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </form>
  );
};

export default OrderForm;