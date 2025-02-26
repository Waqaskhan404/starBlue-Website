"use client";
import { useState, useEffect } from "react";
import { products, categories } from "./products";
import { useRouter } from "next/navigation";

export default function ProductPage() {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    return () => setSelectedCategories([]); // Reset selection on unmount
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1);
  };

  const filteredProducts = selectedCategories.length
    ? products.filter((product) =>
        selectedCategories.includes(product.category)
      )
    : products;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "asc") return a.name.localeCompare(b.name);
    if (sortOption === "desc") return b.name.localeCompare(a.name);
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const getPageNumbers = () => {
    if (totalPages <= 1) return [];
    if (totalPages <= 6) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, "...", totalPages];
    } else if (currentPage >= totalPages - 2) {
      return [
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      return [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      ];
    }
  };

  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleClick = (productId) => {
    router.push(`/product/${productId}`);
  };

  return (
    <div className="container p-4 sm:p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Sidebar (Categories) */}
      <div className="md:col-span-1 bg-green-300 border p-4 rounded-lg">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 text-white bg-green-900 p-2 rounded-lg text-center">
          Plant Categories
        </h2>
        {categories.map((category) => (
          <div
            key={category}
            className="mb-2 flex items-center hover:bg-green-200 p-2 rounded-lg"
          >
            <input
              type="checkbox"
              id={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
              className="mr-2 cursor-pointer"
            />
            <label htmlFor={category} className="cursor-pointer text-green-900">
              {category}
            </label>
          </div>
        ))}

        {/* Just Arrived Section */}
        <h2 className="text-lg sm:text-xl font-semibold mt-6 mb-2 text-white bg-green-900 p-2 rounded-lg text-center">
          Plant Just Arrived
        </h2>
        <div className="flex flex-wrap sm:flex-nowrap gap-2">
          <div className="border p-2 bg-white shadow-lg rounded-lg flex-1">
            <img
              src="/california-fuchsia.jpg"
              alt="California Fuchsia"
              className="w-full h-28 sm:h-32 object-cover rounded-lg"
            />
            <h3 className="text-base sm:text-lg font-semibold mt-2 text-center text-green-900">
              California Fuchsia
            </h3>
          </div>
          <div className="border p-2 bg-white shadow-lg rounded-lg flex-1">
            <img
              src="/shrubs1.jpg"
              alt="Arctic Snow"
              className="w-full h-28 sm:h-32 object-cover rounded-lg"
            />
            <h3 className="text-base sm:text-lg font-semibold mt-2 text-center text-green-900">
              Arctic Snow
            </h3>
          </div>
        </div>
      </div>

      {/* Product Listing */}
      <div className="md:col-span-3">
        {/* Sorting Dropdown */}
        <div className="flex justify-end mb-4">
          <select
            onChange={(e) => setSortOption(e.target.value)}
            className="border p-2 sm:p-3 bg-green-500 text-white rounded-lg cursor-pointer shadow-lg transition duration-200 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700"
          >
            <option value="default" className="text-gray-700">
              Default
            </option>
            <option value="asc" className="text-gray-700">
              Title A - Z
            </option>
            <option value="desc" className="text-gray-700">
              Title Z - A
            </option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {paginatedProducts.map((product) => (
            <div
              key={product.id}
              className="border p-2 bg-white shadow-md rounded-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-200 cursor-pointer"
              // onClick={() => handleClick(product.id)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover rounded-lg"
              />
              <h3 className="text-base sm:text-lg font-semibold mt-2 text-center text-green-900">
                {product.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="p-6 flex justify-center mt-4 space-x-2">
          {currentPage > 1 && (
            <button
              className="text-sm px-2 py-1 sm:text-base sm:px-4 sm:py-2 border rounded-lg bg-green-900 text-white font-semibold"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              Prev
            </button>
          )}
          {getPageNumbers().map((num, index) =>
            num === "..." ? (
              <span
                key={index}
                className="text-sm px-2 py-1 sm:text-base sm:px-4 sm:py-2 border rounded-lg bg-green-900 text-white"
              >
                {num}
              </span>
            ) : (
              <button
                key={index}
                className={`text-sm px-2 py-1 sm:text-base sm:px-4 sm:py-2 border rounded-lg text-white font-semibold transition duration-200 ${
                  currentPage === num ? "bg-orange-500" : "bg-green-900 hover:bg-green-700"
                }`}
                onClick={() => setCurrentPage(num)}
              >
                {num}
              </button>
            )
          )}
          {currentPage < totalPages && (
            <button
              className="text-sm px-2 py-1 sm:text-base sm:px-4 sm:py-2 border rounded-lg bg-green-900 text-white font-semibold"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            >
              Next
            </button>
          )}
        </div>
        
        )}
      </div>
    </div>
  );
}
