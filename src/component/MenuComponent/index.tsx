import Cart from "../Cart";
import { useCart } from "../../context/CartContext";
import { Button, Menu } from "@mantine/core";

const MenuComponent = () => {
  const { state, increase, decrease, removeFromCart, total } = useCart();
  const products = state.items;

  return (
    <Menu shadow="md" width={500}>
      <Menu.Target>
        <Button variant="unstyled">
          <Cart amount={products.length} />
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        {products.length === 0 ? (
          <Menu.Item>Giỏ hàng trống</Menu.Item>
        ) : (
          <>
            {products.map((product) => (
              <div
                key={product.id}
                className="flex gap-4 p-4 border-b items-center"
              >
                <img src={product.image} alt={product.name} className="w-32" />
                <div className="flex flex-col flex-1 gap-2 text-black-100 text-xl">
                  <span className="font-semibold text-base">
                    {product.name}
                  </span>
                  <span className="text-gray-600 text-sm mb-2">
                    Giá: {(product.price * product.quantity).toLocaleString()}₫
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      className="w-8 h-6 bg-gray-50 rounded flex items-center justify-center hover:opacity-90"
                      onClick={() => decrease(product.id)}
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      className=" w-8 h-6 bg-gray-50 rounded flex items-center justify-center hover:opacity-90"
                      onClick={() => increase(product.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="p-2 bg-primary-red text-white-100 text-sm rounded hover:opacity-90"
                  onClick={() => removeFromCart(product.id)}
                >
                  Xoá
                </button>
              </div>
            ))}
            <div className="p-4 flex justify-between items-center font-semibold text-base">
              <span>Tổng cộng:</span>
              <span className="text-gray-100">{total.toLocaleString()}₫</span>
            </div>
          </>
        )}
      </Menu.Dropdown>
    </Menu>
  );
};

export default MenuComponent;
