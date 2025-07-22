import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="bg-black text-white text-sm shadow-md z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center h-16 gap-2 md:gap-0">

        {/* Left Side - Always visible */}
        <div className="flex items-center gap-4">
          <span className="relative inline-block">
            📞 +971 50 576 1914
          </span>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex justify-center md:justify-end items-center gap-5 mt-1 md:mt-0">

          {/* Facebook */}
          <a
            href="#"
            className="group relative text-[#1877F2] hover:scale-110 transition duration-300 transform"
          >
            <FaFacebookF size={18} />
            <span className="absolute -bottom-1 left-1/2 w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-[#1877F2] rounded-full transform -translate-x-1/2"></span>
          </a>

          {/* Twitter */}
          <a
            href="#"
            className="group relative text-[#1DA1F2] hover:scale-110 transition duration-300 transform"
          >
            <FaTwitter size={18} />
            <span className="absolute -bottom-1 left-1/2 w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-[#1DA1F2] rounded-full transform -translate-x-1/2"></span>
          </a>

          {/* Instagram */}
          <a
            href="#"
            className="group relative text-[#E1306C] hover:scale-110 transition duration-300 transform"
          >
            <FaInstagram size={18} />
            <span className="absolute -bottom-1 left-1/2 w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-[#E1306C] rounded-full transform -translate-x-1/2"></span>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="group relative text-[#0A66C2] hover:scale-110 transition duration-300 transform"
          >
            <FaLinkedinIn size={18} />
            <span className="absolute -bottom-1 left-1/2 w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-[#0A66C2] rounded-full transform -translate-x-1/2"></span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Topbar;
