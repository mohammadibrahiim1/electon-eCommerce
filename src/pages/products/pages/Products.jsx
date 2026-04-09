import React, { useState } from "react";
import { useGetProductsQuery } from "../services/api/productApi";
import {
  ChevronLeft,
  ChevronRight,
  Loader2,
  Search,
  Filter,
  AlertCircle,
  LayoutGrid,
  ShoppingCart,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  { slug: "beauty", name: "Beauty" },
  { slug: "fragrances", name: "Fragrances" },
  { slug: "furniture", name: "Furniture" },
  { slug: "groceries", name: "Groceries" },
  { slug: "home-decoration", name: "Home Decoration" },
  { slug: "kitchen-accessories", name: "Kitchen Accessories" },
  { slug: "laptops", name: "Laptops" },
  { slug: "mens-shirts", name: "Mens Shirts" },
  { slug: "mens-shoes", name: "Mens Shoes" },
  { slug: "mens-watches", name: "Mens Watches" },
  { slug: "mobile-accessories", name: "Mobile Accessories" },
  { slug: "motorcycle", name: "Motorcycle" },
  { slug: "skin-care", name: "Skin Care" },
  { slug: "smartphones", name: "Smartphones" },
  { slug: "sports-accessories", name: "Sports Accessories" },
  { slug: "sunglasses", name: "Sunglasses" },
  { slug: "tablets", name: "Tablets" },
  { slug: "tops", name: "Tops" },
  { slug: "vehicle", name: "Vehicle" },
  { slug: "womens-bags", name: "Womens Bags" },
  { slug: "womens-dresses", name: "Womens Dresses" },
  { slug: "womens-jewellery", name: "Womens Jewellery" },
  { slug: "womens-shoes", name: "Womens Shoes" },
  { slug: "womens-watches", name: "Womens Watches" },
];

