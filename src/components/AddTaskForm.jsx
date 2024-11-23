import React, { useState } from "react";
import { FaPlus } from "react-icons/fa"; // Import the Plus icon from react-icons

function AddTaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Pending");
  const [category, setCategory] = useState("Work");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description, dueDate, status, category });
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Title"
          className="p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="date"
          className="p-2 border rounded"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
        <select
          className="p-2 border rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <select
          className="p-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Shopping">Shopping</option>
          <option value="Health">Health</option>
          <option value="Study">Study</option>
        </select>
      </div>
      <textarea
        placeholder="Description"
        className="p-2 border rounded w-full mt-4"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="bg-slate-600 text-white px-4 py-2 rounded mt-4 flex items-center justify-center"
      >
        <FaPlus className="mr-2" /> {/* Add Plus icon */}
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;
