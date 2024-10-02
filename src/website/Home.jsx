import Footer from "@/partials/Footer.jsx";
import Header from "@/partials/Header.jsx";
import React from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import Books from "./Books";
import Feature from "./Feature";
import Popular from "./Popular.jsx";
import Recent from "./Recent";
import Video from "./Video.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Feature />
      <Books />
      <Recent />
      <Video />
      <Popular />
      <Footer />
    </>
  );
};

export default Home;
