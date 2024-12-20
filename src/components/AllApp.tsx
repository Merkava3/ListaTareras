
import { useState } from 'react';
import { ListaTareas } from './ListaTareas';


export const AllApp = () => {
    const [Nuevatareas, setNuevaTareas] = useState<string>('');
    const [listaTareas, setListaTareas] = useState<string[]>([]);
    const hadleTask = () => {
        if (Nuevatareas.trim() === '') return
        setListaTareas(tareasAnteriores => [...tareasAnteriores, Nuevatareas])
        setNuevaTareas('')

    }

    const handleBorrarTarea = (index: number) => {
        setListaTareas(tareas => tareas.filter((_, i) => i !== index))
    }

  return (
    <div>
      <h1>Lista de tareas</h1>
      <div>
      <input type="text" value={Nuevatareas} onChange={(e) => setNuevaTareas(e.target.value)} />
      <button onClick={hadleTask}>Agregar tarea</button> 
      </div>
        <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>      
    </div>
  );
}