import React from "react";
import { useEffect } from "react";
import back from "../../assets/img/help.jpg";
import Slide from "./Slide";
import Clinics from "./Clinics.";
import ContactUs from "./ContactUs";
const NavBar = React.lazy(() => import("../../Navbar/Header/Navbar"));
const Upperbar = React.lazy(() => import("../../Navbar/Upperbar/Upperbar"));

function Home() {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${back}')  `;
  }, []);
  return (
    <div>
      <Upperbar />
      <NavBar />
      <div className="container">
        <div className="row">
          <Slide />
        </div>
        <div className="row mt-5">
          <Clinics />
        </div>
      </div>
      <div>
        <ContactUs />
      </div>
    </div>
  );
}

export default Home;
