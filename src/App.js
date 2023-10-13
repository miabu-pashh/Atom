import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import ChatBot from "./components/ChatBot";
import Routes from "./components/Routes";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      {/* Render the HomePage component */}
      {/* <Routes /> */}
      <NavBar />
      <Routes />

      {/* Optionally, render the ChatBot component */}
      {/* <ChatBot /> */}
    </div>
  );
}

export default App;
