import { useState } from "react";

function Accordion(props) {
  const [contentIsShowing, setContentIsShowing] = useState(false);

  return (
    <div className="accordion">
      <h3
        className="accordion-title"
        onClick={() => setContentIsShowing(!contentIsShowing)}
      >
        {props.title}
      </h3>
      {contentIsShowing ? (
        <div className="accordion-content">
          <h4>Answer:</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Accordion;
