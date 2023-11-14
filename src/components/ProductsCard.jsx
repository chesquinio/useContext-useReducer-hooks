import { useCart } from "@/hooks/useCart";

export default function ProductsCard({ product }) {
  const { cart, addToCart, removeToCart } = useCart();

  const isProductInCart = (productToCheck) => {
    return cart.some((item) => item.id === productToCheck.id);
  };

  return (
    <div className="flex flex-col items-center bg-gray-500 rounded">
      <div className="m-5 h-42 w-42">
        <img
          className="object-cover w-full h-full"
          src={product.thumbnail}
          alt={product.description}
        />
      </div>
      <footer>
        <span>
          {product.title} - ${product.price}
        </span>
        {isProductInCart(product) ? (
          <button onClick={() => removeToCart(product)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        ) : (
          <button onClick={() => addToCart(product)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        )}
      </footer>
    </div>
  );
}
