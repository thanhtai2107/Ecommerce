import Layout from "../components/Layout";
import AdminLayout from "../components/admin/AdminLayout";
import ProductList from "../components/admin/list/ProductList";
import NewProduct from "../components/admin/new/NewProduct";
import UpdateProduct from "../components/admin/update/UpdateProduct";
import About from "../pages/About";
import Admin from "../pages/Admin";
import Blog from "../pages/Blog";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import Contact from "../pages/Contact";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import OurStore from "../pages/OurStore";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import Search from "../pages/Search";
import SingleBlog from "../pages/SingleBlog";
import SingleProduct from "../pages/SingleProduct";
import Wishlist from "../pages/Wishlist";
import { PrivateRoute } from "./PrivateRoute";

export const routes = [
  { path: "/", component: Home, layout: Layout },
  { path: "/about", component: About, layout: Layout },
  { path: "/contact", component: Contact, layout: Layout },
  { path: "/product", component: OurStore, layout: Layout },
  { path: "/search", component: Search, layout: Layout },
  { path: "/product/:productId", component: SingleProduct, layout: Layout },
  { path: "/cart", component: Cart, layout: Layout, private: PrivateRoute },
  {
    path: "/checkout",
    component: CheckOut,
    layout: Layout,
    private: PrivateRoute,
  },
  { path: "/blog", component: Blog, layout: Layout },
  { path: "/blog/:blogId", component: SingleBlog, layout: Layout },
  {
    path: "/wishlist",
    component: Wishlist,
    layout: Layout,
    private: PrivateRoute,
  },
  { path: "/login", component: Login, layout: Layout },
  { path: "/register", component: Register, layout: Layout },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    layout: Layout,
    private: PrivateRoute,
  },
  {
    path: "/reset-password",
    component: ResetPassword,
    layout: Layout,
    private: PrivateRoute,
  },
  {
    path: "/admin",
    component: Admin,
    layout: AdminLayout,
    private: PrivateRoute,
  },
  {
    path: "/admin/productlist",
    component: ProductList,
    layout: AdminLayout,
    private: PrivateRoute,
  },
  {
    path: "/admin/addproduct",
    component: NewProduct,
    layout: AdminLayout,
    private: PrivateRoute,
  },
  {
    path: "/admin/updateproduct/:productId",
    component: UpdateProduct,
    layout: AdminLayout,
    private: PrivateRoute,
  },
];
