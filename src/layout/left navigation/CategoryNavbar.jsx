import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CategoryNavbar = () => {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    fetch('/data/categories.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setNavLinks(data);
      }
      )

  }, []);

  return (
    <div className="w-[270px]">
      <h2 className="text-left mb-5 text-neutral-700 text-xl font-semibold">
        All Category
      </h2>
      <section className="flex flex-col items-start">
        {
          navLinks.map(navLink =>
            <NavLink
              className="left-nav-link text-neutral-400 text-xl font-medium py-[17px] pl-[50px] border rounded-[5px] w-full text-left"
              key={navLink.id}
            >
              {navLink.name}
            </NavLink>)
        }
      </section>
    </div>
  );
};

export default CategoryNavbar;