/* src/pages/Home.jsx */
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import Button from "../components/Button";
import Card from "../components/Card";

const Home = () => {
  return (
    <Layout>
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Welcome to ReactTasks 
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Manage your tasks, explore API data, and enjoy a smooth, responsive
          experience powered by React + Tailwind CSS.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/tasks">
            <Button variant="primary">Go to Tasks</Button>
          </Link>
          <Link to="/api">
            <Button variant="secondary">View API Data</Button>
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mt-12">
        <Card title="Reusable Components">
          <p className="text-gray-600 dark:text-gray-300">
            Build modular, flexible UI blocks that make development faster and
            cleaner.
          </p>
        </Card>

        <Card title="Smart State Management">
          <p className="text-gray-600 dark:text-gray-300">
            Learn to handle state efficiently using React hooks and local
            storage.
          </p>
        </Card>

        <Card title="API Integration">
          <p className="text-gray-600 dark:text-gray-300">
            Connect to public APIs, fetch data, handle loading states, and
            display information dynamically.
          </p>
        </Card>
      </section>
    </Layout>
  );
};

export default Home;
