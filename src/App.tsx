import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import About from "./routes/About";
import AboutBody from "./routes/About/AboutBody";
import NotFound from "./routes/NotFound";
import Products from "./routes/Products";
import Computers from "./routes/Products/Computers";
import Electronics from "./routes/Products/Electronics";
import Books from "./routes/Products/Books";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomeBody />} />
        </Route>
        <Route path="/products" element={<Products />}>
          <Route path="/products/computers" element={<Computers />} />
          <Route path="/products/electronics" element={<Electronics />} />
          <Route path="/products/books" element={<Books />} />
        </Route>

        <Route path="/about" element={<About />}>
          <Route path="/about" element={<AboutBody />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
