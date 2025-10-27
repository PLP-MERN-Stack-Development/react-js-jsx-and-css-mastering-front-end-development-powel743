import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          ReactTasks
        </h1>

        <div className="flex space-x-6 text-gray-700 dark:text-gray-200">
          <Link to="/">Home</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/api">API Data</Link>
        </div>

        <button
          onClick={toggleTheme}
          className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
