import { Link } from "react-router-dom";
import { ArrowRight, Headphones, ShieldCheck, Sparkles, Zap } from "lucide-react";

function About() {
  const features = [
    {
      icon: <Sparkles size={24} />,
      title: "Modern Design",
      text: "Clean and stylish products designed for everyday life.",
    },
    {
      icon: <Zap size={24} />,
      title: "Smart Technology",
      text: "Powerful technology created to make your experience better.",
    },
    {
      icon: <Headphones size={24} />,
      title: "Better Experience",
      text: "Technology that fits naturally into your daily lifestyle.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Built With Care",
      text: "Reliable products with quality and attention to detail.",
    },
  ];

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-black px-6 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-6xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
            About ZAVIO
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight sm:text-7xl">
            Technology
            <br />
            <span className="text-gray-500">Made Different.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            ZAVIO is a modern consumer electronics brand focused on creating
            stylish, practical and innovative technology for everyday life.
          </p>

        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Feel the
              <br />
              Future.
            </h2>
          </div>

          <div>
            <p className="leading-8 text-gray-600">
              At ZAVIO, we believe technology should be more than just
              functional. It should look good, feel good and make everyday
              moments better.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              From immersive audio to smart wearables and powerful accessories,
              our products are designed around the way people live, work and
              connect.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Our goal is simple — bring modern technology closer to everyone
              through thoughtful design, useful features and an effortless
              experience.
            </p>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
              Why ZAVIO
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Designed for
              <br />
              everyday life.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-lg font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {feature.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl rounded-[35px] bg-black px-7 py-14 text-center text-white sm:px-12 sm:py-20">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
            Our Mission
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
            Make technology feel simple, stylish and exciting.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            We are building a brand where technology meets design — creating
            products that people enjoy using every single day.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black hover:bg-gray-200"
          >
            Explore Products
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t px-6 py-16 text-center">
        <p className="text-2xl font-black sm:text-3xl">
          ZAVIO<span className="text-gray-400">.</span>
        </p>

        <p className="mt-3 text-sm text-gray-500">
          Feel the Future.
        </p>
      </section>

    </main>
  );
}

export default About;
