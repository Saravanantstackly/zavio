import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Star,
  Heart,
} from "lucide-react";
import toast from "react-hot-toast";
import PageAnimation from "../components/PageAnimation";

const products = [
  {
    id: 1,
    name: "AirBeat Pro",
    category: "Earbuds",
    price: 2999,
    oldPrice: 3999,
    rating: 4.8,
    reviews: 124,
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
    reviews: 98,
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
    reviews: 86,
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
    reviews: 156,
    image: "/images/zenith-anc.jpg",
    badge: "Premium",
  },
  {
    id: 5,
    name: "ZAVIO AirPods",
    category: "Earbuds",
    price: 2199,
    oldPrice: 2999,
    rating: 4.5,
    reviews: 72,
    image: "/images/earbuds.jpg",
    badge: "Sale",
  },
  {
    id: 6,
    name: "ZAVIO Studio",
    category: "Headphones",
    price: 3999,
    oldPrice: 4999,
    rating: 4.7,
    reviews: 91,
    image: "/images/headphones.jpg",
    badge: "Hot",
  },
  {
    id: 7,
    name: "ZAVIO Watch S",
    category: "Smart Watches",
    price: 2799,
    oldPrice: 3599,
    rating: 4.6,
    reviews: 65,
    image: "/images/watch.jpg",
    badge: "New",
  },
  {
    id: 8,
    name: "ZAVIO Boom",
    category: "Speakers",
    price: 2999,
    oldPrice: 3999,
    rating: 4.8,
    reviews: 110,
    image: "/images/speaker.jpg",
    badge: "Best Seller",
  },
];

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const urlSearch = searchParams.get("search") || "";
  const urlCategory = searchParams.get("category") || "All";

  const [search, setSearch] = useState(urlSearch);
  const [category, setCategory] = useState(urlCategory);
  const [favorites, setFavorites] = useState([]);

  /* LOAD WISHLIST */
  useEffect(() => {
    const savedWishlist =
      JSON.parse(localStorage.getItem("zavio-wishlist")) || [];

    setFavorites(savedWishlist.map((item) => item.id));
  }, []);

  /* SYNC SEARCH */
  useEffect(() => {
    setSearch(urlSearch);
  }, [urlSearch]);

  /* SYNC CATEGORY */
  useEffect(() => {
    setCategory(urlCategory);
  }, [urlCategory]);

  /* SEARCH */
  const handleSearchChange = (value) => {
    setSearch(value);

    const params = {};

    if (value.trim()) {
      params.search = value;
    }

    if (category !== "All") {
      params.category = category;
    }

    setSearchParams(params);
  };

  /* CATEGORY */
  const handleCategoryChange = (value) => {
    setCategory(value);

    const params = {};

    if (search.trim()) {
      params.search = search;
    }

    if (value !== "All") {
      params.category = value;
    }

    setSearchParams(params);
  };

  /* FILTER PRODUCTS */
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        product.name.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue);

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  /* ADD TO CART */
  const addToCart = (product) => {
    try {
      const savedCart =
        JSON.parse(localStorage.getItem("zavio-cart")) || [];

      const existingProduct = savedCart.find(
        (item) => item.id === product.id
      );

      let updatedCart;

      if (existingProduct) {
        updatedCart = savedCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: (item.quantity || 0) + 1,
              }
            : item
        );
      } else {
        updatedCart = [
          ...savedCart,
          {
            ...product,
            quantity: 1,
          },
        ];
      }

      localStorage.setItem(
        "zavio-cart",
        JSON.stringify(updatedCart)
      );

      window.dispatchEvent(new Event("cartUpdated"));

      toast.success(`${product.name} added to cart!`);
    } catch (error) {
      console.error("Cart error:", error);
      toast.error("Unable to add product to cart");
    }
  };

  /* WISHLIST */
  const toggleFavorite = (product) => {
    const savedWishlist =
      JSON.parse(localStorage.getItem("zavio-wishlist")) || [];

    const alreadyExists = savedWishlist.some(
      (item) => item.id === product.id
    );

    let updatedWishlist;

    if (alreadyExists) {
      updatedWishlist = savedWishlist.filter(
        (item) => item.id !== product.id
      );

      toast.success("Removed from wishlist");
    } else {
      updatedWishlist = [
        ...savedWishlist,
        product,
      ];

      toast.success("Added to wishlist");
    }

    localStorage.setItem(
      "zavio-wishlist",
      JSON.stringify(updatedWishlist)
    );

    setFavorites(
      updatedWishlist.map((item) => item.id)
    );

    window.dispatchEvent(
      new Event("wishlistUpdated")
    );
  };

  /* CLEAR FILTERS */
  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setSearchParams({});
  };

  return (
    <PageAnimation>
      <main className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-pink-50">

        {/* ================= HERO ================= */}
        <section className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 px-6 py-16 text-white sm:py-20">
          <div className="mx-auto w-full max-w-[1600px] text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              ZAVIO Store
            </p>

            <h1 className="mt-3 text-4xl font-black sm:text-5xl lg:text-6xl">
              Explore Our Products
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-white/80 sm:text-lg">
              Discover powerful audio, smart watches
              and innovative technology designed for
              your everyday life.
            </p>

          </div>
        </section>

        {/* ================= FILTERS ================= */}
        <section className="px-6 py-10 sm:py-12">
          <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-center gap-6">

            {/* SEARCH */}
            <div className="relative w-full max-w-2xl">
              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search ZAVIO products..."
                value={search}
                onChange={(e) =>
                  handleSearchChange(e.target.value)
                }
                className="w-full rounded-full border border-gray-200 bg-white py-4 pl-14 pr-6 text-sm outline-none shadow-md transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />
            </div>

            {/* CATEGORIES */}
            <div className="flex w-full flex-wrap justify-center gap-3">
              {[
                "All",
                "Earbuds",
                "Headphones",
                "Smart Watches",
                "Speakers",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    handleCategoryChange(item)
                  }
                  className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                    category === item
                      ? "bg-black text-white shadow-lg"
                      : "bg-white text-gray-600 shadow-sm hover:bg-violet-100 hover:text-violet-700"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* ================= PRODUCTS ================= */}
        <section className="px-6 pb-20">
          <div className="mx-auto w-full max-w-[1600px]">

            {/* RESULT COUNT */}
            <div className="mb-8 flex flex-col items-center justify-between gap-3 sm:flex-row">

              <p className="text-sm text-gray-500">
                Showing{" "}
                <span className="font-bold text-gray-900">
                  {filteredProducts.length}
                </span>{" "}
                products
              </p>

              <p className="text-sm font-medium text-gray-500">
                Premium technology by ZAVIO
              </p>

            </div>

            {/* PRODUCT GRID */}
            {filteredProducts.length > 0 ? (
              <div className="grid w-full grid-cols-1 justify-items-center gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group w-full max-w-[310px] overflow-hidden rounded-3xl border border-gray-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >

                    {/* IMAGE */}
                    <div className="relative flex h-72 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-violet-100 via-pink-100 to-blue-100">

                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-110"
                      />

                      {/* BADGE */}
                      <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-xs font-bold text-white">
                        {product.badge}
                      </span>

                      {/* WISHLIST */}
                      <button
                        type="button"
                        onClick={() =>
                          toggleFavorite(product)
                        }
                        className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-md backdrop-blur transition hover:scale-110"
                        aria-label="Add to wishlist"
                      >
                        <Heart
                          size={20}
                          className={
                            favorites.includes(product.id)
                              ? "fill-pink-500 text-pink-500"
                              : "text-gray-500"
                          }
                        />
                      </button>

                    </div>

                    {/* INFO */}
                    <div className="px-2 pb-2 pt-5">

                      <p className="text-xs font-semibold uppercase tracking-wider text-violet-500">
                        {product.category}
                      </p>

                      <h2 className="mt-1 text-lg font-bold text-gray-900">
                        {product.name}
                      </h2>

                      {/* RATING */}
                      <div className="mt-2 flex items-center gap-1">

                        <Star
                          size={15}
                          className="fill-yellow-400 text-yellow-400"
                        />

                        <span className="text-sm font-semibold">
                          {product.rating}
                        </span>

                        <span className="text-xs text-gray-400">
                          ({product.reviews})
                        </span>

                      </div>

                      {/* PRICE */}
                      <div className="mt-3 flex items-center gap-2">

                        <span className="text-lg font-black text-violet-600">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>

                        <span className="text-sm text-gray-400 line-through">
                          ₹{product.oldPrice.toLocaleString("en-IN")}
                        </span>

                      </div>

                      {/* BUTTONS */}
                      <div className="mt-5 flex gap-2">

                        <Link
                          to={`/product/${product.id}`}
                          className="flex flex-1 items-center justify-center rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-700 transition hover:border-violet-500 hover:text-violet-600"
                        >
                          View
                        </Link>

                        <button
                          type="button"
                          onClick={() =>
                            addToCart(product)
                          }
                          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-black py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
                        >
                          <ShoppingCart size={16} />
                          Add to Cart
                        </button>

                      </div>

                    </div>
                  </div>
                ))}

              </div>
            ) : (

              /* ================= NO PRODUCTS ================= */
              <div className="mx-auto w-full max-w-2xl rounded-3xl bg-white px-6 py-20 text-center shadow-sm">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-100">
                  <Search className="text-violet-600" />
                </div>

                <h2 className="mt-5 text-2xl font-bold">
                  No products found
                </h2>

                <p className="mt-2 text-gray-500">
                  Try another product name or category.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
                >
                  Show All Products
                </button>

              </div>
            )}

          </div>
        </section>

      </main>
    </PageAnimation>
  );
}

export default Products;