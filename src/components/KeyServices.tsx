const KeyServices = () => {
  const services = [
  {
    title: "Procurement & Sourcing",
    desc: "Market analysis, vendor identification, competitive sourcing through quotations and tenders, supplier evaluation, and contract negotiation to secure reliable and cost-effective procurement solutions.",
    img: "src/assets/images/services.jpeg",
  },
  {
    title: "Supply & Delivery",
    desc: "Procurement and delivery of office supplies, equipment, ICT materials, consumables, and operational goods with efficient logistics and bulk purchasing options.",
    img: "src/assets/images/pic18.jpeg",
  },
  {
    title: "Quality & Compliance",
    desc: "Verification of product specifications, transparent documentation and recordkeeping, compliance with donor procurement guidelines, and supplier risk assessment.",
    img: "src/assets/images/pic14.jpeg",
  },
  {
    title: "Client Support Services",
    desc: "Customized procurement planning, advisory on cost-effective sourcing, and dedicated after-sales support including issue resolution and supplier coordination.",
    img: "src/assets/images/pic15.jpeg",
  },
];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <span className="text-blue-500 uppercase text-sm font-semibold mb-2">
          Core Competences
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12 font-poppins">
          Key Competences We Offer
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="
                bg-white rounded-tl-4xl rounded-br-3xl overflow-hidden shadow-lg flex flex-col
                transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl
                motion-safe:animate-fadeIn
              "
              style={{ animationDelay: `${idx * 150}ms` }} // staggered entrance
            >
              {/* Image full width at top */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-left mb-2">{service.title}</h3>
                <p className="text-gray-600 text-left grow">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind custom animation (fade in) */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.6s ease forwards;
          }
        `}
      </style>
    </section>
  );
};

export default KeyServices;