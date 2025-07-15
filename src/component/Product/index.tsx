import { ProductProps } from "@/types/cart";
import Typography from "../Typography";

interface ProductComponentProps {
  products: ProductProps[];
  addToCart: (product: ProductProps) => Promise<void>;
}

const Product = ({ products, addToCart }: ProductComponentProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 py-12">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
        >
          <img
            className="w-full h-56 object-cover"
            src={product.image}
            alt={product.name}
          />

          <div className="p-4 flex flex-col justify-between flex-1 gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <Typography className="text-lg font-semibold text-gray-800">
                  {product.name}
                </Typography>
                <Typography className="text-lg font-bold text-primary-red">
                  {product.price.toLocaleString()}₫
                </Typography>
              </div>
              <Typography className="text-sm text-gray-500">
                {product.titleProduct}
              </Typography>
            </div>

            <div className="flex gap-3 mt-auto">
              <button
                onClick={() => addToCart(product)}
                className="flex-1 py-2 rounded-md bg-primary-red text-white font-medium hover:bg-red-600"
              >
                Add to Cart
              </button>
              <button className="flex-1 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-300 ">
                Compare
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
