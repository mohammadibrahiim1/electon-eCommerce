import React, { useState, useMemo } from "react";
import {
  ShoppingCart,
  ArrowRight,
  Star,
  Package,
  Truck,
  ShieldCheck,
  Check,
  Filter,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { useGetProductsQuery } from "../products/services/api/productApi";

const Home2 = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { slug: "all", name: "All Products" },
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
  const { data: products, pagination } = data || {};

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#37352F] font-sans selection:bg-blue-100">
      {/* --- 1. Hero Section --- */}
      <header className="relative pt-12 pb-24 border-b border-[#E9E9E7] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">
              <Package size={12} /> Global Curated Market
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-[#37352F]">
              Quality <br />
              <span className="text-blue-600">Simplified.</span>
            </h1>
            <p className="text-xl text-[#787774] max-w-md leading-relaxed">
              Skip the clutter. Discover a high-end collection of daily
              essentials, from tech to couture, ethically sourced and
              precision-crafted.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#37352F] text-white px-10 py-4 rounded-xl font-bold hover:bg-black transition-all flex items-center gap-3 group">
                Browse Shop{" "}
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              <button className="px-10 py-4 rounded-xl font-bold border border-[#E9E9E7] hover:bg-[#F1F1EF] transition-all">
                The Lookbook
              </button>
            </div>
          </div>
          <div className="relative lg:h-[600px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-transparent rounded-[40px] -rotate-3 border border-[#E9E9E7]"></div>
            <img
              src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=800"
              alt="Lifestyle"
              className="relative rounded-[40px] w-full h-full object-cover shadow-2xl shadow-black/10 transition-transform hover:scale-[1.02] duration-700"
            />
          </div>
        </div>
      </header>

      {/* --- 2. Values / Trust Signals --- */}
      <section className="py-16 bg-white border-b border-[#E9E9E7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              {
                icon: <Truck className="text-blue-600" />,
                title: "Express Logistics",
                desc: "Carbon-neutral shipping globally within 3-5 days.",
              },
              {
                icon: <ShieldCheck className="text-indigo-600" />,
                title: "Secure Checkout",
                desc: "PCI-DSS Level 1 encryption for every transaction.",
              },
              {
                icon: <Star className="text-amber-500" />,
                title: "Authenticity",
                desc: "Every item is verified by our in-house experts.",
              },
            ].map((v, i) => (
              <div key={i} className="flex flex-col gap-5 md:flex-row">
                <div className="p-4 bg-[#F7F7F5] rounded-2xl w-fit h-fit">
                  {v.icon}
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-bold">{v.title}</h4>
                  <p className="text-[#ADADA7] text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. Category & Catalog Section --- */}
      <section className="py-24 max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Product Grid Area */}
          <div className="flex-1 space-y-12">
            <div className="flex items-end justify-between border-b border-[#E9E9E7] pb-6">
              <div>
                <h2 className="text-4xl font-bold tracking-tight">
                  Essential Pieces
                </h2>
                <p className="text-[#ADADA7] mt-2">
                  Showing {products?.length} items from all products
                </p>
              </div>
              <select className="text-sm font-bold bg-transparent border-none cursor-pointer focus:ring-0">
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
              {products?.map((product) => (
                <div key={product.id} className="relative group">
                  <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-[#F7F7F5] border border-[#E9E9E7]">
                    <img
                      src={product?.thumbnail}
                      alt={product?.name}
                      className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                        {product.tag}
                      </span>
                    </div>
                    <button className="absolute bottom-6 right-6 p-4 bg-[#37352F] text-white rounded-2xl shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-600">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                  <div className="flex items-start justify-between mt-6">
                    <div>
                      <h3 className="text-lg font-bold transition-colors cursor-pointer group-hover:text-blue-600">
                        {product.name}
                      </h3>
                      <p className="text-[#ADADA7] text-sm uppercase font-bold tracking-tighter mt-1">
                        {product.category.replace("-", " ")}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-black text-[#37352F]">
                        ${product.price}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star
                          size={12}
                          className="text-amber-400 fill-amber-400"
                        />
                        <span className="text-[12px] font-black">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. Feature Section --- */}
      <section className="py-24">
        <div className=" bg-[#37352F] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px]"></div>

          <h2 className="relative z-10 mb-8 text-4xl font-bold tracking-tighter md:text-6xl">
            Member Exclusive: <br />
            Free shipping over $100.
          </h2>
          <p className="relative z-10 max-w-xl mx-auto mb-12 text-lg leading-relaxed text-gray-400">
            Join the MODERN loyalty program to get early access to new
            collections and earn points on every purchase.
          </p>
          <div className="relative z-10 flex flex-col justify-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-8 py-4 text-white transition-all border rounded-2xl bg-white/10 border-white/10 placeholder:text-gray-500 sm:w-80 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button className="bg-white text-[#37352F] px-10 py-4 rounded-2xl font-black hover:scale-105 transition-transform">
              Sign Up Free
            </button>
          </div>
        </div>
      </section>

      {/* --- 5. Transparency Section --- */}
      <section className="py-24 border-y border-[#E9E9E7]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="grid order-2 grid-cols-2 gap-6 lg:order-1">
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=400"
                className="object-cover w-full h-64 rounded-3xl"
                alt="Logistics"
              />
              <div className="p-8 bg-[#F1F1EF] rounded-3xl border border-[#E9E9E7]">
                <h4 className="mb-2 text-4xl font-black">99%</h4>
                <p className="text-sm font-bold text-[#787774] leading-tight uppercase tracking-widest">
                  Recyclable <br />
                  Packaging
                </p>
              </div>
            </div>
            <div className="pt-12 space-y-6">
              <div className="p-8 text-white bg-blue-600 rounded-3xl">
                <h4 className="mb-2 text-4xl font-black">24/7</h4>
                <p className="text-sm font-bold leading-tight tracking-widest uppercase">
                  Client <br />
                  Concierge
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=400"
                className="object-cover w-full h-64 rounded-3xl"
                alt="Storage"
              />
            </div>
          </div>
          <div className="order-1 space-y-8 lg:order-2">
            <h2 className="text-5xl font-bold leading-none tracking-tighter">
              Global Standards, <br />
              Local Origins.
            </h2>
            <p className="text-lg text-[#787774] leading-relaxed">
              We partner with manufacturers who prioritize human rights and
              environmental stewardship. Our supply chain is audited biannually
              to ensure it meets our rigorous "Modern Standard" for quality and
              ethics.
            </p>
            <div className="space-y-6">
              {[
                {
                  t: "Ethical Manufacturing",
                  d: "Fair wages and safe conditions at all factory partners.",
                },
                {
                  t: "Sustainable Materials",
                  d: "Using FSC-certified wood and recycled electronics where possible.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 text-green-600 bg-green-100 rounded-full">
                    <Check size={14} strokeWidth={4} />
                  </div>
                  <div>
                    <h6 className="font-bold">{item.t}</h6>
                    <p className="text-sm text-[#ADADA7]">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="flex items-center gap-2 pb-1 text-sm font-black transition-colors border-b-2 border-blue-600 hover:text-blue-600 group">
              View Transparency Report 2026{" "}
              <ChevronRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home2;
