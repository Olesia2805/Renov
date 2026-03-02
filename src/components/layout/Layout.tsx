import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import Subscription from "./Subscription";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
        <TestimonialsSection />
        <FAQSection />
        <Subscription />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
