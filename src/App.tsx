import React from "react";
import "./App.css";
import Header from "./components/Header";
import {SVGSource} from "./components/Icons";
import MainLayout from "./layouts/main";
import Main from "./pages/Main";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SVGSource/>
      <Header />
      <BrowserRouter>
        <MainLayout children={<Main />}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
