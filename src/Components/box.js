import { useState } from "react";

function Box(props) {
  // const [bgColor, setBgColor] = useState('red');
  const [isActive, setIsActive] = useState(false);
  const { children } = props;

  return (
    /* JSX is the HTML-like syntax inside the return statement */
    <div
      className={`box ${isActive ? "is-active" : ""}`}
      onMouseOver={() => setIsActive(true)}
      onMouseOut={() => setIsActive(false)}
    >
      {children}
    </div>
  );
}

export default Box;
