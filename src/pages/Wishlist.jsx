import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Trash2, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(
      localStorage.getItem("zavio-wishlist") || "[]"
    );

    setWishlist(savedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter(
      (product) => product.id !== id
    );

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "zavio-wishlist",
      JSON.stringify(updatedWishlist)
    );

    window.dispatchEvent(new Event("wishlistUpdated"));

    toast.success("Removed from wishlist");
  };

  const addToCart = (product) => {
    const cart = JSON.parse(
      localStorage.getItem("zavio-cart") || "[]"
    );

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    } else {
      updatedCart = [
        ...cart,
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
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 px-6 py-12">
      <div className="mx-auto w-full max-w-[1600px]">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 shadow-lg">
              <Heart
                size={30}
                className="fill-white text-white"
              />
            </div>
          </div>

          <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
            My Wishlist
          </h1>

          <p className="mt-3 text-lg text-gray-500">
            {wishlist.length}{" "}
            {wishlist.length === 1 ? "product" : "products"} saved
          </p>
        </div>

        {/* Empty Wishlist */}
        {wishlist.length === 0 ? (
          <div className="mx-auto max-w-2xl rounded-3xl bg-white p-12 text-center shadow-xl">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-pink-50">
              <Heart
                size={42}
                className="text-pink-500"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Your wishlist is empty
            </h2>

            <p className="mt-3 text-gray-500">
              Save your favourite ZAVIO products here and
              come back to them anytime.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-3 font-semibold text-white shadow-lg hover:scale-105"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>
          </div>
        ) : (
          <>
            {/* Product Grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {wishlist.map((product) => (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-purple-50">

                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain p-8 transition duration-500 group-hover:scale-110"
                      />
                    </Link>

                    {/* Remove */}
                    <button
                      onClick={() =>
                        removeFromWishlist(product.id)
                      }
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-md hover:bg-red-500 hover:text-white"
                      title="Remove from wishlist"
                    >
                      <Trash2 size={18} />
                    </button>

                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-3 py-1 text-xs font-bold text-white shadow">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">

                    <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-purple-600">
                      {product.category}
                    </p>

                    <Link to={`/product/${product.id}`}>
                      <h2 className="text-xl font-bold text-gray-900 transition hover:text-purple-600">
                        {product.name}
                      </h2>
                    </Link>

                    {/* Rating */}
                    {product.rating && (
                      <div className="mt-3 flex items-center gap-2">
                        <span className="rounded-full bg-yellow-100 px-2 py-1 text-sm font-semibold text-yellow-700">
                          ★ {product.rating}
                        </span>

                        {product.reviews && (
                          <span className="text-sm text-gray-400">
                            ({product.reviews} reviews)
                          </span>
                        )}
                      </div>
                    )}

                    {/* Price */}
                    <div className="mt-4 flex items-center gap-3">
                      <span className="text-2xl font-extrabold text-gray-900">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>

                      {product.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ₹{product.oldPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart */}
                    <button
                      onClick={() => addToCart(product)}
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-3 font-bold text-white shadow-md hover:from-purple-700 hover:to-pink-600 hover:shadow-lg"
                    >
                      <ShoppingCart size={19} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Button */}
            <div className="mt-12 text-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border-2 border-purple-600 px-7 py-3 font-semibold text-purple-600 hover:bg-purple-600 hover:text-white"
              >
                Continue Shopping
                <ArrowRight size={18} />
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default Wishlist;