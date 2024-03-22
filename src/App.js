import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";

function App() {
  return (
    <div className="app">
      <Header />
      <Sidenav />
      <Body />
    </div>
  );
}

export default App;
