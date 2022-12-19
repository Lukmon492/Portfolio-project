import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iste voluptatem, nesciunt deserunt exercitationem vero cum enim a. Cum amet aliquid voluptatem neque aliquam quidem suscipit quis natus quisquam placeat!",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iste voluptatem, nesciunt deserunt exercitationem vero cum enim a. Cum amet aliquid voluptatem neque aliquam quidem suscipit quis natus quisquam placeat!",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iste voluptatem, nesciunt deserunt exercitationem vero cum enim a. Cum amet aliquid voluptatem neque aliquam quidem suscipit quis natus quisquam placeat!",
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iste voluptatem, nesciunt deserunt exercitationem vero cum enim a. Cum amet aliquid voluptatem neque aliquam quidem suscipit quis natus quisquam placeat!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className="testimonial">
              <div className="clients__avatar">
                <img src={avatar} alt="Avatar One" className="img" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
