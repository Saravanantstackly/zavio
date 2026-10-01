import { Link } from "react-router-dom";
import { ArrowRight, Headphones, ShieldCheck, Truck, RotateCcw } from "lucide-react";

const categories = [
  {
    name: "Earbuds",
    image: "/images/earbuds.jpg",
    description: "Wireless audio",
  },
  {
    name: "Headphones",
    image: "/images/headphones.jpg",
    description: "Immersive sound",
  },
  {
    name: "Smart Watches",
    image: "/images/watch.jpg",
    description: "Smart lifestyle",
  },
  {
    name: "Speakers",
    image: "/images/speaker.jpg",
    description: "Powerful sound",
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "AirBeat Pro",
    category: "Earbuds",
    price: 2999,
    oldPrice: 3999,
    rating: 4.8,
    image: "/images/airbeat-pro.jpg",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Pulse X",
    category: "Smart Watches",
    price: 3499,
    oldPrice: 4499,
    rating: 4.7,
    image: "/images/pulse-x.jpg",
    badge: "New",
  },
  {
    id: 3,
    name: "SoundMax 500",
    category: "Speakers",
    price: 2499,
    oldPrice: 3299,
    rating: 4.6,
    image: "/images/soundmax-500.jpg",
    badge: "Popular",
  },
  {
    id: 4,
    name: "Zenith ANC",
    category: "Headphones",
    price: 4999,
    oldPrice: 6499,
    rating: 4.9,
    image: "/images/zenith-anc.jpg",
    badge: "Premium",
  },
];

