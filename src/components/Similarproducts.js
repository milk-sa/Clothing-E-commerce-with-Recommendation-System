import React from 'react';

export default function SimilarProducts() {
  return (
    <section className="px-8 py-12">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Find similar products</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Add product cards here later */}
        <div className="bg-white p-4 shadow rounded">Product 1</div>
        <div className="bg-white p-4 shadow rounded">Product 2</div>
        <div className="bg-white p-4 shadow rounded">Product 3</div>
      </div>
    </section>
  );
}
