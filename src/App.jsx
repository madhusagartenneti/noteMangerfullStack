import React, { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import EditTaskModal from "./components/EditTaskModal";
import SearchBar from "./components/SearchBar";
import {
  fetchTasks,
  addTask as apiAddTask,
  updateTask as apiUpdateTask,
  deleteTask as apiDeleteTask,
} from "./api/api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchTasks();
      setTasks(tasks);
      setFilteredTasks(tasks);
    };
    getTasks();
  }, []);

  const addTask = async (task) => {
    const newTask = await apiAddTask(task);
    setTasks([...tasks, newTask]);
    setFilteredTasks([...tasks, newTask]);
  };

  const updateTask = async (updatedTask) => {
    const task = await apiUpdateTask(updatedTask._id, updatedTask);
    const updatedTasks = tasks.map((t) =>
      t._id === task._id ? task : t
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
    setCurrentTask(null);
  };

  const deleteTask = async (id) => {
    await apiDeleteTask(id);
    const remainingTasks = tasks.filter((task) => task._id !== id);
    setTasks(remainingTasks);
    setFilteredTasks(remainingTasks);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(query.toLowerCase()) ||
        task.category?.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTasks(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-cyan-500 mb-6">
        Note Manager
      </h1>
      <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
      <AddTaskForm addTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        setCurrentTask={setCurrentTask}
      />
      {currentTask && (
        <EditTaskModal
          task={currentTask}
          updateTask={updateTask}
          setCurrentTask={setCurrentTask}
        />
      )}
    </div>
  );
}

export default App;
