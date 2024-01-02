import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import "./components/ParallaxStar.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="mainParallax">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Navbar />
        <div className="relative z-0">
          <Hero />
          <StarsCanvas />
        </div>
        {/* <div className="relative z-0"> */}
          <About />
          {/* <StarsCanvas />
        </div>
        <div className="relative z-0"> */}
          <Experience />
          {/* <StarsCanvas />
        </div> */}
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        {/* <div className="relative z-0"> */}
          <Tech />
          {/* <StarsCanvas />
        </div>
        <div className=" z-0"> */}
          <Works />
          {/* <StarsCanvas />
        </div> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
