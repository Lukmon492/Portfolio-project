import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What i Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Develop UI mockups and prototypes that clearly illustrate how
                sites function and look like
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Process flows and sitemaps.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Designing graphic user interface elements.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Gathering and evaluating user requirements.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Create original graphic designs (e.g. images, sketches and
                tables).
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design and construction of websites.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Write well designed, testable, efficient code by using best
                software development practices.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Integrate data from various back-end services and databases.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Gather and refine specifications and requirements based on
                technical needs.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create and maintain software documentation.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Be responsible for maintaining, expanding, and scaling site.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Stay plugged into emerging technologies/industry trends and
                apply them into operations and activities.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
      </div>
    </section>
  );
};

export default Services;
