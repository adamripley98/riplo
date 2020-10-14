import React from "react";
import Button from "./button";

function GetInTouch() {
  return (
    <section className="bg-DARK">
      <div className="container px-4 py-8 mx-auto md:px-8 md:py-16">
        <h1 className="text-6xl text-white font-bold uppercase -mb-3">
          Get in touch
        </h1>
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
                <div className="w-1/2">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-white"
                    htmlFor="first-name"
                  >
                    First Name
                  </label>

                  <input
                    className="w-full mb-6 form-input"
                    id="first-name"
                    placeholder="Jane"
                    type="text"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-white"
                    htmlFor="last-name"
                  >
                    Last Name
                  </label>

                  <input
                    className="w-full mb-6 form-input"
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
                  className="mb-6 form-input w-full"
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
                  <select className="form-select block w-full mt-1">
                    <option>Option 1</option>
                    <option>Option 2</option>
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
                className="w-full mb-6 form-textarea"
                id="message"
                placeholder="Say something..."
                rows="8"
              />
            </div>
          </div>
          <Button value="Send message" />
        </form>
      </div>
    </section>
  );
}

export default GetInTouch;
