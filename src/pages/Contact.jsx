import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import toast from "react-hot-toast";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
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

    toast.success("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-black px-6 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-6xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
            Contact ZAVIO
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight sm:text-7xl">
            Let's
            <br />
            <span className="text-gray-500">Connect.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Have a question about our products or need help with your order?
            Our team is here to help.
          </p>

        </div>
      </section>

      {/* Contact Content */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Contact Information */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
              Get In Touch
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              We'd love to
              <br />
              hear from you.
            </h2>

            <p className="mt-6 max-w-md leading-8 text-gray-500">
              Whether you have a product question, feedback or need support,
              feel free to reach out to the ZAVIO team.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black text-white">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="font-bold">Email</p>
                  <p className="mt-1 text-sm text-gray-500">
                    support@zavio.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black text-white">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="font-bold">Phone</p>
                  <p className="mt-1 text-sm text-gray-500">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black text-white">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="font-bold">Location</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Chennai, Tamil Nadu, India
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[30px] bg-gray-50 p-7 sm:p-10">

            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                Send a Message
              </p>

              <h2 className="mt-2 text-3xl font-black">
                How can we help?
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-black"
                />

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

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-black"
                />

                {errors.email && (
                  <p className="mt-2 text-xs font-medium text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-black"
                />

                {errors.subject && (
                  <p className="mt-2 text-xs font-medium text-red-500">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-black"
                />

                {errors.message && (
                  <p className="mt-2 text-xs font-medium text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Send Message
                <Send size={17} />
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t bg-gray-50 px-6 py-16 text-center">

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

export default Contact;
