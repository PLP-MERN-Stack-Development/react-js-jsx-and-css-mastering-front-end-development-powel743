/* src/pages/Tasks.jsx */
import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import Button from "../components/Button";
import Card from "../components/Card";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Tasks = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");
  const [newTask, setNewTask] = useState("");

  // Add new task
  const addTask = () => {
    if (newTask.trim() === "") return;
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter tasks
  const filteredTasks =
    filter === "all"
      ? tasks
      : filter === "active"
      ? tasks.filter((t) => !t.completed)
      : tasks.filter((t) => t.completed);

  return (
    <Layout>
      <section className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
          Task Manager 📝
        </h1>

        {/* Add Task Input */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button onClick={addTask}>Add</Button>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-6">
          <Button
            variant={filter === "all" ? "primary" : "secondary"}
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant={filter === "active" ? "primary" : "secondary"}
            onClick={() => setFilter("active")}
          >
            Active
          </Button>
          <Button
            variant={filter === "completed" ? "primary" : "secondary"}
            onClick={() => setFilter("completed")}
          >
            Completed
          </Button>
        </div>

        {/* Task List */}
        <div className="space-y-3">
          {filteredTasks.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">
              No tasks found.
            </p>
          ) : (
            filteredTasks.map((task) => (
              <Card
                key={task.id}
                className={`flex justify-between items-center ${
                  task.completed ? "opacity-70" : ""
                }`}
              >
                <div
                  className={`flex items-center gap-3 cursor-pointer ${
                    task.completed ? "line-through text-gray-400" : ""
                  }`}
                  onClick={() => toggleTask(task.id)}
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="w-4 h-4 accent-blue-600"
                  />
                  <span>{task.text}</span>
                </div>
                <Button variant="danger" onClick={() => deleteTask(task.id)}>
                  Delete
                </Button>
              </Card>
            ))
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Tasks;
