import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Certifications,
} from "./components";

const App = () => {
  const [showNavbar, setShowNavbar] = useState(true); // 👈 controls navbar visibility

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <StarsCanvas />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          {showNavbar && <Navbar />}
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Certifications />
        <Works setShowNavbar={setShowNavbar} />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;