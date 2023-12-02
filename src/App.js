import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "animate.css";
import { Router } from "./router";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
