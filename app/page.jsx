import React from "react";

export default function OrthodoxPatchStore() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">HolyThread</h1>
        <p className="text-gray-400 mt-2">Orthodox Christian Morale Patches</p>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-zinc-900 rounded-2xl p-4 shadow-lg">
            <img src={product.image} alt={product.name} className="rounded-xl mb-4" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-400 text-sm mb-2">{product.description}</p>
            <p className="font-bold mb-3">${product.price}</p>
            <button className="bg-white text-black px-4 py-2 rounded-xl w-full">
              Buy Now
            </button>
          </div>
        ))}
      </section>

      <footer className="text-center mt-12 text-gray-500 text-sm">
        <p>© 2026 HolyThread. All rights reserved.</p>
      </footer>
    </div>
  );
}

const products = [
  {
    name: "IC XC Patch",
    description: "Jesus Christ Orthodox symbol patch with Velcro backing.",
    price: "14.99",
    image: "https://via.placeholder.com/300"
  },
  {
    name: "Orthodox Cross Patch",
    description: "Classic Eastern Orthodox cross embroidered patch.",
    price: "12.99",
    image: "https://via.placeholder.com/300"
  },
  {
    name: "Byzantine Eagle Patch",
    description: "Double-headed eagle symbol patch.",
    price: "16.99",
    image: "https://via.placeholder.com/300"
  }
];
