import { Button, Menu } from "@mantine/core";
import Cart from "../Cart";
import { CartItem } from "../../hook/useCart";

interface ProductComponentProps {
  products: CartItem[];
  increase: (id: string) => void;
  decrease: (id: string) => void;
  removeFromCart: (id: string) => void;
  total: number;
}

const MenuComponent = ({
  products,
  increase,
  decrease,
  removeFromCart,
  total,
}: ProductComponentProps) => {
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
                      className="w-1 h-2 bg-gray-50 rounded flex items-center justify-center hover:opacity-90 focus:outline-none"
                      onClick={() => decrease(product.id)}
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      className="w-1 h-2 bg-gray-50 rounded flex items-center justify-center hover:opacity-90 focus:outline-none"
                      onClick={() => increase(product.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="bg-primary-red text-white text-sm rounded hover:opacity-90 focus:outline-none focus:ring-0"
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
