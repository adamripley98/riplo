import React from "react";
import Button from "./button";

function GetInTouch() {
  return (
    <section className="bg-DARK">
      <div className="container px-4 py-8 mx-auto md:px-8 md:py-16">
        <h1 className="text-6xl text-white -mb-3">Send us a message</h1>
        <a className="link-TEAL text-2xl" href="mailto:TODO">
          hello@riplo.io
        </a>
        <h2 className="my-10 text-2xl text-white">
          Please fill out the form below and we will get back to you as soon as
          we can.
        </h2>
        <form>
          <div className="flex">
            <div className="w-1/2 pr-6">
              <div className="flex">
                <div className="w-1/2 pr-6">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-white focus:text-teal-300"
                    htmlFor="first-name"
                  >
                    First Name
                  </label>

                  <input
                    className="w-full mb-6 px-4 py-3 bg-transparent border-solid border-2 border-white focus:outline-none focus:border-teal-300 text-white"
                    id="first-name"
                    placeholder="Jane"
                    type="text"
                  />
                </div>
                <div className="w-1/2 pl-6">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-white"
                    htmlFor="last-name"
                  >
                    Last Name
                  </label>

                  <input
                    className="w-full mb-6 px-4 py-3 bg-transparent border-solid border-2 border-white focus:outline-none focus:border-teal-300 text-white"
                    id="last-name"
                    placeholder="Smith"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block mb-2 text-xs font-bold uppercase text-white"
                  htmlFor="email"
                >
                  Email
                </label>

                <input
                  className="w-full mb-6 px-4 py-3 bg-transparent border-solid border-2 border-white focus:outline-none focus:border-teal-300 text-white"
                  id="email"
                  placeholder="jane@smith.com"
                  type="text"
                />
              </div>
              <div>
                <label className="block">
                  <span className="block mb-2 text-xs font-bold uppercase text-white">
                    Estimated Budget
                  </span>
                  <select className="form-select w-full px-4 py-3 rounded-none mb-6 bg-transparent border-solid border-2 border-white focus:outline-none focus:border-teal-300 text-white">
                    <option>TODO make this default</option>
                    <option>Less than $500</option>
                    <option>$500-1000</option>
                    <option>$1000-2000</option>
                    <option>$2000+</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="w-1/2 pl-6">
              <label
                className="block mb-2 text-xs font-bold uppercase text-white"
                htmlFor="message"
              >
                Message
              </label>

              <textarea
                className="w-full mb-6 px-4 py-3 bg-transparent border-solid border-2 border-white focus:outline-none focus:border-teal-300 text-white"
                id="message"
                placeholder="Say something..."
                rows="8"
              />
              <Button value="Send message" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default GetInTouch;
