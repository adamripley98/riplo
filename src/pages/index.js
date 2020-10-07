import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";
import dudeImg from "../images/dude-4.png";

function IndexPage() {
  return (
    <Layout className="bg-DARK">
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-left">
        <div className="flex">
          <div className="w-3/5">
            <p className="text-GRAY uppercase">
              Premier web design & development studio
            </p>
            <h1 className="inline-block mb-2 text-6xl text-white font-bold">
              GET IT BUILT WITH <span className="text-TEAL">RIPLO.</span>
            </h1>
            <h2 className="inline-block mb-6 text-3xl text-white">
              We rapidly build web apps with modern technologies and
              industry-trained best practices. Want something built? We&apos;d
              love to help.
            </h2>
            <Button value="Find out more" />
          </div>
          <div className="w-2/5">
            <img
              alt="Cat and human sitting on a couch"
              className="block mx-auto mb-8"
              src={dudeImg}
            />
          </div>
        </div>
      </section>
      <section></section>
    </Layout>
  );
}

export default IndexPage;
