"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { products } from "../components/products";

function SearchComponent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (query) {
      const lowerQuery = query.toLowerCase();
      const results = products.filter(
        (p) => p.name.toLowerCase().includes(lowerQuery) || p.category.toLowerCase().includes(lowerQuery)
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [query]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border rounded-lg shadow-md p-2 hover:shadow-lg transition transform hover:scale-105">
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-md" loading="lazy" />
              <h2 className="text-sm font-semibold mt-2 text-center">{product.name}</h2>
              <p className="text-xs text-gray-600 text-center">{product.category}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products found.</p>
      )}
    </div>
  );
}

export default function SearchResults() {
  return (
    <Suspense fallback={<p className="text-gray-500">Loading...</p>}>
      <SearchComponent />
    </Suspense>
  );
}
