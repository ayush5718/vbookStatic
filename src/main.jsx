import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import HeroSection from "./Components/Home/HeroSection.jsx";
import About from "./Components/About/About.jsx";
import Services from "./Components/Services/Services.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import StudentPreRegisteration from "./Components/PreRegisteration/StudentPreRegisteration.jsx";
import Teacher from "./Components/Teacher/Teacher.jsx";
import OurTeam from "./Components/OurTeam/OurTeam.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="/" element={<HeroSection />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path='/' element={<Services/>}/> */}
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/ourteams" element={<OurTeam />} />
      <Route path="/registeration" element={<StudentPreRegisteration />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);