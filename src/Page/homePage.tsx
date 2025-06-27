import HeaderMain from "../component/Header";
import Product from "../component/Product";
import { useProductList } from "../hook/useProductList";
import { useCart } from "../hook/useCart";

const HomePage = () => {
  const { productList } = useProductList();
  const { cartItems, addToCart, increase, decrease, removeFromCart, total } =
    useCart();

  return (
    <div className="flex flex-col">
      <HeaderMain
        cart={cartItems}
        increase={increase}
        decrease={decrease}
        removeFromCart={removeFromCart}
        total={total}
      />
      <Product products={productList} addToCart={addToCart} />
    </div>
  );
};

export default HomePage;
