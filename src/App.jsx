import React from "react";
import "./App.css";
import AddTask from "./components/Add-task";

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-yellow-200 to-pink-500 px-4 sm:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center py-4">
        MY To Do List
      </h1>
      <div className="p-2 sm:p-4 max-w-xl mx-auto">
        <AddTask />
      </div>
    </div>
  );
}

export default App;
