import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ServicesPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Get Started"
      />

      <section className="">
        <div className="">
          <h1 className="-mt-2 mb-2 text-6xl text-DARK font-bold thickest-underline-TEAL inline-block">
            LET&apos;S GET THINGS STARTED.
          </h1>
          <p className="text-3xl text-DARK mb-10">
            We are open to projects of varying sizes with clients at all stages
            of business-maturity. Find out more about all the different things
            that we can do for you and your organization.
          </p>
        </div>
        <div>
          <p>
            Popular integrations: why reinvent the wheel? Airtable, Google
            Sheets, etc
          </p>
          <p>
            Landing page. Get a page up quickly and cheaply for an event, app,
            or anything you want.
          </p>
          <p>Small static site (less than 5 pages)</p>
          <p>Large static sites (5+ pages)</p>
          <p>Web apps: user authentication, admin panels, CMS, image upload</p>
          <p>Content Management System</p>
          <p>Free SEO, cheap hosting packages, SSL</p>
          <p>Ecommerce: Shopify, Squarespace</p>
        </div>
      </section>
    </Layout>
  );
}

export default ServicesPage;
