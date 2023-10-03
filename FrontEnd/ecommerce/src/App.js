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
import CheckOut from "./pages/CheckOut";
import Admin from "./pages/Admin";
import AdminLayout from "./components/admin/AdminLayout";
import ProductList from "./components/admin/list/ProductList";
import UpdateProduct from "./components/admin/update/UpdateProduct";
import NewProduct from "./components/admin/new/NewProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<OurStore />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Admin />} />
            <Route path="/admin/productlist" element={<ProductList />} />
            <Route path="/admin/addproduct" element={<NewProduct />} />
            <Route
              path="/admin/updateproduct/:id"
              element={<UpdateProduct />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
