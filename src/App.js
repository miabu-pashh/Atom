import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import Routes from "./components/Routes";
import NavBar from "./components/NavBar";
import ChatBot from "./components/ChatBot";
import MyChatBot from "./components/MyChatBot";
function App() {
  return (
    <div className="App">
      {/* Render the HomePage component */}
      {/* <Routes /> */}
      {/* <NavBar /> */}
      {/* <Routes /> */}
      {/* <ChatBot/> */}
      <MyChatBot/>
      {/* Optionally, render the ChatBot component */}
      {/* <ChatBot /> */}
    </div>
  );
} 

export default App;
