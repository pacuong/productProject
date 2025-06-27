import Typography from "../Typography";
import { ProductComponentProps } from "../../hook/useCart";

const Product = ({ products, addToCart }: ProductComponentProps) => {
  return (
    <div className="flex flex-wrap gap-12 justify-between p-24">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col rounded-xl w-[22%] bg-green-100"
        >
          <img
            className="w-full border-blue-100 rounded-t-xl h-56"
            src={product.image}
            alt={product.name}
          />
          <div className="px-4 py-6 flex flex-col justify-between flex-1 gap-3">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <Typography className="text-xl text-black-100">
                  {product.name}
                </Typography>
                <Typography className="text-xl text-primary-red">
                  {product.price.toLocaleString()}₫
                </Typography>
              </div>
              <Typography className="text-l text-gray-100">
                {product.titleProduct}
              </Typography>
            </div>

            <div className="flex justify-between gap-2 text-base text-white-100">
              <button
                onClick={() => addToCart?.(product)}
                className="w-1/2 py-2 rounded-md bg-primary-red hover:opacity-90 focus:outline-none focus:ring-0"
              >
                Add to cart
              </button>
              <button className="w-1/2 py-2 rounded-md bg-blue-25 hover:opacity-90 focus:outline-none focus:ring-0">
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
