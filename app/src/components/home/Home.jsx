import HomeMain from "./HomeMain";
import Footer from "../common/Footer";
import LastSection from "./LastSection";
import React, { Component } from "react";
import Navbar from "../common/NavBar/Navbar";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="page-wrapper">
          <Navbar />
          <HomeMain />
          <Footer />
        </div>
        <LastSection />
      </div>
    );
  }
}

export default Home;
