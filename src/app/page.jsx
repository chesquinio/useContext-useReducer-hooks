import Cart from "@/components/Cart";
import Header from "@/components/Header";
import Products from "@/components/Products";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";

export default async function Home() {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Products products={products} />
      <Cart />
    </main>
  );
}
