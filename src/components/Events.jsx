import { useState } from "react";
import Modal from "./Modal";
import Project from "./Project";
import workshopEventImg from "../assets/reactjsworkshop.jpeg";
import azureEventImg from "../assets/azurechallenge.jpeg";

const Events = () => {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const toggleModal = (event) => {
    setSelectedEvent(event);
    setModalIsOpen(!isModalOpen);
  };

  const eventsData = [
    {
      title: "ReactJS Workshop",
      imgSrc: workshopEventImg,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quibusdam labore. Quod provident beatae sed voluptate, quas mollitia doloremque consequuntur obcaecati sint? Ullam rerum consectetur quam placeat, incidunt, eos inventore laboriosam corporis illo nostrum dolore provident. Corrupti eum iusto animi? Odio, dolores provident. Facere, sequi! Facere minima eos voluptatem architecto.",
      info: [
        { label: "Organizing People", value: 4 },
        { label: "Organizing People", value: 4 },
        { label: "Organizing People", value: 4 },
        { label: "Organizing People", value: 4 },
      ],
    },
    {
      title: "Fundamentally Azure Cloud Skill Challenge",
      imgSrc: azureEventImg,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quibusdam labore. Quod provident beatae sed voluptate, quas mollitia doloremque consequuntur obcaecati sint? Ullam rerum consectetur quam placeat, incidunt, eos inventore laboriosam corporis illo nostrum dolore provident. Corrupti eum iusto animi? Odio, dolores provident. Facere, sequi! Facere minima eos voluptatem architecto.",
      info: [
        { label: "Organizing People", value: 4 },
        { label: "Organizing People", value: 4 },
        { label: "Organizing People", value: 4 },
        { label: "Organizing People", value: 4 },
      ],
    },
  ];

  return (
    <>
      <section className="section | event_section">
        <h1 className="title">Events</h1>
        <div className="flex-center | event_container">
          {eventsData.map((event, index) => (
            <div className="flex-center | event_content" key={index}>
              <img className="eventImg" src={event.imgSrc} alt={event.title} />
              <div className="event_right-content">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <button onClick={() => toggleModal(event)} type="button" className="event_btn">
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {isModalOpen && <Modal event={selectedEvent} onRequestClose={() => setModalIsOpen(false)} />}
      <Project />
    </>
  );
};

export default Events;
