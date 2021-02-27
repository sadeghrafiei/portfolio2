import React from "react";
import ButtonsBottom from "../component/ButtonsBottom";
import DynamicText from "../component/DynamicText";
import Mouse from "../component/Mouse";
import Navigation from "../component/Navigation";
import SocialNetwork from "../component/SocialNetwork";

const Home = () => {
  return (
    <main>
      <Mouse />
      <div className="home">
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <h1>Sadegh Rafiei</h1>
            <h2>
              <DynamicText />
            </h2>
          </div>
        </div>
        <ButtonsBottom right={"/project-1"} />
      </div>
    </main>
  );
};

export default Home;
