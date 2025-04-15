import "../../../App.css";
import "./Button.css";

export const Button = ({ className = "btn", children }) => {
  let buttonClass = className;
  switch (buttonClass) {
    case "primary":
      buttonClass = "";
      break;

    case "secondary":
      buttonClass = "btn--secondary";
      break;

    case "disabled":
      buttonClass = "btn--disabled";
  }

  return <button className={`btn ${buttonClass}`}>{children}</button>;
};
