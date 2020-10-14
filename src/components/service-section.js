import React from "react";

class ServiceSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
    };
    this.changeActive = this.changeActive.bind(this);
    this.renderActiveSection = this.renderActiveSection.bind(this);
  }

  changeActive(tabNum) {
    this.setState({ active: tabNum });
  }

  renderActiveSection() {
    const opt1 = (
      <div>
        <p>
          Looking for a static site for your small business, startup, event, or
          app? This is probably the option for you. Riplo will develop a custom
          site for you Get a site up quickly and cheaply for an event, startup,
          app, or anything you want. All sites are mobile-responsive, include
          free basic SEO and SSL, and have affordable hosting.
        </p>
      </div>
    );

    return opt1;
  }

  render() {
    return (
      <section>
        <h1>We can help with</h1>
        <div className="flex items-center">
          <div className="w-1/2">
            <ul
              className={`my-3 text-3xl font-medium kanit inline-block ${
                this.state.active === 1 ? "thick-underline-TEAL" : null
              }`}
            >
              Landing pages & small static sites
            </ul>
            <ul
              className={`my-3 text-3xl font-medium kanit inline-block ${
                this.state.active === 2 ? "thick-underline-TEAL" : null
              }`}
            >
              Web, mobile, and desktop applications
            </ul>
            <ul
              className={`my-3 text-3xl font-medium kanit inline-block ${
                this.state.active === 3 ? "thick-underline-TEAL" : null
              }`}
            >
              Existing site revamps
            </ul>
            <ul
              className={`my-3 text-3xl font-medium kanit inline-block ${
                this.state.active === 4 ? "thick-underline-TEAL" : null
              }`}
            >
              Ecommerce and payment integrations
            </ul>
            <ul
              className={`my-3 text-3xl font-medium kanit inline-block ${
                this.state.active === 5 ? "thick-underline-TEAL" : null
              }`}
            >
              Popular integrations
            </ul>
            <ul
              className={`my-3 text-3xl font-medium kanit inline-block ${
                this.state.active === 6 ? "thick-underline-TEAL" : null
              }`}
            >
              Blogs and other apps requiring a CMS
            </ul>
          </div>
          <div className="w-1/2">{this.renderActiveSection()}</div>
        </div>
      </section>
    );
  }
}

export default ServiceSection;
