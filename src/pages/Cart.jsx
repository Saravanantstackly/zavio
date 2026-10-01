import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  ShoppingBag,
  ShieldCheck,
  Truck,
} from "lucide-react";
import PageAnimation from "../components/PageAnimation";

function Cart() {
  const [cart, setCart] = useState([]);

  // Load cart
  useEffect(() => {
    const savedCart = JSON.parse(
      localStorage.getItem("zavio-cart") || "[]"
    );

    setCart(savedCart);
  }, []);

  // Update cart
  const updateCart = (updatedCart) => {
    setCart(updatedCart);

    localStorage.setItem(
      "zavio-cart",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: (item.quantity || 1) + 1,
          }
        : item
    );

    updateCart(updatedCart);
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: (item.quantity || 1) - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    updateCart(updatedCart);
  };

  // Remove item
  const removeFromCart = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    updateCart(updatedCart);
  };

  // Subtotal
  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * (item.quantity || 1),
    0
  );

  // Total quantity
  const totalItems = cart.reduce(
    (total, item) =>
      total + (item.quantity || 1),
    0
  );

  return (
    <PageAnimation>
      <main className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-pink-50 px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto w-full max-w-[1600px]">

          {/* ================= HEADER ================= */}

          <div className="mb-10">
            <Link
              to="/products"
              className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-violet-600"
            >
              <ArrowLeft size={17} />
              Continue Shopping
            </Link>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-500">
                  ZAVIO Store
                </p>

                <h1 className="mt-2 text-4xl font-black text-gray-900 sm:text-5xl">
                  Your Cart
                </h1>

                {cart.length > 0 && (
                  <p className="mt-2 text-sm text-gray-500">
                    {totalItems}{" "}
                    {totalItems === 1 ? "item" : "items"}{" "}
                    in your cart
                  </p>
                )}
              </div>

              {cart.length > 0 && (
                <div className="hidden rounded-2xl bg-white px-5 py-3 shadow-sm sm:block">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Cart Value
                  </p>

                  <p className="mt-1 text-xl font-black text-violet-600">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ================= EMPTY CART ================= */}

          {cart.length === 0 ? (
            <div className="mx-auto flex min-h-[520px] max-w-3xl flex-col items-center justify-center rounded-[32px] bg-white px-6 py-16 text-center shadow-xl">

              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-violet-100 to-pink-100">
                <ShoppingCart
                  size={48}
                  className="text-violet-600"
                />
              </div>

              <h2 className="mt-7 text-3xl font-black text-gray-900">
                Your Cart is Empty
              </h2>

              <p className="mt-3 max-w-md text-sm leading-7 text-gray-500">
                Looks like you haven't added any products
                to your cart yet. Explore our collection
                and find something you love.
              </p>

              <Link
                to="/products"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 px-8 py-4 text-sm font-bold text-white shadow-lg hover:-translate-y-1 hover:shadow-xl"
              >
                <ShoppingBag size={18} />
                Explore Products
              </Link>
            </div>
          ) : (

            /* ================= CART CONTENT ================= */

            <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_390px]">

              {/* ================= PRODUCTS ================= */}

              <div className="space-y-5">

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="group rounded-[28px] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6"
                  >
                    <div className="flex flex-col gap-6 sm:flex-row">

                      {/* Product Image */}

                      <Link
                        to={`/product/${item.id}`}
                        className="relative flex h-52 w-full shrink-0 items-center justify-center overflow-hidden rounded-[22px] bg-gradient-to-br from-violet-100 via-pink-100 to-blue-100 sm:h-44 sm:w-44 lg:h-48 lg:w-48"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-110"
                        />

                        {item.badge && (
                          <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 px-3 py-1 text-[10px] font-bold text-white shadow">
                            {item.badge}
                          </span>
                        )}
                      </Link>

                      {/* Product Details */}

                      <div className="flex min-w-0 flex-1 flex-col justify-between">

                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-violet-500">
                            {item.category}
                          </p>

                          <Link
                            to={`/product/${item.id}`}
                            className="mt-1 block text-2xl font-black text-gray-900 hover:text-violet-600"
                          >
                            {item.name}
                          </Link>

                          {item.rating && (
                            <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-yellow-50 px-3 py-1">
                              <span className="text-sm font-bold text-yellow-600">
                                ★ {item.rating}
                              </span>

                              {item.reviews && (
                                <span className="text-xs text-gray-400">
                                  ({item.reviews})
                                </span>
                              )}
                            </div>
                          )}

                          <p className="mt-4 text-xl font-black text-violet-600">
                            ₹
                            {item.price.toLocaleString(
                              "en-IN"
                            )}
                          </p>
                        </div>

                        {/* Controls */}

                        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">

                          {/* Quantity */}

                          <div className="flex items-center overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                            <button
                              type="button"
                              onClick={() =>
                                decreaseQuantity(item.id)
                              }
                              className="flex h-10 w-10 items-center justify-center text-gray-600 hover:bg-violet-100 hover:text-violet-600"
                            >
                              <Minus size={16} />
                            </button>

                            <span className="flex h-10 min-w-12 items-center justify-center border-x border-gray-200 bg-white px-3 text-sm font-black">
                              {item.quantity || 1}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                increaseQuantity(item.id)
                              }
                              className="flex h-10 w-10 items-center justify-center text-gray-600 hover:bg-violet-100 hover:text-violet-600"
                            >
                              <Plus size={16} />
                            </button>
                          </div>

                          {/* Item Total */}

                          <div className="text-right">
                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                              Item Total
                            </p>

                            <p className="text-xl font-black text-gray-900">
                              ₹
                              {(
                                item.price *
                                (item.quantity || 1)
                              ).toLocaleString(
                                "en-IN"
                              )}
                            </p>
                          </div>

                          {/* Remove */}

                          <button
                            type="button"
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                            className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-400 hover:bg-red-50 hover:text-red-500"
                            aria-label="Remove from cart"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ================= ORDER SUMMARY ================= */}

              <div className="h-fit rounded-[28px] bg-white p-7 shadow-xl xl:sticky xl:top-28">

                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-black text-gray-900">
                    Order Summary
                  </h2>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100">
                    <ShoppingCart
                      size={19}
                      className="text-violet-600"
                    />
                  </div>
                </div>

                <div className="mt-7 space-y-5">

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Subtotal</span>

                    <span className="font-bold text-gray-900">
                      ₹
                      {subtotal.toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Delivery</span>

                    <span className="font-bold text-green-600">
                      FREE
                    </span>
                  </div>

                  <div className="border-t border-gray-200 pt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-black text-gray-900">
                        Total
                      </span>

                      <span className="text-2xl font-black text-violet-600">
                        ₹
                        {subtotal.toLocaleString(
                          "en-IN"
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Checkout */}

                <button
                  type="button"
                  className="mt-8 w-full rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 py-4 text-sm font-black text-white shadow-lg hover:-translate-y-1 hover:shadow-xl"
                >
                  Proceed to Checkout
                </button>

                {/* Benefits */}

                <div className="mt-6 space-y-3">

                  <div className="flex items-center gap-3 rounded-2xl bg-violet-50 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100">
                      <Truck
                        size={18}
                        className="text-violet-600"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        Free Delivery
                      </p>

                      <p className="text-xs text-gray-500">
                        On every ZAVIO order
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl bg-green-50 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100">
                      <ShieldCheck
                        size={18}
                        className="text-green-600"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        Secure Checkout
                      </p>

                      <p className="text-xs text-gray-500">
                        Your payment is protected
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          )}
        </div>
      </main>
    </PageAnimation>
  );
}

export default Cart;