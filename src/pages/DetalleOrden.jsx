import { useEffect } from "react";
import { useOrden } from "../context/OrdenProvider";
import { Table } from "react-bootstrap";


const DetalleOrden = () => {
    const { tasks, getTasks } = useOrden()

     console.log(tasks)

    console.log(tasks)
    useEffect(() => {
        getTasks();
    }, [])


    return (
        <div className="mt-28 mb-">
            <h1 className="text-5xl font-extrabold text-center mb-16">Mis Ordenes</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="w-full max-w-4xl divide-y divide-gray-200 bg-white text-sm">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="whitespace-nowrap px-6 py-3 font-medium text-gray-900 text-left">Producto</th>
                                <th className="whitespace-nowrap px-6 py-3 font-medium text-gray-900 text-left">Detalle</th>
                                <th className="whitespace-nowrap px-6 py-3 font-medium text-gray-900 text-left">Precio</th>
                                <th className="whitespace-nowrap px-6 py-3 font-medium text-gray-900 text-left">Fecha</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {tasks.map((task, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                    <td className="whitespace-nowrap px-6 py-4 text-gray-700">{task.Producto.nombre}</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-gray-700">{task.Producto.descripcion}</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-gray-700">{task.Producto.precio}</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-gray-700">{task.createdAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DetalleOrden;