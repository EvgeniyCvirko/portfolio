import React from 'react';
import './App.scss';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Footer} from "./footer/Footer";

function App() {
  return (
    <div className="App">
            <Header/>
            <Main/>
            <Footer/>
    </div>
  );
}

export default App;
