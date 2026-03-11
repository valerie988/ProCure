
    import { FaLinkedin, FaTwitter, FaFacebookF} from "react-icons/fa";


const Index = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      <section className="relative h-125 flex items-center justify-center text-center overflow-hidden">
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-75"
          style={{ backgroundImage: "url('src/assets/images/contact.jpeg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Text */}
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-2xl text-white/90 drop-shadow-md">
           We'd love to hear from you. Reach out for any procurement questions.
          </p>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-300 rounded-full opacity-30 animate-pulse mix-blend-multiply"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-300 rounded-full opacity-20 animate-pulse mix-blend-multiply"></div>
      </section>


      {/* Floating Contact Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-20 relative z-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <a
            href="mailto:neh16valerie@gmail.com"
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition"
          >
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-bold text-lg text-gray-800">Email</h3>
            <p className="text-gray-600 text-sm">procoresolutions@hotmail.com</p>
          </a>

          <a
            href="tel:+237600000000"
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition"
          >
            <div className="text-3xl mb-3">📞</div>
            <h3 className="font-bold text-lg text-gray-800">Phone</h3>
            <p className="text-gray-600 text-sm">+237 658 242 012</p>
          </a>

          <a
            href="https://maps.google.com/?q=Yaounde+Cameroon"
            target="_blank"
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition"
          >
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-bold text-lg text-gray-800">Location</h3>
            <p className="text-gray-600 text-sm">Olezoa, Yaoundé</p>
          </a>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl mb-3">🕒</div>
            <h3 className="font-bold text-lg text-gray-800">Hours</h3>
            <p className="text-gray-600 text-sm">
              Mon – Fri<br />8:00 AM –5:00 PM
            </p>
          </div>

        </div>
      </section>

      {/* Location Intro */}
      <section className="max-w-4xl mx-auto text-center px-6 md:px-12 py-20">

        <h1 className="text-3xl font-bold text-blue-900 mb-3">
          Visit our headquarters
        </h1>
        <p className="text-gray-600">
          We're located in the heart of Yaoundé, Cameroon. Feel free to stop by
          during our business hours.
        </p>
      </section>

      {/* Map */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="rounded-2xl overflow-hidden shadow-lg h-96">
          <iframe
            src="https://maps.google.com/maps?q=Yaounde%20Cameroon&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </section>


{/* Connect With Us */}
<section className="bg-white py-20">
  <div className="max-w-4xl mx-auto text-center px-6 md:px-12">
    <h2 className="text-3xl font-bold text-blue-800 mb-4">
      Connect With Us
    </h2>
    <p className="text-gray-600 mb-10">
      Stay updated and follow our journey on social media.
    </p>

    <div className="flex justify-center gap-10 text-3xl">

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/company/yourcompany"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-blue-700 transition"
      >
        <FaLinkedin />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com/yourcompany"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-sky-500 transition"
      >
        <FaTwitter />
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com/yourcompany"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-blue-600 transition"
      >
        <FaFacebookF />
      </a>

      {/* Instagram */}


    </div>
  </div>
</section>
    </div>
  )
}

export default Index