import "./App.scss";
import Header from "./components/Header";
import Body from "./components/Body";
import Weather from "./components/Weather";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="jebac_przemka">
        <Body />
        <Weather />
      </div>
    </div>
  );
}

export default App;
