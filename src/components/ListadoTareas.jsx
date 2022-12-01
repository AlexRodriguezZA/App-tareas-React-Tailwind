import React from 'react'
import Tareas from './Tareas'

const ListadoTareas = ({tareas,setTareas}) => {

  return (
    <div className='w-1/2 lg:w-3/5'>

    <h2 className='text-xl mt-5 mb-10 text-center'>Listado de tareas</h2>
      {
        tareas.map( tarea => <Tareas key={tarea.id} tarea={tarea}/>
        )

      }
    </div>
    
  )
}

export default ListadoTareas