import { useState } from 'react';

import Header from './components/Header'
import ListadoTareas from './components/ListadoTareas'
import Formulario   from './components/Formulario'


function App() {
  const [Tareas, setTareas] = useState([])

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <Header/>

      <div className='mt-6 md:mt-10 w-full flex flex-col md:flex-row md:justify-center'>
        <Formulario setTareas={setTareas} tareas={Tareas}/>
        <ListadoTareas tareas={Tareas} setTareas={setTareas} /> 
      </div>
      
    </div>
  )
}

export default App
