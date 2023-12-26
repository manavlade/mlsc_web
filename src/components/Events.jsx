import { useState } from "react";
import { motion } from 'framer-motion';
import Image from '../assets/about.webp'
import PropTypes from 'prop-types';

const projects = [
  {
    title: "C2 Montreal",
    // src: "c2montreal.png",
    color: "#000000"
  },
  {
    title: "Office Studio",
    // src: "officestudio.png",
    color: "#8C8C8C"
  },
  {
    title: "Locomotive",
    // src: "locomotive.png",
    color: "#EFE8D3"
  },
  {
    title: "Silencio",
    // src: "silencio.png",
    color: "#706D63"
  }
];


const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
}

const Events = () => {

  const { active, index } = modal;
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className="main">
      <div className="events-section">
        {projects.map((project, index) => (
          <div
          key={project}
          onMouseEnter={() => {
              setModal({ active: true, index });
          }}
          onMouseLeave={() => {
              setModal({ active: false, index });
          }}
          className="project"
      >
          <h2>title</h2>
          <p>Design & Development</p>
      </div>
        ))}
        <h1 className="title">Events</h1>
        <>
          <motion.div
            variants={scaleAnimation}
            initial="initial"
            animate={active ? 'enter' : 'closed'}
            className="modalContainer"
          >
            <div style={{ top: index * -100 + '%' }} className="modalSlider">
              {projects.map((project, index) => {
                const { src, color } = project;
                return (
                  <div
                    className="modal"
                    style={{ backgroundColor: color }}
                    key={`modal_${index}`}
                  >
                    <Image
                      src={`/images/${src}`}
                      width={300}
                      height={0}
                      alt="image"
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            className="cursor"
            variants={scaleAnimation}
            initial="initial"
            animate={active ? 'enter' : 'closed'}
          ></motion.div>
          <motion.div
            className="cursorLabel"
            variants={scaleAnimation}
            initial="initial"
            animate={active ? 'enter' : 'closed'}
          >
            View
          </motion.div>
        </>
      </div>
    </main>
  );
}

Event.propTypes = {
  modal: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
  }).isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  setModal: PropTypes.func.isRequired,
};

export default Events;
