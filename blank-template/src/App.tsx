import { Routes, Route } from "react-router-dom";
import RootLayout from "@/components/RootLayout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Blog from "@/pages/Blog";
import SingleBlog from "@/pages/SingleBlog";
import Contact from "@/pages/Contact";
import Support from "@/pages/Support";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Checkout from "@/pages/Checkout";
import SingleProductDetails from "@/pages/SingleProductDetails";
import RegularPage from "@/pages/RegularPage";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/single-blog" element={<SingleBlog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/single-product-details" element={<SingleProductDetails />} />
        <Route path="/regular-page" element={<RegularPage />} />
      </Route>
    </Routes>
  );
}
