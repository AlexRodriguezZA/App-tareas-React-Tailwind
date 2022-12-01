import React from 'react'
import { useState } from 'react';


const Formulario = ({ tareas,setTareas }) => {

  const [nombre, setNombre] = useState("")
  const [Puesto, setPuesto] = useState("")
  const [Fecha, setFecha] = useState("")
  const [Descripcion, setDescripcion] = useState("")


  const [Error, setError] = useState(false)

  const handleResetForm = ()=>{
    //Resetear los formularios
    setNombre('')
    setFecha('')
    setPuesto('')
    setDescripcion('')

  }
  const handleSubmit = (e) => {
    e.preventDefault()

    //validacion del formulario

    if ([nombre, Puesto, Fecha, Descripcion].includes('')) {
      setError(true)
    }
    else{
      setError(false)
      //Objeto de tareas
      const objetoTarea = {
        nombre,
        Puesto,
        Fecha,
        Descripcion,
        id: Date.now()
      }
      setTareas([... tareas, objetoTarea])
      
      
      //Con esta funcion reseteamos el formulario
      handleResetForm()
      
    }
    
  }
  return (
    <div className="w-1/2 lg:w-2/5">
      <h2 className='font-black text-3xl text-center'>Seguimiento de tareas</h2>
      
      <p className='text-lg mt-5 text-center'>
        Añade tareas y
        <span className='text-indigo-600 font-bold'> Administralas</span> 
      </p> 


      <form onSubmit={handleSubmit} className='bg-white shadow-md'>
        
        {Error && 
          <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
            <span className="font-medium">Danger alert!</span> Cargue todos los campos solicitados.
          </div>          
        }

        <div className='mb-5'>
          <label htmlFor='Nombre'>Nombre del dev</label>

          <input
            id='nombre'
            className='border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md' 
            type="text" 
            placeholder='Nombre del desarrollador'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
        </div>

        <div className='mb-5'>
          <label htmlFor='Puesto'>Puesto del dev</label>

          <input
            id='puesto'
            className='border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md' 
            type="text" 
            placeholder='Puesto del desarrollador'
            value={Puesto}
            onChange={(e) => setPuesto(e.target.value)}
            />
        </div>

        <div className='mb-5'>
          <label htmlFor='alta'>Fecha</label>

          <input
            id='alta'
            className='border-2 w-full p-2 mt-2 rounded-md' 
            type="date" 
            value={Fecha}
            onChange={(e) => setFecha(e.target.value)}
            />
        </div>

        <div className='mb-5'>
          <label htmlFor='detalle'>Descripcion de la tarea</label>

          <textarea
            id='detalle'
            className='border-2 w-full p-2  mt-2 placeholder-grey-400  rounded-md' 
            placeholder='Describe la tarea' 
            value={Descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            />
        </div>

        <input 
        className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-500 cursor-pointer'
        type="submit" 
        name="" 
        id="" />
      </form>
    </div>
      
  )
}

export default Formulario;