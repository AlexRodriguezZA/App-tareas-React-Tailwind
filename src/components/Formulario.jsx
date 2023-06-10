import React from "react";
import { useState } from "react";
import ErrorForm from "./Error";
const Formulario = ({ tareas, setTareas }) => {
  const [nombre, setNombre] = useState("");
  const [Puesto, setPuesto] = useState("");
  const [Fecha, setFecha] = useState("");
  const [Descripcion, setDescripcion] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
  );

  const [Error, setError] = useState(false);

  const handleResetForm = () => {
    //Resetear los formularios
    setNombre("");
    setFecha("");
    setPuesto("");
    setDescripcion(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion del formulario

    if ([nombre, Puesto, Fecha, Descripcion].includes("")) {
      setError(true);
    } else {
      setError(false);
      //Objeto de tareas
      const objetoTarea = {
        nombre,
        Puesto,
        Fecha,
        Descripcion,
        id: Date.now(),
      };
      setTareas([ objetoTarea,...tareas]);

      //Con esta funcion reseteamos el formulario
      handleResetForm();
    }
  };
  return (
    
    <div className="flex justify-center w-full sm:w-4/5 md:w-1/3 h-full ">
  
       
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 shadow-md w-11/12  rounded-xl flex flex-col items-center"
      >
        <div className="w-full">
          <h3 className="text-center w-full text-3xl my-2 font-bold text-green-400 ">
            Cargar
          </h3>
        </div>
        {Error && <ErrorForm/>}

        <div className="mb-5 text-white w-4/5 flex flex-col">
          <label htmlFor="Nombre" className="font-bold">
            Nombre:
          </label>

          <input
            id="nombre"
            className="bg-gray-800  w-full p-2 mt-1 placeholder-grey-400 rounded-md"
            type="text"
            placeholder="Nombre del desarrollador"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5 text-white w-4/5 flex flex-col">
          <label htmlFor="Puesto" className="font-bold">
            Puesto
          </label>

          <input
            id="puesto"
            className="bg-gray-800 w-full p-2 mt-1 placeholder-grey-400 rounded-md"
            type="text"
            placeholder="Puesto del desarrollador"
            value={Puesto}
            onChange={(e) => setPuesto(e.target.value)}
          />
        </div>

        <div className="mb-5 text-white w-4/5 flex flex-col">
          <label htmlFor="alta" className="font-bold">
            Fecha
          </label>

          <input
            id="alta"
            className="bg-gray-800  w-full p-2 mt-1 placeholder-grey-400 rounded-md"
            type="date"
            value={Fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5 text-white w-4/5 flex flex-col">
          <label htmlFor="detalle" className="font-bold">
            Descripción de la tarea
          </label>

          <textarea
            id="detalle"
            className="bg-gray-800  w-full h-24 p-2 mt-1 placeholder-grey-400 rounded-md"
            placeholder="Describe la tarea"
            value={Descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <div className="w-full flex justify-center">
          <input
            className="bg-green-400 w-1/2 p-2 mb-2 rounded-lg  text-black uppercase font-bold hover:bg-green-500 cursor-pointer"
            type="submit"
            name=""
            id=""
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
