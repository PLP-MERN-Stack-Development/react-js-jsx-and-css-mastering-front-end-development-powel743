/* src/components/Card.jsx */
const Card = ({ title, children, className = "" }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 shadow-md rounded-xl p-5 transition-all hover:shadow-lg ${className}`}
    >
      {title && (
        <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

export default Card;
