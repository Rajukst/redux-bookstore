import "./App.css";
import FakeData from "./FakeData/FakeData.json";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import Nested from "./Components/Nested/Nested";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard*" element={<Nested />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
