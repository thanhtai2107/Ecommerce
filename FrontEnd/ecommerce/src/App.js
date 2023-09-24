import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import SingleBlog from "./pages/SingleBlog";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ourstore" element={<OurStore />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
