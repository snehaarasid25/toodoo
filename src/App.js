import "./App.css";
import Header from "./Components/Header"; //as it is default exported use any name (in place of Header)
import Home from "./Components/Home";


function App() {
  return (
    <div>
      <Header />
      <Home />
      
    </div>
  );
}

export default App;