function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-fuchsia-600 to-pink-500 px-6 py-16 text-white sm:py-20 lg:py-24">
        
        {/* Background decorations */}
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-pink-300/20 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-[1600px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Hero Text */}
          <div className="max-w-2xl">
            <span className="mb-5 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-md">
              ✨ Next Generation Technology
            </span>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Technology
              <br />
              <span className="text-yellow-300">That Moves You.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
              Discover powerful audio, smart wearables and innovative
              technology designed to make your everyday life better.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-violet-700 shadow-lg hover:-translate-y-1 hover:shadow-xl"
              >
                Shop Now
                <ArrowRight size={19} />
              </Link>

              <a
                href="#categories"
                className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-bold backdrop-blur-md hover:bg-white/20"
              >
                Explore Categories
              </a>
            </div>

            {/* Small features */}
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/20 pt-6">
              <div>
                <p className="text-2xl font-extrabold">50K+</p>
                <p className="text-sm text-white/70">Happy Customers</p>
              </div>

              <div>
                <p className="text-2xl font-extrabold">100+</p>
                <p className="text-sm text-white/70">Products</p>
              </div>

              <div>
                <p className="text-2xl font-extrabold">4.8★</p>
                <p className="text-sm text-white/70">Customer Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute inset-0 rounded-[45px] bg-white/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
              <img
                src="/images/hero-earbuds.jpg"
                alt="ZAVIO wireless earbuds"
                className="h-[350px] w-full rounded-[32px] object-cover sm:h-[430px] lg:h-[500px]"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white px-5 py-4 text-gray-900 shadow-xl sm:-left-8">
              <p className="text-xs font-medium text-gray-500">
                Starting From
              </p>
              <p className="text-xl font-extrabold">₹2,499</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="border-b bg-white px-6 py-8">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-2 gap-6 lg:grid-cols-4">
          
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-violet-100 p-3 text-violet-600">
              <Truck size={25} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Free Shipping</h3>
              <p className="text-sm text-gray-500">On orders above ₹999</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-pink-100 p-3 text-pink-600">
              <ShieldCheck size={25} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Secure Payment</h3>
              <p className="text-sm text-gray-500">100% secure checkout</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-blue-100 p-3 text-blue-600">
              <RotateCcw size={25} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Easy Returns</h3>
              <p className="text-sm text-gray-500">7 day replacement</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-yellow-100 p-3 text-yellow-600">
              <Headphones size={25} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">24/7 Support</h3>
              <p className="text-sm text-gray-500">We're here to help</p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section
        id="categories"
        className="scroll-mt-28 bg-gradient-to-br from-violet-50 via-white to-pink-50 px-6 py-16 sm:py-20"
      >
        <div className="mx-auto w-full max-w-[1600px]">

          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
                Explore
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Shop By Category
              </h2>

              <p className="mt-3 max-w-xl text-gray-500">
                Find the perfect technology for your lifestyle.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 font-bold text-violet-600 hover:text-violet-800"
            >
              View All
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/products?category=${encodeURIComponent(category.name)}`}
                className="group overflow-hidden rounded-[30px] border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 text-white">
                    <h3 className="text-2xl font-extrabold">
                      {category.name}
                    </h3>

                    <p className="mt-1 text-sm text-white/80">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1600px]">

          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-pink-600">
                Trending Now
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Featured Products
              </h2>

              <p className="mt-3 text-gray-500">
                Our most loved products, picked specially for you.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 font-bold text-violet-600 hover:text-violet-800"
            >
              View All Products
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Product Image */}
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-violet-600 px-3 py-1.5 text-xs font-bold text-white shadow-md">
                    {product.badge}
                  </span>
                </div>

                {/* Product Details */}
                <div className="p-5">

                  <p className="text-sm font-medium text-gray-400">
                    {product.category}
                  </p>

                  <h3 className="mt-1 text-xl font-extrabold text-gray-900">
                    {product.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-yellow-500">★</span>
                    <span className="font-semibold text-gray-700">
                      {product.rating}
                    </span>
                    <span className="text-sm text-gray-400">
                      Excellent
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-xl font-extrabold text-gray-900">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>

                    <span className="text-sm text-gray-400 line-through">
                      ₹{product.oldPrice.toLocaleString("en-IN")}
                    </span>
                  </div>

                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PROMO BANNER ================= */}
      <section className="px-6 py-10 sm:py-14">
        <div className="mx-auto w-full max-w-[1600px] overflow-hidden rounded-[35px] bg-gradient-to-r from-violet-700 via-purple-600 to-pink-600 px-8 py-12 text-white shadow-xl sm:px-12 lg:px-16">

          <div className="grid items-center gap-8 lg:grid-cols-2">

            <div>
              <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur-md">
                🔥 Limited Time Offer
              </span>

              <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                Upgrade Your
                <br />
                Everyday Tech.
              </h2>

              <p className="mt-4 max-w-xl text-white/80">
                Get up to 40% off on selected ZAVIO products. Don't miss out
                on the latest technology.
              </p>

              <Link
                to="/products"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-violet-700 shadow-lg hover:-translate-y-1"
              >
                Shop Deals
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/headphones.jpg"
                alt="ZAVIO headphones"
                className="h-64 w-full max-w-lg rounded-[30px] object-cover shadow-2xl sm:h-80"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="scroll-mt-28 bg-gray-950 px-6 py-16 text-white sm:py-20"
      >
        <div className="mx-auto grid w-full max-w-[1600px] gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

          <div className="overflow-hidden rounded-[35px]">
            <img
              src="/images/hero-earbuds.jpg"
              alt="About ZAVIO"
              className="h-[350px] w-full object-cover sm:h-[450px]"
            />
          </div>

          <div className="max-w-2xl">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-fuchsia-400">
              About ZAVIO
            </span>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Technology Made
              <span className="text-fuchsia-400"> Simple.</span>
            </h2>

            <p className="mt-6 leading-7 text-gray-400">
              ZAVIO is built for people who want powerful technology without
              unnecessary complexity. From immersive audio to smart
              wearables, every product is designed with style, performance
              and everyday comfort in mind.
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              We believe great technology should fit naturally into your
              lifestyle. That's why we focus on modern design, reliable
              performance and experiences that are easy to enjoy.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-gray-950 hover:bg-gray-200"
            >
              Explore ZAVIO
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-gradient-to-br from-violet-50 via-white to-pink-50 px-6 py-20 text-center">

        <div className="mx-auto w-full max-w-4xl">

          <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
            Your Next Upgrade
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-5xl">
            Ready to Experience
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
              Better Technology?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-500">
            Explore our collection and discover technology designed for your
            everyday life.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gray-950 px-8 py-4 font-bold text-white shadow-lg hover:-translate-y-1 hover:bg-gray-800"
          >
            Start Shopping
            <ArrowRight size={19} />
          </Link>

        </div>
      </section>

    </main>
  );
}

export default Home;