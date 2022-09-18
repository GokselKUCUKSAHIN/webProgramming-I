import React from 'react';
import '../styles/App.css';
import Info from "./Info";
import Footer from "./Footer";
import Pricing from "./Pricing";

function App() {
    return (
        <>
            <Info/>
            <Pricing/>
            <Footer/>
        </>
    );
}

export default App;

/*
<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>
 */