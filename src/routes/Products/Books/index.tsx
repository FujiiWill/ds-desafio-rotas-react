import ProductItem from "../../../components/ProductItem";

export default function Books() {
  return (
    <>
      <div className="dflex container">
        <ProductItem text="Livro 1" />
        <ProductItem text="Livro 2" />
        <ProductItem text="Livro 3" />
      </div>
    </>
  );
}
