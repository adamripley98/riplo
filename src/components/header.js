import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import Button from "./button";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-DARK mx-8">
      <div className="flex flex-wrap items-center justify-between p-4 mx-auto md:p-8">
        <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            <svg
              className="w-8 h-8 mr-2 fill-current"
              height="54"
              viewBox="0 0 54 54"
              width="54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="text-4xl font-bold uppercase">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>

        <button
          className="items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/services`,
              title: `Services`
            },
            {
              route: `/work`,
              title: `Work`
            },
            {
              route: `/approach`,
              title: `Approach`
            }
          ].map(link => (
            <Link
              className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-8 md:text-lg montserrat uppercase"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
          <Link
            className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-8 md:text-lg montserrat uppercase"
            key="Contact"
            to="/contact"
          >
            <Button value="Contact" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
