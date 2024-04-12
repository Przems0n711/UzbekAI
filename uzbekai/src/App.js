import "./App.scss";
import Header from "./components/Header";
import Body from "./components/Body";
import Weather from "./components/Weather";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="sigma">
        <Body />
        <Weather />
      </div>
      <Footer />
    </div>
  );
}

export default App;
