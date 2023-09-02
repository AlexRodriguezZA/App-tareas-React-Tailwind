import React from "react";
import Tareas from "./Tareas";

const ListadoTareas = ({ tareas, setTareas }) => {
  
  const handleDeleteTarea = (id) => {
    const newArrayTareas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(newArrayTareas);
  };


  return (
    <div className="mt-10 w-full md:w-1/2 lg:w-3/5 flex flex-col items-center md:mt-0">
      <section className="grid w-5/6 grid-cols-1 gap-2 md:grid-cols-2 md:gap-6">
        {tareas.map((tarea) => (
          <Tareas
            tarea={tarea}
            key={tarea.id}
            handleDeleteTarea={handleDeleteTarea}
            setTareas={setTareas}
          />
        ))}
      </section>
    </div>
  );
};

export default ListadoTareas;
