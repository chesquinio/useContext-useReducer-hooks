"use client";

import { useFilter } from "@/hooks/useFilter";
import { useId } from "react";

export default function Header() {
  const { filter, setFilter } = useFilter();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  return (
    <div className="fixed w-full h-16 bg-gray-700">
      <div className="flex justify-center">
        <input
          id={minPriceFilterId}
          type="range"
          min="0"
          max="1000"
          value={filter.minPrice}
          onChange={(e) =>
            setFilter((prevState) => ({
              ...prevState,
              minPrice: e.target.value,
            }))
          }
        />
        <span>{filter.minPrice}</span>
        <select
          id={categoryFilterId}
          onChange={(e) =>
            setFilter((prevState) => ({
              ...prevState,
              category: e.target.value,
            }))
          }
          className="text-black"
        >
          <option value="all">Todo</option>
          <option value="laptops">Notebooks</option>
          <option value="fragrances">Perfumes</option>
        </select>
      </div>
    </div>
  );
}
