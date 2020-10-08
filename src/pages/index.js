import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";
import dudeImg from "../images/dude-final.png";

function IndexPage() {
  return (
    <Layout className="bg-DARK">
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-left">
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
      <section></section>
    </Layout>
  );
}

export default IndexPage;
