const Button = ({ children, color = "primary", onClick }) => {
  return (
    <button
      type="button"
      className={`inline-block px-6 py-2.5 transition duration-150 ease-in-out font-medium leading-tight rounded shadow-md 
      bg-${color} text-white
      hover:bg-${color}-dark hover:shadow-lg 
     `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
