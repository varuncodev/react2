import React from "react";

const categories = [
  {
    name: "Fashion",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500",
  },
  {
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    name: "Watches",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500",
  },
  {
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
];

const products = [
  {
    name: "Nike Air Max",
    price: "₹4,999",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    name: "Premium Hoodie",
    price: "₹1,899",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
  },
  {
    name: "Luxury Watch",
    price: "₹7,499",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    name: "Headphones",
    price: "₹2,999",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
];

const Home = () => {
  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-700 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-12">

          <div>
            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
              🔥 Summer Sale 60% OFF
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold mt-6 leading-tight">
              Upgrade Your
              <span className="text-yellow-300"> Style</span>
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              Explore thousands of premium fashion products with unbeatable
              prices and lightning-fast delivery.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-yellow-400 text-black px-7 py-3 rounded-xl font-bold hover:scale-105 transition">
                Shop Now
              </button>

              <button className="border border-white px-7 py-3 rounded-xl hover:bg-white hover:text-black transition">
                Explore
              </button>
            </div>

            <div className="flex gap-10 mt-10">
              <div>
                <h2 className="text-3xl font-bold">50K+</h2>
                <p>Happy Customers</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">1000+</h2>
                <p>Products</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">4.9⭐</h2>
                <p>Ratings</p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900"
              alt=""
              className="rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* FEATURES */}

      <section className="max-w-7xl mx-auto py-10 px-6 grid md:grid-cols-4 gap-6">

        {[
          "🚚 Free Shipping",
          "💳 Secure Payment",
          "🔄 Easy Returns",
          "⭐ Premium Quality",
        ].map((item) => (
          <div
            key={item}
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition"
          >
            <h2 className="font-bold text-lg">{item}</h2>
          </div>
        ))}

      </section>

      {/* CATEGORIES */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Shop By Category
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {categories.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-5 text-center">
                <h3 className="font-bold text-xl">{item.name}</h3>
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* PRODUCTS */}

      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Products
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {products.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-64 w-full object-cover hover:scale-110 transition duration-500"
                />

                <div className="p-5">

                  <h3 className="font-bold text-xl">{item.name}</h3>

                  <p className="text-pink-600 font-bold text-xl mt-2">
                    {item.price}
                  </p>

                  <button className="w-full bg-indigo-600 text-white py-3 rounded-xl mt-5 hover:bg-indigo-700">
                    Add To Cart
                  </button>

                </div>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* NEWSLETTER */}

      <section className="bg-gradient-to-r from-indigo-900 to-purple-700 text-white py-20">

        <div className="max-w-3xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Join Our Newsletter
          </h2>

          <p className="mt-4">
            Get exclusive discounts and latest arrivals directly in your inbox.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-8">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-xl text-black"
            />

            <button className="bg-yellow-400 text-black px-8 rounded-xl font-bold hover:bg-yellow-300">
              Subscribe
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;