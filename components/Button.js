const Button = ({ children, color = "primary", onClick }) => {
  return (
    <>
      <button type="button" className={color} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
