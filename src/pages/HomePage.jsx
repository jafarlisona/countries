import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

function HomePage() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      ,
      <section>
        <Cards />
      </section>
    </>
  );
}

export default HomePage;
