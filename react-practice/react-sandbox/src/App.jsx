import "./App.css";
import { Route, Routes } from "react-router";

import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<h1>ABOUT PAGE</h1>} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
    </>
  );
};

export default App;
