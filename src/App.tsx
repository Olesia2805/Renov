import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Portfolio from "./pages/Portfolio/Portfolio";
import Booking from "./pages/Booking/Booking";
import Pricing from "./pages/Pricing/Pricing";
import Testimonials from "./pages/Testimonials/Testimonials";
import FAQ from "./pages/FAQ/FAQ";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "testimonials",
        element: <Testimonials />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "comming-soon",
        element: <ComingSoon />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
