import { React } from 'react'

export const App = () => {
  
  const addTaskBtn = document.querySelector('button')
  addTaskBtn.style.backgroundcolor = 'red'

  return (
    <div class="flex">
      <ul>
        <li>Eat pizza.</li>
        <li>learn react.</li> 
       </ul>
      <button className="bg-sky-400 rounded-lg p-2">Add Task</button>
       

    </div>
  )
}

export default App