const Products = () => {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 12,
    category: "",
    brand: "",
    minPrice: "",
    maxPrice: "",
    search: "",
  });

  // ২. RTK Query Hook
  const { data, isLoading, isFetching, isError, error } =
    useGetProductsQuery(filters);

  const handlePageChange = (newPage) => {
    setFilters((prev) => ({ ...prev, page: newPage }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value, page: 1 }));
  };

  const { data: products, pagination } = data || {};

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#37352F] flex flex-col lg:flex-row font-sans selection:bg-[#2EAADC]/20 container mx-auto">
      {/* ─── SIDEBAR FILTERS (Left Side) ─── */}
      <aside className="w-full lg:w-72 border-b lg:border-r border-[#E9E9E7] bg-white lg:min-h-screen p-6 space-y-8">
        <div className="flex items-center gap-2 mb-2">
          <Filter size={18} className="text-[#ADADA7]" />
          <h2 className="text-[12px] font-bold uppercase tracking-wider text-[#787774]">
            Filters
          </h2>
        </div>

        {/* Search Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#37352F]">Search</label>
          <div className="relative group">
            <Search
              className="absolute left-3 top-2.5 text-[#ADADA7] group-focus-within:text-[#37352F]"
              size={16}
            />
            <input
              name="search"
              type="text"
              placeholder="Filter by title..."
              className="w-full pl-10 pr-4 py-2 bg-[#F7F7F5] border border-[#E9E9E7] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#2EAADC]/20 transition-all"
              onChange={handleFilterChange}
              value={filters.search}
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#37352F]">Category</label>
          <select
            name="category"
            className="w-full px-3 py-2 bg-[#F7F7F5] border border-[#E9E9E7] rounded-md text-sm focus:outline-none hover:bg-[#F1F1EF] transition-colors cursor-pointer"
            onChange={handleFilterChange}
            value={filters?.category}
          >
            <option value="">All Categories</option>
            {categories?.map((cat) => (
              <option key={cat?.slug} value={cat?.slug}>
                {cat?.name}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-[#37352F]">
            Price Range
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              name="minPrice"
              type="number"
              placeholder="Min"
              className="w-full px-3 py-2 bg-[#F7F7F5] border border-[#E9E9E7] rounded-md text-sm focus:outline-none"
              onChange={handleFilterChange}
            />
            <input
              name="maxPrice"
              type="number"
              placeholder="Max"
              className="w-full px-3 py-2 bg-[#F7F7F5] border border-[#E9E9E7] rounded-md text-sm focus:outline-none"
              onChange={handleFilterChange}
            />
          </div>
        </div>

        {/* Active Filters Summary (Optional UX) */}
        <div className="pt-6 border-t border-[#E9E9E7]">
          <p className="text-[11px] text-[#ADADA7]">
            Showing results for{" "}
            <span className="text-[#37352F] font-semibold">
              {filters?.category || "All Items"}
            </span>
          </p>
        </div>
      </aside>

      {/* ─── MAIN CONTENT (Right Side) ─── */}
      <main className="flex-1 p-6 lg:p-12">
        {/* Page Header */}
        <header className="flex items-end justify-between mb-10">
          <div className="space-y-1">
            <h1 className="text-[40px] font-bold tracking-tight text-[#37352F] leading-tight">
              Products
            </h1>
            <p className="text-[#787774] text-lg">
              Browse our curated collection of verified goods.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#ADADA7] text-sm max-sm:hidden">
            <LayoutGrid size={16} />
            <span>Gallery View</span>
          </div>
        </header>

        {/* ─── CONDITIONAL RENDERING ─── */}

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-40 space-y-4">
            <Loader2 className="animate-spin text-[#37352F]" size={40} />
            <p className="text-sm font-medium text-[#ADADA7]">Please wait...</p>
          </div>
        ) : isError ? (
          <div className="max-w-md p-8 mx-auto my-20 space-y-4 text-center border border-red-100 bg-red-50/50 rounded-xl">
            <AlertCircle className="mx-auto text-red-500" size={32} />
            <h3 className="text-lg font-bold tracking-tight text-red-800">
              Something went wrong.Please try again!
            </h3>
            <p className="text-sm text-red-600">
              {error?.data?.message ||
                "There was an issue fetching the products. Please verify your connection."}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 text-sm font-bold text-red-700 transition-colors bg-white border border-red-200 rounded-md hover:bg-red-50"
            >
              Retry Request
            </button>
          </div>
        ) : products?.length > 0 ? (
          <div className="space-y-12">
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 transition-opacity duration-300 ${isFetching ? "opacity-40" : "opacity-100"}`}
            >
              {products?.map((product) => (
                <div
                  key={product?._id}
                  className="group bg-white border border-[#E9E9E7] rounded-xl overflow-hidden hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300"
                >
                  {/* Image Holder */}
                  <div className="relative aspect-[4/3] bg-[#F7F7F5] overflow-hidden">
                    <img
                      src={product?.thumbnail}
                      alt={product?.title}
                      className="object-contain w-full h-full p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 transition-colors bg-black/0 group-hover:bg-black/5" />
                  </div>

                  {/* Product Details */}
                  <div className="p-4 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-[#37352F] leading-tight group-hover:text-blue-600 transition-colors">
                        {product?.title}
                      </h3>
                      <ArrowUpRight
                        size={14}
                        className="text-[#ADADA7] group-hover:text-blue-600 transition-colors shrink-0"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#F1F1EF]">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-[#ADADA7] font-bold uppercase tracking-widest">
                          Price
                        </span>
                        <span className="text-lg font-extrabold text-[#37352F] tracking-tighter">
                          ${product?.price}
                        </span>
                      </div>
                      <button className="p-2.5 bg-[#37352F] text-white rounded-lg hover:bg-blue-600 transition-all active:scale-95 shadow-sm">
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {pagination && (
              <div className="flex flex-col items-center justify-center gap-4 py-12 border-t border-[#E9E9E7]">
                <div className="flex items-center gap-6">
                  <button
                    disabled={!pagination.hasPrevPage || isFetching}
                    onClick={() => handlePageChange(filters.page - 1)}
                    className="flex items-center gap-2 px-4 py-2 border border-[#E9E9E7] rounded-md text-sm font-medium bg-white hover:bg-[#F1F1EF] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronLeft size={16} /> Previous
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[#787774]">Page</span>
                    <span className="px-3 py-1 bg-[#37352F] text-white rounded text-sm font-bold">
                      {pagination.currentPage}
                    </span>
                    <span className="text-sm text-[#787774]">
                      of {pagination.totalPages}
                    </span>
                  </div>

                  <button
                    disabled={!pagination.hasNextPage || isFetching}
                    onClick={() => handlePageChange(filters.page + 1)}
                    className="flex items-center gap-2 px-4 py-2 border border-[#E9E9E7] rounded-md text-sm font-medium bg-white hover:bg-[#F1F1EF] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    Next <ChevronRight size={16} />
                  </button>
                </div>
                <p className="text-xs text-[#ADADA7]">
                  Showing {(filters.page - 1) * filters.limit + 1} to{" "}
                  {Math.min(
                    filters.page * filters.limit,
                    pagination.totalItems,
                  )}{" "}
                  of {pagination?.totalItems} products
                </p>
              </div>
            )}
          </div>
        ) : (
          // ৪. এম্পটি স্টেট (No Data)
          <div className="flex flex-col items-center justify-center py-40 border-2 border-dashed border-[#E9E9E7] rounded-2xl bg-white">
            <LayoutGrid className="text-[#E9E9E7] mb-4" size={48} />
            <h3 className="text-lg font-bold text-[#37352F]">
              No products found
            </h3>
            <p className="text-[#787774] text-sm">
              Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;
