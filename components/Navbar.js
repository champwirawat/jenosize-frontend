import { FaHome, FaSlidersH } from "react-icons/fa";

const Navbar = () => (
  <nav className="bg-primary text-white px-3 py-5 flex items-center">
    <FaHome size={22} />
    <div className="flex-1">
      <p className="font-bold text-center">All Report</p>
    </div>
    <FaSlidersH size={22} />
  </nav>
);

export default Navbar;
