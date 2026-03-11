import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";

import Nav from "./components/nav.tsx";
import Footer from "./components/footer.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import WhatsappFloat from "./components/WhatsappFloat.tsx";

function App() {
  return (
    <BrowserRouter>
<ScrollToTop />
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
<WhatsappFloat />
      <Footer />

    </BrowserRouter>
  );
}

export default App;