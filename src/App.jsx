
const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-stone-900">
      <div className="bg-white p-16 rounded-lg">
        <div className="flex gap-6">
          <input 
            type="text" 
            placeholder="Add a new Task."
            className="p-2 rounded-lg"
          />
          <button className="bg-amber-400 text-white p-2 rounded-lg hover:bg-amber-300">Add Task</button>
        </div>
      </div>
      
    </div>
  );
}

export default App
