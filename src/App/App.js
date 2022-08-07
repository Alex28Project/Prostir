import React from "react";
import { ThemeProvider } from "react-bootstrap";
import "./App.css";

import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <Nav />
        <Header />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
