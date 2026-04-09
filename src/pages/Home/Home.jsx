import React, { useState } from "react";
import {
  ShoppingCart,
  ArrowRight,
  Star,
  Leaf,
  Truck,
  ShieldCheck,
  Check,
} from "lucide-react";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Citrus", "Berries", "Tropical", "Exotic"];

  const fruits = [
    {
      id: 1,
      name: "Organic Dragon Fruit",
      price: 12.0,
      category: "Exotic",
      img: "https://images.unsplash.com/photo-1527325241048-218156677a55?auto=format&fit=crop&q=80&w=300",
      tag: "Best Seller",
    },
    {
      id: 2,
      name: "Fresh Strawberries",
      price: 8.5,
      category: "Berries",
      img: "https://images.unsplash.com/photo-1464960726342-68b1a30ca7aa?auto=format&fit=crop&q=80&w=300",
      tag: "New",
    },
    {
      id: 3,
      name: "Premium Avocado",
      price: 15.0,
      category: "Tropical",
      img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=300",
      tag: "Organic",
    },
    {
      id: 4,
      name: "Sicilian Oranges",
      price: 6.0,
      category: "Citrus",
      img: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&q=80&w=300",
      tag: "10% Off",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#37352F] font-sans">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-24 border-b border-[#E9E9E7]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F1EF] rounded-full text-xs font-bold uppercase tracking-wider text-[#787774]">
              <Leaf size={14} className="text-green-600" /> Purely Organic &
              Fresh
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
              Nature's Candy, <br />
              <span className="text-green-600">Delivered.</span>
            </h1>
            <p className="text-lg text-[#787774] max-w-md leading-relaxed">
              Experience the true taste of nature with our hand-picked,
              pesticide-free fruits from local sustainable farms.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <button className="bg-[#37352F] text-white px-8 py-3 rounded-lg font-bold hover:bg-black transition-all flex items-center gap-2 group">
                Shop Now{" "}
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              <button className="px-8 py-3 rounded-lg font-bold border border-[#E9E9E7] hover:bg-[#F1F1EF] transition-all">
                View Farm Map
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-square bg-[#F7F7F5] rounded-3xl overflow-hidden border border-[#E9E9E7]">
              <img
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800"
                alt="Fresh Fruits"
                className="object-cover w-full h-full mix-blend-multiply opacity-90"
              />
            </div>
            {/* Minimalist Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl shadow-black/5 border border-[#E9E9E7] hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 font-bold text-green-700 bg-green-100 rounded-full">
                  98%
                </div>
                <div>
                  <p className="text-sm font-bold">Quality Score</p>
                  <p className="text-xs text-[#ADADA7]">Based on 2k reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Business Values */}
      <section className="py-12 border-b border-[#E9E9E7]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <div className="p-3 text-blue-600 bg-blue-50 rounded-xl">
              <Truck size={24} />
            </div>
            <div>
              <h4 className="text-sm font-bold">Same Day Delivery</h4>
              <p className="text-xs text-[#ADADA7]">Order before 12 PM</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <div className="p-3 text-green-600 bg-green-50 rounded-xl">
              <Leaf size={24} />
            </div>
            <div>
              <h4 className="text-sm font-bold">Eco-Friendly Pack</h4>
              <p className="text-xs text-[#ADADA7]">100% Plastic free</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <div className="p-3 text-orange-600 bg-orange-50 rounded-xl">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="text-sm font-bold">Quality Guaranteed</h4>
              <p className="text-xs text-[#ADADA7]">Money back policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Catalog */}
      <section className="py-24 max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-end justify-between gap-6 mb-12 md:flex-row">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Summer Harvest
            </h2>
            <p className="text-[#ADADA7] text-sm italic">
              Freshly picked within the last 24 hours
            </p>
          </div>

          {/* Notion Filter Chips */}
          <div className="flex gap-2 p-1 bg-[#F1F1EF] rounded-xl overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-white text-[#37352F] shadow-sm"
                    : "text-[#787774] hover:text-[#37352F]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {fruits.map((fruit) => (
            <div key={fruit.id} className="cursor-pointer group">
              <div className="relative aspect-[4/5] bg-[#F7F7F5] border border-[#E9E9E7] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/5">
                <img
                  src={fruit.img}
                  alt={fruit.name}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase border border-[#E9E9E7]">
                    {fruit.tag}
                  </span>
                </div>
                <button className="absolute p-3 transition-all duration-300 translate-y-2 bg-white rounded-full shadow-lg opacity-0 bottom-4 right-4 group-hover:opacity-100 group-hover:translate-y-0">
                  <ShoppingCart size={18} className="text-green-600" />
                </button>
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="font-bold text-[#37352F] group-hover:text-green-600 transition-colors">
                  {fruit.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-[#787774]">
                    ${fruit.price.toFixed(2)} / kg
                  </p>
                  <div className="flex items-center gap-1">
                    <Star
                      size={12}
                      className="text-orange-400 fill-orange-400"
                    />
                    <span className="text-[12px] font-bold text-[#ADADA7]">
                      4.9
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Minimalist CTA Section */}
      <section className="pb-24">
        <div className="bg-[#37352F] p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
          {/* Decorative shapes for Notion aesthetic */}
          <div className="absolute top-0 right-0 w-64 h-64 -mt-32 -mr-32 rounded-full bg-green-500/10 blur-3xl"></div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Weekly Fruit Box <br className="hidden md:block" />
            Subscription starting at $29/mo
          </h2>
          <p className="max-w-xl mx-auto text-lg text-gray-400">
            Get a balanced mix of 10-12 seasonal fruits delivered to your
            doorstep every Monday morning.
          </p>
          <button className="bg-white text-[#37352F] px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
            Start Subscription
          </button>
        </div>
      </section>

      {/* 5. Farm-to-Table Transparency */}
      <section className="py-24 bg-white border-y border-[#E9E9E7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="grid order-2 grid-cols-2 gap-4 lg:order-1">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=400"
                  alt="Farm"
                  className="rounded-2xl border border-[#E9E9E7] shadow-sm"
                />
                <div className="p-6 bg-[#F7F7F5] rounded-2xl border border-[#E9E9E7]">
                  <h5 className="text-2xl font-bold text-green-600">0%</h5>
                  <p className="text-xs font-medium text-[#787774]">
                    Chemical Pesticides Used
                  </p>
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="p-6 bg-[#F7F7F5] rounded-2xl border border-[#E9E9E7]">
                  <h5 className="font-bold text-2xl text-[#37352F]">100%</h5>
                  <p className="text-xs font-medium text-[#787774]">
                    Sustainable Harvesting
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=400"
                  alt="Farmer"
                  className="rounded-2xl border border-[#E9E9E7] shadow-sm"
                />
              </div>
            </div>

            <div className="order-1 space-y-8 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">
                  Know Your Farmer, <br />
                  Know Your Food.
                </h2>
                <p className="text-[#787774] leading-relaxed">
                  We believe in radical transparency. Every fruit in your box
                  can be traced back to the specific local farm it was harvested
                  from. No warehouses, no long-term cold storage—just pure
                  nature.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Soil Health Monitoring",
                    desc: "We test soil nutrients every month to ensure maximum fruit vitamins.",
                  },
                  {
                    title: "Ethical Sourcing",
                    desc: "Our farmers are paid 30% above market rates for their premium craft.",
                  },
                ]?.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-600 bg-green-100 rounded-full">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h6 className="text-sm font-bold">{item.title}</h6>
                      <p className="text-xs text-[#ADADA7]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="text-[#37352F] font-bold text-sm border-b-2 border-green-500 pb-1 hover:text-green-600 transition-colors">
                Read Our Sustainability Report 2026
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-24 max-w-[1200px] mx-auto px-6">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Loved by Health Enthusiasts
          </h2>
          <p className="text-[#ADADA7] text-sm">
            Join 10,000+ families eating fresh every week
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              name: "Sarah Jenkins",
              role: "Nutritionist",
              text: "The quality of dragon fruit I received was better than any high-end grocery store. You can actually taste the freshness.",
              avatar: "https://i.pravatar.cc/150?u=sarah",
            },
            {
              name: "Mark Thompson",
              role: "Parent",
              text: "My kids finally stopped asking for candy and started asking for Fruitify's strawberries. The subscription is a lifesaver!",
              avatar: "https://i.pravatar.cc/150?u=mark",
            },
            {
              name: "Emily Chen",
              role: "Chef",
              text: "The aromatics of their citrus fruits are incredible. Perfect for my restaurant's seasonal desserts.",
              avatar: "https://i.pravatar.cc/150?u=emily",
            },
          ].map((review, i) => (
            <div
              key={i}
              className="p-8 bg-white border border-[#E9E9E7] rounded-2xl hover:border-[#ADADA7] transition-colors group"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-orange-400 fill-orange-400"
                  />
                ))}
              </div>
              <p className="text-[#37352F] text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full border border-[#E9E9E7]"
                />
                <div>
                  <h6 className="text-xs font-bold">{review.name}</h6>
                  <p className="text-[10px] text-[#ADADA7] uppercase tracking-widest">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
