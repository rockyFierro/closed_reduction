import logo from './logo.svg';
import './App.css';
import FunctionalComp from './Components/FunctionalComp';
import ClassComp from './Components/ClassComp';

function App() {
  console.log("index: app: App has loaded.");

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <div className="main">
        <FunctionalComp/>        
      </div>
      <div>
        <ClassComp/>
      </div>
    </div>
  );
}

export default App;
