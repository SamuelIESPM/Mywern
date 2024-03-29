import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/structure/Header.jsx";
import Menu from "./components/structure/Menu.jsx";
import Content from "./components/structure/Content.jsx";
import Wiki from "./components/Wiki.jsx";
import Game from "./components/Game.jsx";
import Landing from "./components/Landing.jsx";
import LevelsContext from "./contexts/LevelsContext.jsx";
import UserContext from "./contexts/UserContext.jsx";
import "./App.css";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <UserContext>
          <LevelsContext>
            <Menu />
            <Content>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/game" element={<Game />}></Route>
                <Route path="/wiki" element={<Wiki />} />
              </Routes>
            </Content>
          </LevelsContext>
        </UserContext>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
