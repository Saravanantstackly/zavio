import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  User,
} from "lucide-react";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    toast.success("Account created successfully!");

    setTimeout(() => {
      navigate("/login");
    }, 700);
  };

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-gray-50 px-5 py-12">

      <div className="grid w-full max-w-5xl overflow-hidden rounded-[35px] bg-white shadow-xl md:grid-cols-2">

        {/* Left */}
        <div className="hidden bg-black p-12 text-white md:flex md:flex-col md:justify-between">

          <div>
            <p className="text-2xl font-black">
              ZAVIO<span className="text-gray-500">.</span>
            </p>

            <p className="mt-20 text-sm uppercase tracking-[0.3em] text-gray-500">
              Join ZAVIO
            </p>

            <h1 className="mt-4 text-5xl font-black leading-tight">
              Your
              <br />
              Future Starts.
            </h1>

            <p className="mt-6 max-w-sm leading-7 text-gray-400">
              Create your account and explore the latest smart technology from
              ZAVIO.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            © 2026 ZAVIO. All rights reserved.
          </p>

        </div>

        {/* Form */}
        <div className="p-7 sm:p-10 lg:p-14">

          <div className="mb-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Get Started
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Create Account
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Join ZAVIO and experience the future.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Full Name
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5">
                <User size={19} className="text-gray-400" />

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>

              {errors.name && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Email Address
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5">
                <Mail size={19} className="text-gray-400" />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>

              {errors.email && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Password
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5">
                <LockKeyhole size={19} className="text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Minimum 6 characters"
                  className="w-full bg-transparent text-sm outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-black"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Confirm Password
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5">
                <LockKeyhole size={19} className="text-gray-400" />

                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>

              {errors.confirmPassword && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-black px-6 py-4 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Create Account
            </button>

          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-black hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </main>
  );
}

export default Signup;