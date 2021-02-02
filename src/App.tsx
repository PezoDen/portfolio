import React from 'react';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Works from "./works/Works";
import HireMe from "./hireMe/HireMe";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Skills/>
      <Works/>
      <HireMe/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
