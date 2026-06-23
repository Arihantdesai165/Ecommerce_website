import { Routes, Route } from "react-router-dom";
import Footer from "~containers/Footer";
import Navbar from "~containers/Navbar";
import Sidebar from "~containers/Sidebar";
import Home from "~pages/Home";
import NoPage from "~pages/NoPage";
import ProductDetails from "~pages/ProductDetails";
import ScrollToTop from "~/components/ScrollToTop";

// Application Root Component
const App = () => {
  return (
    <div className="app-container overflow-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        {/* Main Routing */}
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          {/* Fallback route */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </main>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default App;
