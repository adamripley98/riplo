import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ApproachPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Approach"
      />

      <section className="flex flex-col items-center md:flex-row">
        <div className="">
          <p className="text-3xl text-DARK mb-10">
            Our developers work with{" "}
            <span className="font-bold">
              clients at all stages of business-maturity
            </span>{" "}
            on everything from complex web applications to mobile apps to static
            websites. Whether you&apos;re a small business looking to revamp
            your website, a startup pumping out an MVP, or a larger company
            looking to hire developers to join an existing project,{" "}
            <span className="font-bold">Riplo can help you build.</span>
          </p>
          <p className="text-3xl text-DARK my-4">
            Check out some projects we have worked on below, and when
            you&apos;re ready,{" "}
            <span className="font-bold bg-TEAL py-1 px-2">
              request a quote.
            </span>
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default ApproachPage;
