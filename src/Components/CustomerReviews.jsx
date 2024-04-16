const CustomerReviews = () => {
  return (
    <section className="bg-gradient-to-b from-gray-200 to-gray-300 py-16 mx-[1%] md:mx-[3%] rounded-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105">
            <div className="bg-gradient-to-b from-blue-400 to-blue-500 p-4">
              <p className="text-lg font-semibold text-white mb-2">John Doe</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 animate-pulse">
              We were truly impressed by the attention to detail and thoughtful design elements that made our experience unforgettable.
               Thank you, HavenCrest, for providing us with the ideal home for our family.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105">
            <div className="bg-gradient-to-b from-green-400 to-green-500 p-4">
              <p className="text-lg font-semibold text-white mb-2">Jane Smith</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 animate-pulse">
              HavenCrest Family Apartments exceeded our expectations! The spacious layout, modern amenities, and welcoming atmosphere made it the perfect choice for our family.
               We could not be happier with our decision to call HavenCrest home!</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105">
            <div className="bg-gradient-to-b from-purple-400 to-purple-500 p-4">
              <p className="text-lg font-semibold text-white mb-2">Robert Johnson</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 animate-pulse">
              HavenCrest Family Apartments are a true gem! From the cozy ambiance to the convenient location, it is the ideal place for families seeking comfort and convenience. Our stay was nothing short of delightful, and we can not wait to return.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="text-blue-500 hover:text-blue-700">See More Reviews</button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
