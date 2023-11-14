import { CartProvider } from "./cart";
import { FilterProvider } from "./filter";

export default function Provider({ children }) {
  return (
    <FilterProvider>
      <CartProvider>{children}</CartProvider>
    </FilterProvider>
  );
}
