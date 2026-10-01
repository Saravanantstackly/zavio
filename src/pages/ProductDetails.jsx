import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
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
    description:
      "Experience powerful sound, deep bass and crystal-clear calls with the ZAVIO AirBeat Pro.",
    colors: ["Black", "White", "Purple"],
    features: [
      "Active Noise Cancellation",
      "Up to 30 Hours Battery",
      "Low Latency Gaming Mode",
      "Fast USB-C Charging",
    ],
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
    description:
      "Stay connected and track your everyday activities with the stylish ZAVIO Pulse X Smart Watch.",
    colors: ["Black", "Blue", "Silver"],
    features: [
      "AMOLED Display",
      "Heart Rate Monitoring",
      "7 Days Battery Life",
      "Bluetooth Calling",
    ],
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
    description:
      "Bring powerful room-filling sound to your home with the ZAVIO SoundMax 500.",
    colors: ["Black", "Blue"],
    features: [
      "20W Powerful Sound",
      "12 Hours Battery",
      "Bluetooth 5.3",
      "Deep Bass Mode",
    ],
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
    description:
      "Enjoy immersive audio and premium comfort with the ZAVIO Zenith ANC headphones.",
    colors: ["Black", "White"],
    features: [
      "Advanced ANC",
      "40 Hours Battery",
      "Premium Cushions",
      "Dual Device Connection",
    ],
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
    description:
      "Compact wireless earbuds delivering balanced sound and reliable everyday performance.",
    colors: ["White", "Black"],
    features: [
      "Clear Calling",
      "24 Hours Battery",
      "Touch Controls",
      "Fast Charging",
    ],
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
    description:
      "Premium over-ear headphones designed for comfortable all-day listening.",
    colors: ["Black", "Blue"],
    features: [
      "Deep Bass",
      "35 Hours Battery",
      "Soft Ear Cushions",
      "Bluetooth 5.3",
    ],
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
    description:
      "A stylish smart watch with useful fitness and everyday smart features.",
    colors: ["Black", "Silver"],
    features: [
      "Full Touch Display",
      "Fitness Tracking",
      "Multiple Sports Modes",
      "Long Battery Life",
    ],
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
    description:
      "Portable ZAVIO speaker with powerful bass and a stylish design for parties and travel.",
    colors: ["Black", "Red", "Blue"],
    features: [
      "Powerful Stereo Sound",
      "15 Hours Battery",
      "Portable Design",
      "Wireless Bluetooth",
    ],
  },
];

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!product) {
      return;
    }

    setSelectedColor(product.colors[0]);

    const savedWishlist =
      JSON.parse(
        localStorage.getItem("zavio-wishlist")
      ) || [];

    setIsFavorite(
      savedWishlist.some(
        (item) => item.id === product.id
      )
    );
  }, [product]);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-900">
            Product Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            The product you are looking for does not exist.
          </p>

          <Link
            to="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-violet-700"
          >
            <ArrowLeft size={17} />
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  /* ================= ADD TO CART ================= */

  const addToCart = () => {
    try {
      const savedCart =
        JSON.parse(
          localStorage.getItem("zavio-cart")
        ) || [];

      const existingProduct =
        savedCart.find(
          (item) => item.id === product.id
        );

      let updatedCart;

      if (existingProduct) {
        updatedCart = savedCart.map(
          (item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity:
                    (item.quantity || 0) +
                    quantity,
                }
              : item
        );
      } else {
        updatedCart = [
          ...savedCart,
          {
            ...product,
            quantity,
          },
        ];
      }

      localStorage.setItem(
        "zavio-cart",
        JSON.stringify(updatedCart)
      );

      window.dispatchEvent(
        new Event("cartUpdated")
      );

      toast.success(
        `${product.name} added to cart!`
      );
    } catch (error) {
      console.error(
        "Add to cart error:",
        error
      );

      toast.error(
        "Unable to add product to cart"
      );
    }
  };

  /* ================= WISHLIST ================= */

  const toggleWishlist = () => {
    const savedWishlist =
      JSON.parse(
        localStorage.getItem("zavio-wishlist")
      ) || [];

    const alreadyExists =
      savedWishlist.some(
        (item) => item.id === product.id
      );

    let updatedWishlist;

    if (alreadyExists) {
      updatedWishlist =
        savedWishlist.filter(
          (item) => item.id !== product.id
        );

      setIsFavorite(false);

      toast.success(
        "Removed from wishlist"
      );
    } else {
      updatedWishlist = [
        ...savedWishlist,
        product,
      ];

      setIsFavorite(true);

      toast.success(
        "Added to wishlist"
      );
    }

    localStorage.setItem(
      "zavio-wishlist",
      JSON.stringify(updatedWishlist)
    );

    window.dispatchEvent(
      new Event("wishlistUpdated")
    );
  };

  return (
    <PageAnimation>
      <main className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-pink-50 px-5 py-10 sm:px-8 sm:py-14">

        {/* WIDER CENTERED CONTAINER */}
        <div className="mx-auto w-full max-w-[1600px]">

          {/* BACK BUTTON */}
          <Link
            to="/products"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-violet-600"
          >
            <ArrowLeft size={17} />
            Back to Products
          </Link>

          {/* ================= PRODUCT ================= */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">

            {/* ================= IMAGE ================= */}
            <div className="relative">

              <div className="flex min-h-[450px] items-center justify-center overflow-hidden rounded-[35px] bg-gradient-to-br from-violet-100 via-pink-100 to-blue-100 p-8 shadow-sm sm:min-h-[550px] lg:min-h-[620px]">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full max-h-[560px] w-full object-contain transition duration-500 hover:scale-105"
                />

              </div>

              <span className="absolute left-6 top-6 rounded-full bg-black px-4 py-2 text-xs font-bold text-white shadow-lg">
                {product.badge}
              </span>

            </div>

            {/* ================= PRODUCT INFO ================= */}
            <div className="flex flex-col justify-center">

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-500">
                {product.category}
              </p>

              <h1 className="mt-3 text-4xl font-black text-gray-900 sm:text-5xl lg:text-6xl">
                {product.name}
              </h1>

              {/* RATING */}
              <div className="mt-5 flex items-center gap-2">

                <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-2">

                  <Star
                    size={17}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="text-sm font-bold text-gray-900">
                    {product.rating}
                  </span>

                </div>

                <span className="text-sm text-gray-500">
                  {product.reviews} reviews
                </span>

              </div>

              {/* DESCRIPTION */}
              <p className="mt-6 max-w-2xl text-sm leading-8 text-gray-500 sm:text-base">
                {product.description}
              </p>

              {/* PRICE */}
              <div className="mt-7 flex flex-wrap items-center gap-3">

                <span className="text-3xl font-black text-violet-600">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>

                <span className="text-lg text-gray-400 line-through">
                  ₹{product.oldPrice.toLocaleString("en-IN")}
                </span>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  Save ₹
                  {(
                    product.oldPrice -
                    product.price
                  ).toLocaleString("en-IN")}
                </span>

              </div>

              {/* ================= COLOR ================= */}
              <div className="mt-8">

                <p className="text-sm font-bold text-gray-900">
                  Color:
                  <span className="ml-2 font-normal text-gray-500">
                    {selectedColor}
                  </span>
                </p>

                <div className="mt-3 flex flex-wrap gap-2">

                  {product.colors.map(
                    (color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() =>
                          setSelectedColor(color)
                        }
                        className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                          selectedColor === color
                            ? "border-violet-600 bg-violet-600 text-white"
                            : "border-gray-200 bg-white text-gray-600 hover:border-violet-400"
                        }`}
                      >
                        {color}
                      </button>
                    )
                  )}

                </div>

              </div>

              {/* ================= QUANTITY + ACTIONS ================= */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                {/* QUANTITY */}
                <div className="flex h-14 w-fit items-center rounded-2xl border border-gray-200 bg-white">

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity(
                        Math.max(
                          1,
                          quantity - 1
                        )
                      )
                    }
                    className="flex h-14 w-12 items-center justify-center text-gray-600 transition hover:bg-gray-100"
                  >
                    <Minus size={18} />
                  </button>

                  <span className="flex h-14 min-w-12 items-center justify-center border-x border-gray-200 px-3 font-bold">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity(
                        quantity + 1
                      )
                    }
                    className="flex h-14 w-12 items-center justify-center text-gray-600 transition hover:bg-gray-100"
                  >
                    <Plus size={18} />
                  </button>

                </div>

                {/* ADD TO CART */}
                <button
                  type="button"
                  onClick={addToCart}
                  className="flex h-14 flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 px-6 text-sm font-black text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>

                {/* WISHLIST */}
                <button
                  type="button"
                  onClick={toggleWishlist}
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border transition ${
                    isFavorite
                      ? "border-pink-200 bg-pink-50 text-pink-500"
                      : "border-gray-200 bg-white text-gray-500 hover:border-pink-200 hover:text-pink-500"
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart
                    size={21}
                    className={
                      isFavorite
                        ? "fill-pink-500"
                        : ""
                    }
                  />
                </button>

              </div>

              {/* ================= TRUST FEATURES ================= */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3">

                <div className="rounded-2xl bg-white p-4 shadow-sm">

                  <Truck
                    size={21}
                    className="text-violet-600"
                  />

                  <p className="mt-2 text-xs font-bold text-gray-900">
                    Free Delivery
                  </p>

                  <p className="mt-1 text-[11px] text-gray-400">
                    On all orders
                  </p>

                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm">

                  <ShieldCheck
                    size={21}
                    className="text-green-600"
                  />

                  <p className="mt-2 text-xs font-bold text-gray-900">
                    Secure Payment
                  </p>

                  <p className="mt-1 text-[11px] text-gray-400">
                    100% secure
                  </p>

                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm">

                  <RotateCcw
                    size={21}
                    className="text-pink-600"
                  />

                  <p className="mt-2 text-xs font-bold text-gray-900">
                    Easy Returns
                  </p>

                  <p className="mt-1 text-[11px] text-gray-400">
                    Hassle-free
                  </p>

                </div>

              </div>

            </div>
          </div>

          {/* ================= FEATURES ================= */}
          <section className="mt-16">

            <div className="mb-7">

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-500">
                Product Details
              </p>

              <h2 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl">
                Everything You Need
              </h2>

            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {product.features.map(
                (feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100">
                      <ShieldCheck
                        size={20}
                        className="text-violet-600"
                      />
                    </div>

                    <p className="mt-4 text-sm font-bold text-gray-900">
                      {feature}
                    </p>

                  </div>
                )
              )}

            </div>
          </section>

          {/* ================= BUY NOW ================= */}
          <section className="mt-10 overflow-hidden rounded-[30px] bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 p-8 text-white shadow-lg sm:p-10">

            <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

              <div>

                <p className="text-sm font-semibold text-white/70">
                  Ready to upgrade?
                </p>

                <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                  Take {product.name} home today.
                </h2>

              </div>

              <Link
                to="/cart"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-black text-violet-700 shadow-xl transition hover:-translate-y-1"
              >
                <ShoppingCart size={18} />
                Go to Cart
              </Link>

            </div>

          </section>

        </div>
      </main>
    </PageAnimation>
  );
}

export default ProductDetails;