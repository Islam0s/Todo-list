
const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-stone-900">
      
      <div className="bg-sky-500 p-16 rounded-lg space-y-10">
          
        <div>

          <div className="flex gap-6">
            <input 
              type="text" 
              placeholder="Add a new Task."
              className="bg-white p-2 rounded-lg"
            />
            <button className="bg-green-500 text-white p-2 rounded-lg hover:bg-amber-300">Add Task</button>
          </div>

      
        </div>

        <div className="text-white">
          <ol>
            <div className="flex gap-6 items-center justify-center">

              <li className="text-lg bg-sky-700 py-2 px-5 rounded-lg">Eat pizza wiht my wife.</li>
              <button className="bg-green-500 p-2 rounded-lg">Done</button>
              <button className="bg-red-400 p-2 rounded-lg">Delete</button>
 
            </div>
          </ol>
        </div>

      </div>
      
    </div>
  );
}

export default App
