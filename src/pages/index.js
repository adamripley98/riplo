import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";
import Technologies from "../components/technologies";
import GetInTouch from "../components/get-in-touch";
import dudeImg from "../images/dude-final.png";

function IndexPage() {
  return (
    <Layout isDark={true}>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-left bg-DARK">
        <div className="flex items-center container px-4 py-8 mx-auto md:px-8 md:py-16">
          <div className="w-2/3 mr-10">
            <p className="text-GRAY uppercase">
              Premier web design & development studio
            </p>
            <h1 className="-mt-2 mb-2 text-6xl text-white font-bold">
              GET IT BUILT WITH <span className="text-TEAL">RIPLO.</span>
            </h1>
            <h2 className="mb-6 text-3xl text-white montserrat">
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
        <div className="container px-4 py-8 mx-auto md:px-8 md:py-16">
          <p>
            Riplo is a freelance web design and development agency with
            developers who have studied computer science at top colleges such as
            the University of Pennsylvania. We have been serving clients for
            over 3 years now and have been coding for many more years than that.
          </p>
          <p>
            We specialize in full-stack Javascript development. We take pride in
            staying up-to-date with modern web design and development solutions
            so we can build our clients products that stand out. Here&apos;s a
            (non-inclusive and always expanding) list of technologies we work
            with.
          </p>
          <Technologies />
          <p>Have been serving clients for over 3 years now</p>
          <p>- Learn more about our approach **here.**</p>
          <p>- Testimonial section</p>
        </div>
      </section>
      <GetInTouch />
    </Layout>
  );
}

export default IndexPage;
