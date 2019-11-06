import React from "react";
import "./App.css";
import Header from "./header";
import Footer from "./footer";
import AppRouter from "./AppRouter";

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
