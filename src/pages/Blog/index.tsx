const blogPosts = [
  {
    title: "Simplifying Procurement: 5 Tips",
    excerpt: "Learn how to streamline your procurement process and save time with these expert tips.",
    category: "Insights",
    date: "Mar 9, 2026",
    img: "src/assets/images/progress.jpeg",
  },
  {
    title: "Why Procurement matters in organisations",
    excerpt: "Track ypur exppenses and give your money value through a upfront yearly procurement plan.",
    category: "News",
    date: "Mar 1, 2026",
    img: "src/assets/images/problem.jpeg",
  },
  {
    title: "Fun Facts About Procurement",
    excerpt: "Do you know procurement has been evolving for over 50 years? Discover fun trivia.",
    category: "Fun",
    date: "Feb 25, 2026",
    img: "src/assets/images/cube.jpeg",
  },

];

const BlogPage = () => {
  return (
    <div className="bg-gray-50 font-poppins">

      <section className="relative h-125 flex items-center justify-center text-center overflow-hidden">
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-75"
          style={{ backgroundImage: "url('src/assets/images/news.jpeg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Text */}
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            ProCure Insights & News
          </h1>
          <p className="text-lg md:text-2xl text-white/90 drop-shadow-md">
             Stay updated with the latest trends, news, and fun stories from Procure.
          </p>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-300 rounded-full opacity-30 animate-pulse mix-blend-multiply"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-300 rounded-full opacity-20 animate-pulse mix-blend-multiply"></div>
      </section>
    

      {/* Blog Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid gap-12 md:grid-cols-3">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col gap-4">
                <span className="text-blue-500 font-semibold text-sm">{post.category} · {post.date}</span>
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p className="text-gray-600 grow">{post.excerpt}</p>
                <button className="self-end mt-2 bg-blue-800 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition">
                  Coming Soon
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default BlogPage;