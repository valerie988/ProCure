const Intro = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Image */}
        <div>
          <img
            src="src/assets/images/pic17.jpeg"
            alt="Team working"
            className="rounded-xl shadow-lg object-cover w-full h-96 md:h-165"
          />
        </div>

        {/* Right Side: Text + Image */}
        <div className="flex flex-col justify-start gap-6">
          {/* Text */}
          <div>
            <span className="text-blue-500 uppercase text-sm font-semibold mb-2">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 font-poppins">
              Our Path to Trust and Financial Success
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-6">
              At Procure, our journey started with a clear mission: to empower businesses to 
              streamline their procurement process and achieve financial efficiency. 
              We provide expert guidance and tools to ensure smooth operations and informed decisions.
            </p>
        
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg w-max hover:bg-blue-600 transition">
              Read More
            </button>
      
          </div>

          {/* Image below text */}
          <div>
            <img
              src="src/assets/images/problem.jpeg"
              alt="Meeting"
              className="rounded-xl shadow-lg object-cover w-full h-64 md:h-80"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Intro;