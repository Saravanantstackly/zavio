import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";

import {
  Menu,
  X,
  Search,
  ShoppingCart,
  Heart,
  User,
} from "lucide-react";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const navigate = useNavigate();

  /* ================= WISHLIST COUNT ================= */

  useEffect(() => {
    const updateWishlistCount = () => {
      const savedWishlist =
        JSON.parse(
          localStorage.getItem("zavio-wishlist") || "[]"
        );

      setWishlistCount(savedWishlist.length);
    };

    updateWishlistCount();

    window.addEventListener(
      "wishlistUpdated",
      updateWishlistCount
    );

    return () => {
      window.removeEventListener(
        "wishlistUpdated",
        updateWishlistCount
      );
    };
  }, []);

  /* ================= CART COUNT ================= */

  useEffect(() => {
    const updateCartCount = () => {
      const savedCart =
        JSON.parse(
          localStorage.getItem("zavio-cart") || "[]"
        );

      const totalQuantity = savedCart.reduce(
        (total, item) =>
          total + (item.quantity || 1),
        0
      );

      setCartCount(totalQuantity);
    };

    updateCartCount();

    window.addEventListener(
      "cartUpdated",
      updateCartCount
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        updateCartCount
      );
    };
  }, []);

  /* ================= SEARCH ================= */

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchText.trim();

    setShowSearch(false);
    setMobileMenu(false);

    if (query) {
      navigate(
        `/products?search=${encodeURIComponent(query)}`
      );
    } else {
      navigate("/products");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md">

      {/* ================= MAIN NAVBAR ================= */}

      <div className="mx-auto flex h-24 w-full max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* ================= LOGO ================= */}

        <Link
          to="/"
          className="flex shrink-0 items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-pink-500 text-xl font-black text-white shadow-lg">
            Z
          </div>

          <div>
            <span className="block text-2xl font-black tracking-tight text-gray-900">
              ZAVIO
            </span>

            <span className="hidden text-[10px] font-bold uppercase tracking-[0.25em] text-violet-500 sm:block">
              Feel The Future
            </span>
          </div>
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}

        <nav className="hidden items-center gap-2 lg:flex xl:gap-3">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-xl px-4 py-3 text-sm font-bold transition ${
                isActive
                  ? "bg-violet-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-violet-50 hover:text-violet-700"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `rounded-xl px-4 py-3 text-sm font-bold transition ${
                isActive
                  ? "bg-fuchsia-500 text-white shadow-md"
                  : "text-gray-600 hover:bg-fuchsia-50 hover:text-fuchsia-700"
              }`
            }
          >
            Products
          </NavLink>

          <a
            href="/#categories"
            className="rounded-xl px-4 py-3 text-sm font-bold text-gray-600 transition hover:bg-pink-50 hover:text-pink-700"
          >
            Categories
          </a>

          <a
            href="/#about"
            className="rounded-xl px-4 py-3 text-sm font-bold text-gray-600 transition hover:bg-blue-50 hover:text-blue-700"
          >
            About
          </a>

        </nav>

        {/* ================= DESKTOP ACTIONS ================= */}

        <div className="hidden items-center gap-2 lg:flex xl:gap-3">

          {/* SEARCH */}

          <div className="relative">

            <button
              type="button"
              onClick={() =>
                setShowSearch(!showSearch)
              }
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600 hover:bg-violet-100"
              aria-label="Search"
            >
              {showSearch ? (
                <X size={20} />
              ) : (
                <Search size={20} />
              )}
            </button>

            {showSearch && (
              <form
                onSubmit={handleSearch}
                className="absolute right-0 top-14 flex w-80 items-center gap-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl"
              >
                <input
                  autoFocus
                  type="text"
                  value={searchText}
                  onChange={(e) =>
                    setSearchText(e.target.value)
                  }
                  placeholder="Search ZAVIO products..."
                  className="min-w-0 flex-1 rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-violet-100"
                />

                <button
                  type="submit"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white hover:scale-105"
                >
                  <Search size={18} />
                </button>
              </form>
            )}

          </div>

          {/* WISHLIST */}

          <Link
            to="/wishlist"
            className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-pink-500 hover:bg-pink-100"
            aria-label="Wishlist"
          >
            <Heart size={20} />

            {wishlistCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-pink-500 text-[10px] font-black text-white shadow-md">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* CART */}

          <Link
            to="/cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100"
            aria-label="Cart"
          >
            <ShoppingCart size={20} />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-[10px] font-black text-white shadow-md">
                {cartCount}
              </span>
            )}
          </Link>

          {/* LOGIN */}

          <Link
            to="/login"
            className="ml-1 flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 px-5 py-3 text-sm font-black text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
          >
            <User size={18} />
            Login
          </Link>

        </div>

        {/* ================= MOBILE BUTTON ================= */}

        <button
          type="button"
          onClick={() =>
            setMobileMenu(!mobileMenu)
          }
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700 hover:bg-violet-200 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenu ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}

      {mobileMenu && (
        <div className="border-t border-gray-200 bg-white px-5 py-6 shadow-xl lg:hidden">

          <nav className="mx-auto flex w-full max-w-2xl flex-col gap-3">

            <NavLink
              to="/"
              onClick={() => setMobileMenu(false)}
              className="rounded-xl bg-violet-50 px-5 py-4 font-bold text-violet-700"
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              onClick={() => setMobileMenu(false)}
              className="rounded-xl bg-fuchsia-50 px-5 py-4 font-bold text-fuchsia-700"
            >
              Products
            </NavLink>

            <a
              href="/#categories"
              onClick={() => setMobileMenu(false)}
              className="rounded-xl bg-pink-50 px-5 py-4 font-bold text-pink-700"
            >
              Categories
            </a>

            <a
              href="/#about"
              onClick={() => setMobileMenu(false)}
              className="rounded-xl bg-blue-50 px-5 py-4 font-bold text-blue-700"
            >
              About
            </a>

            <div className="my-2 border-t border-gray-200" />

            {/* MOBILE SEARCH */}

            <form
              onSubmit={handleSearch}
              className="flex items-center gap-2 rounded-xl bg-violet-50 p-2"
            >
              <Search
                size={20}
                className="ml-2 shrink-0 text-violet-600"
              />

              <input
                type="text"
                value={searchText}
                onChange={(e) =>
                  setSearchText(e.target.value)
                }
                placeholder="Search products..."
                className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm outline-none"
              />

              <button
                type="submit"
                className="rounded-lg bg-violet-600 px-4 py-3 text-xs font-bold text-white"
              >
                Search
              </button>
            </form>

            {/* MOBILE WISHLIST */}

            <Link
              to="/wishlist"
              onClick={() => setMobileMenu(false)}
              className="flex items-center justify-between rounded-xl bg-pink-50 px-5 py-4 font-bold text-pink-700"
            >
              <span className="flex items-center gap-3">
                <Heart size={20} />
                Wishlist
              </span>

              {wishlistCount > 0 && (
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-500 text-xs font-black text-white">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* MOBILE CART */}

            <Link
              to="/cart"
              onClick={() => setMobileMenu(false)}
              className="flex items-center justify-between rounded-xl bg-blue-50 px-5 py-4 font-bold text-blue-700"
            >
              <span className="flex items-center gap-3">
                <ShoppingCart size={20} />
                Cart
              </span>

              {cartCount > 0 && (
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-600 text-xs font-black text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* MOBILE LOGIN */}

            <Link
              to="/login"
              onClick={() => setMobileMenu(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 px-5 py-4 font-black text-white shadow-lg"
            >
              <User size={20} />
              Login
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;