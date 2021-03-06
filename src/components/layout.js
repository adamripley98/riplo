import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children, className, isDark }) {
  return (
    <div
      className={`${className} flex flex-col min-h-screen font-sans text-gray-900`}
    >
      <Header />

      <main
        className={`${
          isDark ? "" : "container px-4 py-8 mx-auto md:px-8 md:py-16"
        }`}
      >
        {children}
      </main>

      <footer className="bg-blue-700">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className="text-white">
            Created by{` `}
            <a
              className="font-bold no-underline"
              href="https://bryant.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adam Ripley
            </a>
          </p>

          <p>
            <a
              className="font-bold text-white no-underline"
              href="https://github.com/taylorbryant/gatsby-starter-tailwind"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isDark: PropTypes.bool,
};

export default Layout;
