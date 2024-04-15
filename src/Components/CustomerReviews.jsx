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
                  John provided exceptional service! He was prompt, 
                  courteous, and knowledgeable. I highly recommend 
                  his services to anyone looking to buy or sell a home.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105">
            <div className="bg-gradient-to-b from-green-400 to-green-500 p-4">
              <p className="text-lg font-semibold text-white mb-2">Jane Smith</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 animate-pulse">
                  Jane helped me find my dream home in just a few weeks! 
                  She listened to my needs and preferences and was always 
                  available to answer my questions. I could not be happier with her service.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105">
            <div className="bg-gradient-to-b from-purple-400 to-purple-500 p-4">
              <p className="text-lg font-semibold text-white mb-2">Robert Johnson</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 animate-pulse">
                  Robert went above and beyond to negotiate 
                  a great deal for me. His attention to detail
                   and professionalism made the entire process 
                   smooth and stress-free. I highly recommend him
                    to anyone in need of a real estate agent.</p>
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
