import "../../../App.css";
import "./Button.css";

export const Button = ({ className, text }) => {
  return <button className={className}>{text}</button>;
};
