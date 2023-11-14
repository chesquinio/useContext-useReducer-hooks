"use client";

import { useFilter } from "@/hooks/useFilter";
import ProductsCard from "./ProductsCard";

export default function Products({ products }) {
  const { filterProducts } = useFilter();
  const filteredProducts = filterProducts(products);

  return (
    <section className="container mt-20">
      <div
        className={`${
          filteredProducts.length > 0
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10"
            : "flex justify-center items-center"
        }`}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))
        ) : (
          <h3 className="text-xl">No se han encuentrado productos</h3>
        )}
      </div>
    </section>
  );
}
