import { FaWhatsapp } from "react-icons/fa";

const WhatsappFloat = () => {
  return (
    <a
      href="https://wa.me/237652173171"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg text-2xl hover:bg-green-600 hover:scale-110 transition duration-300 z-50 animate-bounce"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsappFloat;