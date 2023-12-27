import workshopEventImg from "../assets/reactjsworkshop.jpeg"
import azureEventImg from "../assets/azurechallenge.jpeg"
import Project from "./Project";

const Events = () => {


  return (
    <>
      <section className="section | event_section">

        <h1 className="title">Events</h1>

        <div className="flex-center | event_container">

          <div className="flex-center | event_content">
            <img className="eventImg" src={workshopEventImg} alt="reactjs workshop" />
            <div className="event_right-content">
              <h2>ReactJS Workshop</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores architecto similique autem maxime qui quod saepe id, harum beatae quos rerum itaque cumque maiores voluptatibus sint quas sunt cupiditate dolor, deleniti, porro repellat. Reprehenderit recusandae inventore, ducimus obcaecati voluptatum molestias labore sit cumque a at accusamus autem? Ipsa, aut veniam.</p>
              <button className="event_btn">Know More</button>
            </div>
          </div>

          <div className="flex-center | event_content">
            <img className="eventImg" src={azureEventImg} alt="cloud skillchallenge" />
            <div className="event_right-content">
              <h2>Fudamentally Azure Cloud Skill Challenge</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, eligendi alias fugit maiores beatae quo est labore nemo sit corporis, recusandae nobis nam, quasi nostrum ipsam incidunt fuga eum. Hic eligendi exercitationem quo iure ipsam nam, architecto itaque et repellendus officiis impedit a culpa voluptates ad pariatur maxime ex sunt?</p>
              <button className="event_btn">Know More</button>
            </div>
          </div>

        </div>

      </section>
      <Project />
    </>

  )
};

export default Events;
