// Navbar Header Component
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "~contexts/SidebarContext";
import { CartContext } from "~contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "~assets/logo.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <nav className="container px-[3%] mx-auto flex items-center justify-between h-full">
        <div className="flex items-center gap-3">
          <Link to={"/"}>
            <img className="max-w-[40px]" src={Logo} alt="" />
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
          aria-label="Open shopping cart"
        >
          <BsBag className="text-2xl" />
          <div
            className="
          bg-red-500 absolute -right-2 -bottom-2 
          text-[12px] w-[18px] h-[18px] text-white
          rounded-full flex justify-center items-center
          "
          >
            {itemAmount}
          </div>
        </button>
      </nav>
    </header>
  );
};
export default Navbar;
