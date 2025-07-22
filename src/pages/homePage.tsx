import { useProductList } from "@/hook/useProductList";
import HeaderMain from "@/component/Header";
import { useCart } from "@/context/CartContext";
import Product from "@/component/Product";

const HomePage = () => {
  const { productList } = useProductList();
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col">
      <HeaderMain />
      <Product products={productList} addToCart={addToCart} />
    </div>
  );
};

export default HomePage;
