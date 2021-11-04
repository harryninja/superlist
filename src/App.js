import "./App.css";
import Nav from "./Nav";
import HeroForm from "./HeroForm";
import HeroList from "./HeroList";
import HeroContextProvider from "./HeroContext";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <HeroContextProvider>
      <div>
        <Nav />
        <HeroForm />
        <div className="App" style={{ background: "crimson" }}>
          <HeroList />
        </div>
      </div>
    </HeroContextProvider>
  );
}

export default App;
