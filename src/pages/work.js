import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Project from "../components/project";

function WorkPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Work"
      />

      <section className="flex flex-col items-center md:flex-row full-width-section bg-DARK">
        <div className="md:w-2/3 md:mr-8">
          <p className="text-3xl text-white font-bold">
            Riplo delivers everything from complex web applications to mobile
            apps to static websites. Our developers work with a variety of
            clients at all stages of business-maturity.
          </p>
        </div>
      </section>
      <section id="get-a-college-mentor">
        <Project isDark={false} />
      </section>
      <section id="get-a-college-mentor">
        <Project isDark={true} />
      </section>
    </Layout>
  );
}

export default WorkPage;
