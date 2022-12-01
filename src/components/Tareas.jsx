import React from 'react'

const Tareas = ({ tarea }) => {
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl flex'>
      <div>
        <p className='font-bold mb-3 text-gray-700 uppercase'> Nombre:  
        <span className='font-normal normal-case text-center'> {tarea.nombre} </span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'> Puesto: 
          <span className='font-normal normal-case'> {tarea.Puesto}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'> Fecha: 
          <span className='font-normal normal-case'> {tarea.Fecha}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'> Descripción: 
          <span className='font-normal normal-case'> {tarea.Descripcion}</span>
        </p>
      </div>
      


      <div >
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          Editar
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          Delete
        </button>
      </div>
    </div>
  )
}

export default Tareas;