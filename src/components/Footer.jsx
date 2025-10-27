/* src/components/Footer.jsx */
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-10">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} ReactTasks. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-blue-500">
            Privacy
          </a>
          <a href="#" className="hover:text-blue-500">
            Terms
          </a>
          <a href="#" className="hover:text-blue-500">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
