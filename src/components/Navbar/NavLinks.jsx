import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import center from "../../assets/general.webp"

const NavLinks = ({ setOpen }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  const handleLinkClick = () => {
    setOpen(false);
  };


  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}

              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${heading === link.name ? "chevron-up" : "chevron-down"
                    }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white w-[750px] rounded-lg p-5 grid grid-cols-4  custom-z-index">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-gray-600 my-2.5">
                            <h2 className="text-xl font-bold  mb-2">
                              {slink.Head}
                            </h2>

                            {slink.target === "_blank" ? (
                              <a
                                href={slink.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary"
                              >
                                {slink.name}
                              </a>
                            ) : (
                              <Link
                                to={slink.link}
                                className="hover:text-primary"
                              >
                                {slink.name}
                              </Link>
                            )}
                          </li>
                        ))}
                      </div>
                    ))}

                    {/* Logo de eyncor en el megamenu */}

                    <img src={center} alt="logo" className="w-52 object-cover h-full top-0 right-0" />

                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }

                  >
                    {slinks.Head}
                  </h1>
                  {slinks.sublink.map((slink) => (
                    <li onClick={handleLinkClick} className="py-3 pl-14">
                      <Link to={slink.link}>{slink.name}</Link>
                    </li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
