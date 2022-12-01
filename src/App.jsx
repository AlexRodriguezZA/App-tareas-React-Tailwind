import { useState } from 'react';

import Header from './components/Header'
import ListadoTareas from './components/ListadoTareas'
import Formulario   from './components/Formulario'


function App() {

  const [Tareas, setTareas] = useState([])

  
  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className='mt-12 md:flex flex:wrap'>
        <Formulario setTareas={setTareas} tareas={Tareas}/>
        <ListadoTareas tareas={Tareas} setTareas={setTareas}/> 
      </div>
      
    </div>
  )
}

export default App
