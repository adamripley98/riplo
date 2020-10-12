import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";
import Technologies from "../components/technologies";
import dudeImg from "../images/dude-final.png";

function IndexPage() {
  return (
    <Layout className="bg-DARK">
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-left header-section bg-DARK">
        <div className="flex items-center">
          <div className="w-2/3 mr-10">
            <p className="text-GRAY uppercase">
              Premier web design & development studio
            </p>
            <h1 className="-mt-2 mb-2 text-6xl text-white font-bold">
              GET IT BUILT WITH <span className="text-TEAL">RIPLO.</span>
            </h1>
            <h2 className="mb-6 text-3xl text-white">
              We rapidly build web apps with modern technologies and
              industry-trained best practices. Want something built? We&apos;d
              love to help.
            </h2>
            <Button value="Find out more" />
          </div>
          <div className="w-1/3">
            <img alt="riplo-icon" className="" src={dudeImg} />
          </div>
        </div>
      </section>
      <section>
        <p>
          We take pride in staying up-to-date with modern web design and
          development solutions so we can build our clients products that stand
          out. Here&apos; a (non-inclusive and always expanding) list of
          technologies we work with.
        </p>
        <Technologies />
      </section>
    </Layout>
  );
}

export default IndexPage;
