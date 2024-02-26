import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/structure/Header.jsx";
import Menu from "./components/structure/Menu.jsx";
import Wiki from "./components/Wiki.jsx";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/wiki" element={<Wiki />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
