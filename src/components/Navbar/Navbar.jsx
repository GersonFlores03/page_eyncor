import { useState } from "react";
import { Link } from "react-router-dom";
import eyncor from "../../assets/eyncor.webp";
import NavLinks from "./NavLinks";
const Navbar = () => {

  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <nav className="nav_eycnor p-2  lg:p-0 ">
      <div className="lg:flex lg:items-center font-medium lg:justify-around">
        <div className=" flex items-center justify-center gap-60 lg:flex lg:justify-between lg::items-center">
          <Link to={"/"}> <img src={eyncor} className=" w-40  lg:w-60 lg:h-20 cursor-pointer object-contain" alt="eyncorlogo" /> </Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8">
          <NavLinks />
          <li>
            <Link to="/Cliente" className="py-7 px-3 inline-block">
              Clientes
            </Link>
          </li>
        </ul>
        <div className="hidden sm:flex items-center  lg:block space-x-6">
         
          <Link to={'/acceso-clientes'}>  <button className="btn_contacto">Acceso clientes</button>    </Link>

          <a href="http://www.app.eyncor.com/portal_clientes/acceso_eyncor_clientes/" target="_blank" rel="noopener noreferrer">
            <button className="btn_contacto">Consulta FE</button>
          </a>


          <Link to={"/contacto"}> <button className="btn_contacto">Contáctanos</button> </Link>

        </div>



        

        {/* Mobile nav */}
        <ul
          className={`
        md:hidden menu_eyncor fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}

        >
          <div className="text-3xl md:hidden absolute top-0 right-0 mr-4 mt-4" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>


          <div className="mb-7">

            <NavLinks setOpen={setOpen} />

          </div>


          <div onClick={handleLinkClick} className="flex items-center justify-evenly flex-col gap-5">
            <a href="http://www.app.eyncor.com/portal_clientes/acceso_eyncor_clientes/" target="_blank" rel="noopener noreferrer">
              <button className="btn_contacto">Consulta FE</button>
            </a>
            <div className="mb-10">

              <Link to={"/contacto"}> <button className="btn_contacto">Contáctanos</button> </Link>

            </div>

            <Link to={"/"}> <img src={eyncor} className=" w-40  lg:w-60 lg:h-20 cursor-pointer object-contain" alt="eyncorlogo" /> </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
