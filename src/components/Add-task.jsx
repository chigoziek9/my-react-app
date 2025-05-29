import React, { useState } from "react";

const AddTask = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === "") return; // Prevent adding empty tasks
    setTaskList([...taskList, task]); // Add new task to the list
    setTask(""); // Clear the input
  };
  //   const handTech = {
  //   earpod: "oraimo",
  //   battery: "universal"
  // }
  // const book = {
  //   pen: "bic",
  //   milk: "cremela",
  // }

  // const tech = {...handTech, ...book, pen: "leo"}
  const leaves = ["vegetable", "lettuce"];

  const fruits = ["apple", "banana", "orange", ...leaves];
  console.log(fruits); // 'apple', 'banana', 'orange', 'vegetable' and 'lettuce'

  const handleDeleteTask = (indexToDelete) => {
    const newTaskList = taskList.filter(
      (_task, index) => index !== indexToDelete
    );
    setTaskList(newTaskList);
  };
  const [checkedStates, setIsCheckedStates] = useState({});
  // const CheckedStates = {
  //   wisdom: true,
  //   victor: true
  // }
  const handleChange = (event) => {
    // console.log("i: ", i);
    setIsCheckedStates(() => {
      return {
        ...checkedStates,
        [event.target.name]: event.target.checked,
      };
    });
    console.log(event.target.name);
    let completedTaskList;
    if (event.target.checked) {
      completedTaskList = taskList.filter((task) => event.target.name === task);

      console.log({ completedTaskList });
      // setCompletedList([completedTaskList]);
      setCompletedList((originalCompletedList) => [
        ...originalCompletedList,
        ...completedTaskList,
      ]);
      // This line seems incorrect, it should filter based on some condition
      // Logic for when the task is checked
      // alert("Task completed");
      // completedList = ["pen", "book"]
    } else {
      // Logic for when the task is unchecked
      // alert("Task not completed");
      const remainingTasks = completedList.filter(
        (task) => event.target.name !== task
      );
      console.log({ remainingTasks });
      setCompletedList(remainingTasks);
    }
  };
  // const completedDeleteTask = (indexToBeDeleted) => {
  //   const newCompletedList = taskList.filter(
  //     (_item, index) => index !== indexToBeDeleted
  //   );
  //   setCompletedList(newCompletedList);
  // };

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-10">
  {/* Input container */}
  <div className="w-full max-w-2xl bg-green-100 p-4 md:p-6 rounded shadow-md">
    <div className="flex flex-col md:flex-row w-full gap-2">
      <input
        type="text"
        placeholder="Add a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full border border-gray-300 rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white px-6 py-3 rounded text-lg hover:bg-blue-600 transition duration-200 w-full md:w-auto"
      >
        Add
      </button>
    </div>
  </div>

  {/* Tasks Added */}
  <div className="bg-red-500 mt-6 w-full max-w-2xl p-4 md:p-6 space-y-2 rounded">
    <h1 className="text-white text-xl font-bold mb-4">TASKS ADDED</h1>

    {taskList.map((item, index) => (
      <div
        key={index}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-4 rounded shadow space-y-2 sm:space-y-0"
      >
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name={item}
            checked={checkedStates[item] || false}
            onChange={(e) => handleChange(e)}
            id={`taskDone-${index}`}
            className="w-5 h-5"
          />
          <label
            htmlFor={`taskDone-${index}`}
            className="text-lg break-words max-w-xs"
            style={
              checkedStates[item]
                ? { color: "red", textDecoration: "line-through" }
                : {}
            }
          >
            {item}
          </label>
        </div>
        <button
          onClick={() => handleDeleteTask(index)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Delete
        </button>
      </div>
    ))}
  </div>

  {/* Completed Tasks */}
  <div className="bg-red-500 mt-6 w-full max-w-2xl p-4 md:p-6 space-y-2 rounded">
    <h1 className="text-white text-xl font-bold mb-4">TASKS COMPLETED</h1>

    <ul className="flex flex-col bg-white p-4 rounded shadow space-y-2">
      {completedList.map((item, index) => (
        <li
          key={index}
          className="flex items-center space-x-2 break-words max-w-full"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
</div>

  );
};

export default AddTask;
