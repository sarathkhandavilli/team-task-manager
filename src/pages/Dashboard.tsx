import React, { useEffect, useState } from "react";
import { getTasks, createTask } from "../services/taskService";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res);
  };

  const handleCreateTask = async () => {
    await createTask(title, description);
    setTitle("");
    setDescription("");
    setOpenModal(false);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Your Tasks</h1>
        <button
          onClick={() => setOpenModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          + Add Task
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {tasks.map((task: any) => (
          <div
            key={task.id}
            className="p-4 border rounded bg-white shadow flex justify-between"
          >
            <div>
              <h3 className="font-semibold">{task.title}</h3>
              <p className="text-gray-600 text-sm">{task.description}</p>
            </div>

            <span
              className={`px-3 py-1 rounded text-sm ${
                task.status === "pending"
                  ? "bg-yellow-200"
                  : "bg-green-200"
              }`}
            >
              {task.status}
            </span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-3">Create Task</h2>

            <input
              className="border w-full mb-2 p-2 rounded"
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="border w-full mb-4 p-2 rounded"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button
              onClick={handleCreateTask}
              className="px-4 py-2 bg-blue-600 text-white rounded w-full"
            >
              Create
            </button>

            <button
              onClick={() => setOpenModal(false)}
              className="mt-2 w-full text-center text-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
