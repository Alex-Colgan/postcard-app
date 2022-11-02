//import logo from "./logo.svg";
import "./App.css";
import Postcard from "./Components/Postcard.js";
//import Tool from './Components/Tool.js'
//import beach from './beach.avif'
import Box from "./Components/box.js"; // Imports the Box.js
import Form from "./Components/Form/index.js"; // Imports the index.js from the Form folder
import Accordion from "./Components/Accordion.js";
import Accordion2 from "./Components/Accordion2.js";
import { data } from "./Components/data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Comment here 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        */}

        <div>
          <h2>FAQ</h2>
          <Accordion title="How do I contact you?" />
          <Accordion title="What is the best way to use your product?" />
          <Accordion title="Is there a phone number?" />
        </div>

        <div>
          <h2>FAQ2</h2>
          {
            // Use the map function to map the data to output multiple accordions.
            data.map(function(item, index){
              return (
                <Accordion2 title={item.question}>
                  {item.answer}
                </Accordion2>
              )
            })
          }
        </div>

        <div>
          <h2>Name form.</h2>
          <Form />
        </div>

        <div>
          <Box>This is the First box.</Box>
        </div>

        <div>
          <Postcard
            text="Beach"
            image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
          />
        </div>
      </header>

      {/* Comment here 
      <div>
        <Tool name="Ihechikara" tool="Figma"/>
      </div>
      */}
    </div>
  );
}

export default App;
