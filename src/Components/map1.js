import { useState } from "react";
function Map1(props) {
  let animalsArray = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  const [list, setList] = useState(animalsArray);
  const drinks = ["water", "tea", "coffee"];
  function changeList() {
    setList(drinks);
  }
  return (
    <div>
      <ul>
        {list.map((animal) => (
          <li>{animal}</li>
        ))}
      </ul>
      <p onClick={changeList}>Change List.</p>
    </div>
  );
}
export default Map1;
