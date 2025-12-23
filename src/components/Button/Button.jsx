import "./Button.css";

export const Button = ({ padding, children }) => {
  return (
    <button className="button" style={{ padding: padding }}>
      {children}
    </button>
  );
};
