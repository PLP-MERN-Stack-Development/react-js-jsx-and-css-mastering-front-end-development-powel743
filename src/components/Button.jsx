/* src/components/Button.jsx */
const Button = ({ children, variant = "primary", onClick, className = "" }) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium focus:outline-none transition-all duration-200";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
