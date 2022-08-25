import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => (
  <div className="flex flex-col h-screen">
    <Navbar />
    <main className="flex-1 overflow-y-auto">{children}</main>
    <Footer />
  </div>
);

export default MainLayout;
