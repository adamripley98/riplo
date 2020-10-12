import React from "react";

import Layout from "../components/layout";
import Card from "../components/card";
import SEO from "../components/seo";

function ApproachPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Approach"
      />

      <section>
        <div className="">
          <p className="text-2xl text-DARK mb-10">
            Each site we build is custom-made, allowing personalization on
            everything from navigation flow to color scheme and font choice. A
            website says a lot about a business, and we want to make sure that
            our clients&apos; sites are just right.
          </p>
          <p className="text-2xl text-DARK mb-10">
            We don&apos;t want to reinvent the wheel. Much of development is
            knowing when to create your own solution to a problem and when to
            use existing technologies. We integration the very best technologies
            in our projects, allowing reliable, secure, and elegant solutions
            fore e-commerce, user authentication, email flows, and more.
          </p>
          <p className="text-2xl text-DARK mb-10"></p>
          <p className="text-2xl text-DARK mb-10">
            Each site is completely personalized, but many of the underlying
            systems (such as authentication flows, layout, components, database
            models) have been built out in previous projects - allowing for high
            quality at a faster pace of development, allowing us to dedicate
            more time to the components that make your site unique.
          </p>
          Listen to you and suggest the best solution for you based off your
          budget, timeframe, and preferences and constraints.
        </div>
        <div>
          <h1>Typical process</h1>
          <h1>Checking for fit</h1>
          <div className="flex flex-wrap">
            <div className="w-1/3">
              <Card
                className="mx-4 my-4"
                title="Request a Quote"
                description="Fill out our online form letting us know what you're looking to have built, when you'd like to begin development, and your budget for this project."
              />
            </div>
            <div className="w-1/3">
              <Card
                className="mx-4 my-4"
                title="Consultation call"
                description="Get on a call with a member of the Riplo team to discuss your project in more depth and see if it may be something we can help with."
              />
            </div>
            <div className="w-1/3">
              <Card
                className="mx-4 my-4"
                title="Review proposal"
                description="One of our developers will scope out the project in terms of projected delivery dates, costs, and technologies and send it over for review."
              />
            </div>
          </div>
          <h1>Getting to work</h1>
          <div className="flex flex-wrap">
            <div className="w-1/3">
              <Card
                className="mx-4 my-4"
                title="Design and Development"
                description="Once an agreement is reached, Riplo will present design options in terms of icons and images, color scheme, typography, layouts, and more. The app's functionality will be built out according to the agreed upon milestone deadlines."
              />
            </div>
            <div className="w-1/3">
              <Card
                className="mx-4 my-4"
                title="Deployment"
                description="The app is thoroughly tested and deployed so that it is accessable from the web."
              />
            </div>
            <div className="w-1/3">
              <Card
                className="mx-4 my-4"
                title="Maintenance"
                description="Riplo will ensure that the site remains hosted and functional in the long run, quickly fixing bugs should they arise. We are prepared to grow with your business, and can provide updates and new features when desired."
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ApproachPage;
