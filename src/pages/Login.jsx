import { Link } from "react-router-dom";
import { User, ArrowLeft, Sparkles, ShieldCheck, Zap } from "lucide-react";
import PageAnimation from "../components/PageAnimation";

function Login() {
  return (
    <PageAnimation>
      <main className="min-h-[calc(100vh-96px)] bg-gradient-to-br from-violet-100 via-pink-50 to-blue-100 px-5 py-8 sm:px-8 sm:py-10">

        {/* Main Container */}
        <div className="mx-auto flex min-h-[calc(100vh-176px)] w-full max-w-[1600px] items-center justify-center">

          <div className="grid w-full max-w-7xl overflow-hidden rounded-[35px] bg-white shadow-2xl lg:grid-cols-2">

            {/* ================= LEFT BRAND SECTION ================= */}

            <div className="relative hidden min-h-[680px] overflow-hidden bg-gradient-to-br from-violet-600 via-fuchsia-500 to-pink-500 p-12 text-white lg:flex lg:flex-col lg:justify-between xl:p-16">

              {/* Decorative Circles */}

              <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10" />

              <div className="absolute -bottom-28 -left-24 h-96 w-96 rounded-full bg-white/10" />

              <div className="absolute right-20 top-1/2 h-32 w-32 rounded-full bg-blue-400/20 blur-2xl" />

              {/* Content */}

              <div className="relative z-10">

                {/* Logo */}

                <Link
                  to="/"
                  className="flex w-fit items-center gap-3"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white text-xl font-black text-violet-600 shadow-xl">
                    Z
                  </div>

                  <span className="text-2xl font-black tracking-wide">
                    ZAVIO
                  </span>
                </Link>

                {/* Main Text */}

                <div className="mt-24 xl:mt-28">

                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-white/75">
                    <Sparkles size={16} />
                    Feel The Future
                  </div>

                  <h1 className="mt-5 text-5xl font-black leading-[1.05] xl:text-6xl">
                    Welcome back
                    <br />
                    to ZAVIO.
                  </h1>

                  <p className="mt-7 max-w-lg text-base leading-8 text-white/80">
                    Sign in to discover the latest technology,
                    manage your orders and enjoy a smarter
                    shopping experience.
                  </p>

                </div>

                {/* Feature Cards */}

                <div className="mt-12 grid grid-cols-2 gap-4">

                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                    <Zap size={20} />

                    <p className="mt-3 text-sm font-bold">
                      Latest Tech
                    </p>

                    <p className="mt-1 text-xs text-white/60">
                      Discover new products
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                    <ShieldCheck size={20} />

                    <p className="mt-3 text-sm font-bold">
                      Secure Shopping
                    </p>

                    <p className="mt-1 text-xs text-white/60">
                      Safe & reliable
                    </p>
                  </div>

                </div>

              </div>

              {/* Bottom Text */}

              <div className="relative z-10 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">

                <p className="text-sm font-bold">
                  Technology that fits your lifestyle.
                </p>

                <p className="mt-2 text-xs text-white/60">
                  Premium electronics • Smart living • ZAVIO
                </p>

              </div>

            </div>

            {/* ================= RIGHT LOGIN SECTION ================= */}

            <div className="flex min-h-[680px] items-center justify-center bg-white p-7 sm:p-12 lg:p-14 xl:p-20">

              <div className="w-full max-w-md">

                {/* Mobile Logo */}

                <div className="mb-10 flex items-center justify-center gap-3 lg:hidden">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-pink-500 text-xl font-black text-white shadow-lg">
                    Z
                  </div>

                  <span className="text-2xl font-black text-gray-900">
                    ZAVIO
                  </span>

                </div>

                {/* Heading */}

                <div className="text-center">

                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-600">
                    My Account
                  </p>

                  <h2 className="mt-3 text-4xl font-black text-gray-900 sm:text-5xl">
                    Sign In
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    Welcome back! Please enter your details.
                  </p>

                </div>

                {/* ================= FORM ================= */}

                <form
                  className="mt-10 space-y-6"
                  onSubmit={(e) => e.preventDefault()}
                >

                  {/* Email */}

                  <div>

                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
                    />

                  </div>

                  {/* Password */}

                  <div>

                    <div className="mb-2 flex items-center justify-between">

                      <label className="text-sm font-bold text-gray-700">
                        Password
                      </label>

                      <button
                        type="button"
                        className="text-xs font-bold text-violet-600 hover:text-pink-500"
                      >
                        Forgot Password?
                      </button>

                    </div>

                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
                    />

                  </div>

                  {/* Remember Me */}

                  <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-600">

                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 accent-violet-600"
                    />

                    Remember me

                  </label>

                  {/* Login Button */}

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 py-4 font-black text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <User size={19} />
                    Sign In
                  </button>

                </form>

                {/* Create Account */}

                <div className="mt-8 text-center">

                  <p className="text-sm text-gray-500">
                    Don't have an account?{" "}

                    <button
                      type="button"
                      className="font-bold text-violet-600 hover:text-pink-500"
                    >
                      Create Account
                    </button>
                  </p>

                </div>

                {/* Back To Home */}

                <Link
                  to="/"
                  className="mx-auto mt-7 flex w-fit items-center gap-2 text-sm font-semibold text-gray-500 hover:text-violet-600"
                >
                  <ArrowLeft size={17} />
                  Back to ZAVIO
                </Link>

              </div>

            </div>

          </div>

        </div>

      </main>
    </PageAnimation>
  );
}

export default Login;