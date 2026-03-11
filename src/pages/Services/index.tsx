import { Link } from "react-router-dom";

const services = [
  {
    title: "Office Furniture & Equipment",
    desc: "Supply of ergonomic office furniture, desks, chairs, storage units, and essential workplace equipment to support efficient office operations.",
    image: "/images/pic6.jpeg",
  },
  {
    title: "Stationery & Office Consumables",
    desc: "Procurement and delivery of everyday office supplies including paper, notebooks, writing materials, folders, and other consumables.",
    image: "/images/stationary.jpeg",
  },
  {
    title: "IT Equipment",
    desc: "Sourcing of laptops, printers, networking accessories, and other technology equipment to support modern digital work environments.",
    image: "/images/IT.jpeg",
  },
  {
    title: "Electrical & Electronic Components",
    desc: "Provision of reliable electrical and electronic components required for office infrastructure, installations, and operational support.",
    image: "/images/pic4.jpeg",
  },
  {
    title: "Cleaning & Sanitation Products",
    desc: "Supply of cleaning agents, disinfectants, sanitation materials, and hygiene products to maintain safe and healthy workspaces.",
    image: "/images/clean.jpeg",
  },
  {
    title: "Car Rental",
    desc: "Cruise in our secure and affordable rides under the care of our seasoned and professional drivers",
    image: "/images/car.jpeg",
  },
  {
    title: "Real Estate",
    desc: "Purchase or rent a personal or office space for business or family without stress",
    image: "/images/estate.jpeg",
  },
  {
    title: "Maintenance Tools & Hardware",
    desc: "Supply of essential maintenance tools, repair equipment, and hardware materials needed for operational upkeep and facility maintenance.",
    image: "/images/pic7.jpeg",
  },
  {
    title: "Catering & Hospitality Supplies",
    desc: "Provision of catering equipment, hospitality materials, and food service supplies for events, offices, and institutional needs.",
    image: "/images/food.jpeg",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-poppins">

      {/* Hero Section */}
      <section className="relative h-125 flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-75"
          style={{ backgroundImage: "url('/images/services.jpeg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-2xl text-white/90 drop-shadow-md">
            Discover the range of solutions we provide to help businesses optimize their procurement, enhance efficiency, and make smarter decisions.
          </p>
        </div>

        <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-300 rounded-full opacity-30 animate-pulse mix-blend-multiply"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-300 rounded-full opacity-20 animate-pulse mix-blend-multiply"></div>
      </section>

      {/* Services Grid */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-tl-4xl rounded-br-4xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 md:h-72 object-cover"
              />
              <div className="p-6 flex flex-col items-start">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* How We Work Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-16">How We Work</h2>

          <div className="relative flex flex-col md:flex-row items-center justify-between">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-white/30 z-0"></div>

            {[
              { title: "Purchase Requisition", desc: "with specs and budget code" },
              { title: "Sourcing", desc: "Obtain quotes: conduct due diligence" },
              { title: "Bid Evaluation", desc: "Price, quality, time, warranty, supplier capacity" },
              { title: "Approval", desc: "per matrix" },
              { title: "Purchase Order", desc: "supplier acknowledgement" },
              { title: "Delivery and Inspection", desc: "issue good received note" },
              { title: "Payment", desc: "after complete dossier." },
              { title: "Records", desc: "retain for 7 years minimum" },
            ].map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center z-10 md:flex-1">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white text-blue-900 rounded-full flex items-center justify-center font-bold mb-4 z-20">
                  {idx + 1}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-white/80 text-sm md:text-base mt-1">{step.desc}</p>
              </div>
            ))}

            <div className="md:hidden mt-8 w-full h-1 bg-white/30"></div>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <section className="relative py-24 mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-52 flex justify-center">
          <div className="bg-white rounded-3xl shadow-sm p-10 md:p-16 text-center max-w-md md:max-w-5xl -mt-24 relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4">
              Let's optimize your procurement
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-6">
              Get in touch to discuss how our services can benefit your organization.
            </p>
            <Link to="/contacts">
              <button className="bg-blue-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;