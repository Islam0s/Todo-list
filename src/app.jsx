import { useState } from 'react';

const App = () => {
  // State for the input field
  const [text, setText] = useState('');
  
  // NEW: State to hold the array of tasks.
  // We initialize it with the tasks that were previously hardcoded.
  const [tasks, setTasks] = useState(['Go to the Gym', 'Learn react js']);

  // This function updates the 'text' state as you type.
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  // NEW: This function adds the current 'text' to the 'tasks' array.
  const handleAddTask = () => {
    // Prevent adding empty tasks
    if (text.trim() === '') {
      return; 
    }

    // Update the tasks state by creating a new array
    // with the old tasks (...) and the new one (text)
    setTasks(prevTasks => [...prevTasks, text]);

    // Clear the input field for the next task
    setText('');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-stone-900">
      <div className="bg-sky-500 p-14 rounded-lg space-y-10">
        <div>
          <div className="flex gap-6">
            <input
              type="text"
              placeholder="Add a new Task."
              onChange={handleInputChange}
              value={text} // The value is controlled by the 'text' state
              className="bg-white p-2 rounded-lg"
            />
            {/* NEW: Added the onClick handler to the button */}
            <button
              onClick={handleAddTask}
              className="bg-green-500 text-white p-2 rounded-lg hover:bg-amber-300"
            >
              Add Task
            </button>
          </div>
        </div>

        <div className="text-white">
          <ol className="space-y-6">
            {/* NEW: We map over the 'tasks' array to dynamically create a list item for each task. */}
            {tasks.map((task, index) => (
              <div key={index} className="gap-6 flex items-center">
                {/* The 'key' prop is important for React to keep track of each item */}

                <li className="text-lg bg-sky-700 py-2 px-5 rounded-lg">{task}</li>
                
                <div className="justify-center space-x-4">
                  <button className="bg-green-500 p-2 rounded-lg">Done</button>
                  <button className="bg-red-400 p-2 rounded-lg">Delete</button>
                </div>
              </div>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default App;
