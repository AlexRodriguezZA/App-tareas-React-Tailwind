import { AiOutlineCalendar } from "react-icons/ai";
import { motion } from "framer-motion";
import { useState } from "react";

const Avartars_Url = [
  "https://api.multiavatar.com/Binx Bond.svg",
  "https://api.multiavatar.com/Starcrasher.svg",
  "https://api.multiavatar.com/Projectionist.svg",
];

const Tareas = ({ tarea, handleDeleteTarea, updateTarea }) => {
  const [nombre, setNombre] = useState(tarea.nombre);
  const [Puesto, setPuesto] = useState(tarea.Puesto);
  const [Fecha, setFecha] = useState(tarea.Fecha);
  const [Descripcion, setDescripcion] = useState(tarea.Descripcion);
  const [EditMode, setEditMode] = useState(false);

  function getRandomZeroOneOrTwo() {
    return Math.floor(Math.random() * 2);
  }
  const randomValue = getRandomZeroOneOrTwo();

  const handleSaveTarea = () => {
    const updatedTarea = {
      ...tarea,
      nombre,
      Puesto,
      Fecha,
      Descripcion,
    };

    // Llamar a la función updateTarea pasando el objeto actualizado
    updateTarea(updatedTarea);

    // Cambiar el estado de EditMode a false para volver a la vista estática
    setEditMode(false);
  };
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        {" "}
        <div className="w-72 m-1 bg-gradient-to-b from-sky-900 to-sky-950 mb-3 rounded-2xl shadow-md shadow-cyan-500/40 flex flex-col justify-center items-center">
          {" "}
          {/*Informacion del usuario */}
          <section className="w-11/12 flex gap-3 ml-4 mt-2">
            <div className="rounded-full h-20 bg-cyan-400 w-20 mt-3">
              <img
                src={Avartars_Url[randomValue]}
                className="w-20 p-0.5 rounded-full"
                alt="imagen"
              />
            </div>
            <div className="mt-8 flex w-1/2 flex-col">
              {!EditMode ? (
                <p className="text-cyan-300 text-lg font-bold">
                  {tarea.nombre}
                </p>
              ) : (
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full h-5  bg-gray-800 text-lg px-1 text-cyan-50 rounded-lg ring-2 ring-green-600"
                />
              )}
              {!EditMode ? (
                <span className="text-gray-400 font-semibold text-xs">
                  {tarea.Puesto}
                </span>
              ) : (
                <input
                  type="text"
                  value={Puesto}
                  onChange={(e) => setPuesto(e.target.value)}
                  className="w-24 h-4 mt-2 rounded-lg text-xs px-1 text-cyan-50 bg-gray-800 ring-2 ring-green-600"
                />
              )}
            </div>
          </section>
          {/*Fecha y descripción*/}
          <section className="w-11/12 mt-5">
            {!EditMode ? (
              <p className="text-gray-400 font-semibold text-sm text-justify flex gap-2 items-center">
                <AiOutlineCalendar /> {tarea.Fecha}
              </p>
            ) : (
              <input
                type="date"
                value={Fecha}
                onChange={(e) => setFecha(e.target.value)}
                className="w-30 h-4 text-cyan-50 text-sm  bg-gray-800 rounded-sm ring-2 ring-green-600"
              />
            )}

            {!EditMode ? (
              <p className="text-gray-300 font-semibold text-sm text-justify mt-3">
                {tarea.Descripcion}
              </p>
            ) : (
              <textarea
                type="date"
                value={Descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="w-full h-14 text-cyan-50 text-sm bg-gray-800 mt-3 rounded-sm ring-2 ring-green-600"
              />
            )}
          </section>
          {!EditMode ? (
            <div className="w-11/12 my-5   flex gap-5 justify-center">
              <button
                onClick={() => setEditMode(true)}
                className="ring-2  ring-green-400 text-cyan-50 rounded-xl px-5 py-1 hover:bg-green-800"
              >
                Edit
              </button>

              <button
                onClick={() => handleDeleteTarea(tarea.id)}
                className="ring-2  ring-red-400 text-cyan-50 rounded-xl px-3 py-1 hover:bg-red-800"
              >
                Delete
              </button>
            </div>
          ) : (
            <div className="w-11/12 my-5   flex gap-5 justify-center">
              <button onClick={() => handleSaveTarea()} className="ring-2  ring-blue-400 text-cyan-50 rounded-xl px-5 py-1 hover:bg-blue-800">
                Save
              </button>

              <button
                onClick={() => setEditMode(false)}
                className="ring-2  ring-red-800 text-cyan-50 rounded-xl px-3 py-1 hover:bg-red-800"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Tareas;
