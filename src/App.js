import React from "react";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return <div className="App">
      <Wrapper>
        <Hero backgroundImage="../components/Hero/office_cropped.JPG">
              <h1>Employee Roster</h1>
        </Hero>
        <Main/>
      </Wrapper>
      <Footer/>  
    </div>;
}

export default App;
