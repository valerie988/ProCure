const AboutPage = () => {
  const teamMembers = [
    { name: "Kolday Jules", image: "", position: "CEO" },
    { name: "Djeukeu Fouodji", image: "", position: "DG" },
    { name: "Neh Valerie", image: "", position: "PM" },
    { name: "Titashipu Raissa", image: "", position: "CM" },
  ];

  return (
    <div className="bg-gray-50 font-poppins">

      {/* Hero Section */}
      <section className="relative text-white flex items-center justify-center h-125">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{ backgroundImage: "url('/images/pic3.jpeg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center max-w-3xl px-6 space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            About Us
          </h1>
          <p className="text-lg md:text-xl drop-shadow-md">
            Empowering businesses to simplify procurement, manage suppliers, and achieve financial success.
          </p>
        </div>

        <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-600 rounded-full opacity-30 mix-blend-multiply animate-spin-slow"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-purple-600 rounded-full opacity-20 mix-blend-multiply animate-spin-slow-reverse"></div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 space-y-24">

        {/* Mission */}
        <div className="md:flex md:items-center md:gap-8">
          <div className="md:w-1/2 text-center md:text-left space-y-4 z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Our Mission</h2>
            <p className="text-gray-600 text-lg md:text-xl">
              To deliver reliable, transparent, and value-driven procurement solutions that empower companies to operate efficiently and achieve their goals.<br/><br/>
              We are committed to sourcing quality goods, optimizing supply chains, and providing consistent customer satisfaction through integrity, professionalism, and innovative service delivery.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end relative mt-6 md:mt-0">
            <img
              src="/images/mission.png"
              alt="Mission"
              className="rounded-2xl w-72 h-64 md:w-80 md:h-72 object-cover"
            />
          </div>
        </div>

        {/* Vision */}
        <div className="md:flex md:items-center md:gap-8 md:flex-row-reverse">
          <div className="md:w-1/2 text-center md:text-left space-y-4 z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Our Vision</h2>
            <p className="text-gray-600 text-lg md:text-xl">
              To become a leading and trusted procurement partner in Cameroon and the wider region known for excellence, ethical standards, operational efficiency, and a relentless commitment to client success.<br/><br/>
              We aspire to set the benchmark for responsible procurement by using technology, strong vendor partnerships, and continuous improvement to deliver sustainable impact.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-start relative mt-6 md:mt-0">
            <img
              src="/images/vision.png"
              alt="Vision"
              className="rounded-2xl w-72 h-64 md:w-80 md:h-72 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">Our Core Values</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[
              { title: "Integrity & Transparency", desc: "Strict anti-corruption and anti-fraud systems." },
              { title: "Cost Efficiency", desc: "Strong supplier networks providing competitive pricing." },
              { title: "Speed & Reliability", desc: "On-time deliveries supported by efficient logistics." },
              { title: "Quality Assurance", desc: "Consistent verification of goods before delivery." },
              { title: "Flexibility", desc: "Ability to adapt to client needs, volumes, and timelines." },
              { title: "Professional Reporting", desc: "Complete procurement documentation for audits." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 w-64 md:w-72 hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 max-w-8xl mx-auto px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12 text-center">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, idx) => {
            const initials = member.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")
              .toUpperCase();

            return (
              <div key={idx} className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-4 w-60 hover:scale-105 transition-transform">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mb-4 bg-gray-200"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-blue-900 flex items-center justify-center text-white text-xl font-bold mb-4">
                    {initials}
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.position}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;