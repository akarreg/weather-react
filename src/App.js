import logo from "./logo.svg";
import "./App.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <h2> Hello to react</h2>
          <ClimbingBoxLoader color="#5fd02a" size={23} />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Skeleton count={3} />
        </a>
      </header>
    </div>
  );
}

export default App;
