import { useState } from "react";

function Form(props) {
  /* 
  Simple input that youtype your name into,
  The value of the input will be stored in state.
  
  We will output the state on the page somewhere 
  */

  const [name, setName] = useState(""); // This is the state for the input personName.
  const [dropdownState, setDropdownState ] =  useState('apple');

  const submitFunction = (e) => {
    e.preventDefault();
    console.log('My favourite fruit is:', dropdownState, );
  }

  const formStyle = {
    backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/56e0a5e0b6aa6041bb2e5d2f/1579209722076-30THHZXUQRFSQ4GF59RN/62502530_10157685639875832_2637517928752218112_o.jpg")`,
  };

  return (
    <>
      <form action="" onSubmit={submitFunction} style={formStyle} >
        <label htmlFor="personName">Your name: </label>

        <input
          type="text"
          name="personName"
          id="personName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div>
        <select name="dropdown-choices" id="dropdown-choices" value={dropdownState} onChange={(e) => setDropdownState(e.target.value)} >
          <option value="apple">Apple</option>
          <option value="orange">Orange</option>
          <option value="pear">Pear</option>
        </select>
        </div>

        <button type="submit">Submit choices</button>


      </form>

      <div className="display" style={{ fontSize: "4rem" }}>
        {name}
        <p>Dropdown state is: {dropdownState}</p>
      </div>
    </>
  );
}

export default Form;
