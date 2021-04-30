import "./App.css";

// Components
import Header from "./components/Header";
import Home from "./components/Home";

// React Router DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Header />
          <Route path="/checkout">
            <h1>hi</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
