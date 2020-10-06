import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout className="bg-DARK">
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-left">
        <div className="flex">
          <div className="w-2/3">
            <h1 className="inline-block mb-2 text-6xl text-white font-bold">
              GET IT BUILT WITH <span className="text-TEAL">RIPLO</span>
            </h1>
            <h2 className="inline-block mb-6 text-2xl text-white">
              Seamless collaboration, total transparency, secure delivery. We’ve
              developed a better approach to custom software development.
            </h2>
            <Button value="Find out more" />
          </div>
          <div className="w-1/3">
            <img
              alt="Cat and human sitting on a couch"
              className="block w-1/2 mx-auto mb-8"
              src={catAndHumanIllustration}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
