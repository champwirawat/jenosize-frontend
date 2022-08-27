const Button = ({
  children,
  color = "primary",
  rounded = false,
  outline = false,
  small = false,
  onClick,
  IconStart,
  className,
}) => {
  return (
    <>
      <button
        type="button"
        className={`bt-${color} ${rounded ? "bt-rounded" : ""} ${
          outline ? "bt-outline" : "bt-default"
        } ${small ? "bt-small" : ""} ${className}`}
        onClick={onClick}
      >
        {IconStart && <IconStart />}
        <p>{children}</p>
      </button>
    </>
  );
};

export default Button;
