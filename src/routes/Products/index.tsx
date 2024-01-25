import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import ProductsBar from "../../components/ProductsBar";

export default function Products() {
  return (
    <>
      <Header />
      <ProductsBar />
      <Outlet />
    </>
  );
}
