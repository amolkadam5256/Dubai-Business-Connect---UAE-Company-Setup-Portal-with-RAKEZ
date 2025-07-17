import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="bg-black text-white text-sm px-4 md:px-6 py-2">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">

        {/* Left Side - Hide on small devices */}
        <div className="hidden md:flex flex-wrap items-center gap-4">
          <span>📞 +971 50 576 1914</span>
          <a href="#" className="hover:text-[#19CAB7] transition duration-300">FAQ</a>
          <a href="#" className="hover:text-[#19CAB7] transition duration-300">PORTAL 360</a>
          <a href="#" className="hover:text-[#12A652] transition duration-300">REGULATIONS</a>
          <a href="#" className="hover:text-[#12A652] transition duration-300">CAREERS</a>
        </div>

        <div className="flex justify-center md:justify-end w-full md:w-auto items-center gap-5">
          {/* Facebook - Blue */}
          <a href="#" className="text-[#1877F2] hover:scale-110 transition duration-300 transform">
            <FaFacebookF size={18} />
          </a>

          {/* Twitter - Sky Blue */}
          <a href="#" className="text-[#1DA1F2] hover:scale-110 transition duration-300 transform">
            <FaTwitter size={18} />
          </a>

          {/* Instagram - Pinkish Gradient */}
          <a href="#" className="text-[#E1306C] hover:scale-110 transition duration-300 transform">
            <FaInstagram size={18} />
          </a>

          {/* LinkedIn - Dark Blue */}
          <a href="#" className="text-[#0A66C2] hover:scale-110 transition duration-300 transform">
            <FaLinkedinIn size={18} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Topbar;
