//import logo from "./logo.svg";
import "./App.css";
import Postcard from "./Components/Postcard";
//import Tool from './Components/Tool'

//import beach from './beach.avif'

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
          <h2>Hello from App.</h2>
          <Postcard Text="Beach" Image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"/>
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
