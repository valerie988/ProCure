import { Link } from "react-router-dom";

   {/*
const partners = [
  { name: "Company A", logo: "src/assets/images/pic1.jpeg" },
  { name: "Company B", logo: "src/assets/images/pic1.jpeg" },
  { name: "Company C", logo: "src/assets/images/pic1.jpeg" },
  { name: "Company D", logo: "src/assets/images/pic1.jpeg" },
];*/}

const PartnerPage = () => {
  return (
    <div className="bg-gray-50 font-poppins">
      {/* Hero Section */}
      <section className="relative h-125 flex items-center justify-center text-center overflow-hidden">
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-75"
          style={{ backgroundImage: "url('src/assets/images/pic3.jpeg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Text */}
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            Partner with Procure
          </h1>
          <p className="text-lg md:text-2xl text-white/90 drop-shadow-md">
            Collaborate with us to unlock new opportunities, grow your business, and deliver exceptional value.
          </p>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-300 rounded-full opacity-30 animate-pulse mix-blend-multiply"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-300 rounded-full opacity-20 animate-pulse mix-blend-multiply"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
          Why Partner with Us?
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: "🚀",
              title: "Business Growth",
              desc: "Expand your reach and increase revenue through strategic collaboration.",
            },
            {
              icon: "🤝",
              title: "Seamless Collaboration",
              desc: "Work with a team committed to your success and continuous improvement.",
            },
            {
              icon: "💡",
              title: "Innovation & Tools",
              desc: "Leverage advanced platforms and insights to deliver superior value.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Logos 
      <section className="py-24 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
          Our Trusted Partners
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500"
            >
              <img src={partner.logo} alt={partner.name} className="h-full object-contain" />
            </div>
          ))}
        </div>
      </section> */}

      {/* Call-to-Action */}
      <section className="py-24 relative text-blue-900 text-center overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 drop-shadow-lg">
          Ready to Partner with Us?
        </h2>
        <p className="text-lg md:text-xl mb-8 drop-shadow-md max-w-2xl mx-auto">
          Join Procure today and grow your business with a trusted partner.
        </p>
        <Link
          to="/contacts"
          className="bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-all inline-block"
        >
          Join Now
        </Link>

        {/* Decorative Circles */}
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-yellow-200 rounded-full opacity-20 animate-pulse mix-blend-multiply"></div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-300 rounded-full opacity-20 animate-pulse mix-blend-multiply"></div>
      </section>
    </div>
  );
};

export default PartnerPage;