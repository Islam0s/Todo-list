import { React } from 'react'

export const Todo = () => {
  

  return (
    <div className='bg-white w-max h-max rounded-xl'>
      
      <div className='space-x-3 mx-10 my-5'>
        <input className='rounded-xl bg-gray-300 p-2' placeholder='Write your task here.'/> 
        <button className='bg-amber-400 rounded-xl p-2'>Add task</button> 
      </div>


      <div className=''>
        <ul id='task-list'>

        </ul>
        
      </div>
    </div>
  )
}

export default Todo
