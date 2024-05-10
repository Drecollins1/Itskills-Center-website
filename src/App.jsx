import React, { useEffect } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Applayout from "./pages/Applayout";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Uiux from "./pages/Uiux";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import Fullstack from "./pages/Fullstack";
import Dataschool from "./pages/Dataschool";
import Mobile from "./pages/Mobile";
import ErrorPage from "./pages/ErrorPage";
import SoftwareSchool from "./pages/SoftwareSchool";
import School from "./pages/mobile/School";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Applayout />}>
      <Route index element={<Homepage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Uiux" element={<Uiux />} />
      <Route path="/frontend" element={<Frontend />} />
      <Route path="/backend" element={<Backend />} />
      <Route path="/Fullstack" element={<Fullstack />} />
      <Route path="/Dataschool" element={<Dataschool />} />
      <Route path="/Mobile" element={<Mobile />} />
      <Route path="/SoftwareSchool" element={<SoftwareSchool />} />
      <Route path="/school" element={<School />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const App = () => {
  useEffect(()=> {
    window.scrollTo(0, 0);
  })
  return <RouterProvider router={router} />;
};

export default App;
