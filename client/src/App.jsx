import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="p-5">
      <BrowserRouter>
        <Nav />
        <Routes>{/* <Route /> */}</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
