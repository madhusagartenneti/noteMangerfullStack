import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons from react-icons

function TaskList({ tasks, deleteTask, setCurrentTask }) {
  if (!tasks.length) {
    return <p className="text-center text-gray-500">No tasks to display.</p>;
  }

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="table-auto w-full text-left">
        <thead className="bg-gray-200 ">
          <tr>
            <th className="px-4 py-2 text-cyan-500">Title</th>
            <th className="px-4 py-2 text-cyan-500">Category</th>
            <th className="px-4 py-2 text-cyan-500">Description</th>
            <th className="px-4 py-2 text-cyan-500">Due Date</th>
            <th className="px-4 py-2 text-cyan-500">Status</th>
            <th className="px-4 py-2 text-cyan-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id} className="border-t">
              <td className="px-4 py-2">{task.title}</td>
              <td className="px-4 py-2">{task.category}</td>
              <td className="px-4 py-2">{task.description}</td>
              <td className="px-4 py-2">{new Date(task.dueDate).toLocaleDateString()}</td>
              <td className="px-4 py-2">{task.status}</td>
              <td className="px-4 py-2 flex gap-11">
                {/* Edit button with icon and hover effect */}
                <button
                  onClick={() => setCurrentTask(task)}
                  className="relative group text-yellow-500 hover:text-yellow-700 transition duration-200"
                >
                  <FaEdit size={20} />

                  {/* Text to show on hover */}
                  <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Edit
                  </span>
                </button>

                {/* Delete button with icon and hover effect */}
                <button
                  onClick={() => deleteTask(task._id)}
                  className="relative group text-red-500 hover:text-red-700 transition duration-200"
                >
                  <FaTrashAlt size={20} />

                  {/* Text to show on hover */}
                  <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Delete
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
