import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import dummyImg from "../assets/azurechallenge.jpeg";
import dummyImg2 from "../assets/reactjsworkshop.jpeg";
import dummyImg3 from "../assets/azurechallenge.jpeg";

const projectDetails = [
    {
        title: "Project 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto velit odio eligendi repellendus veritatis, ex excepturi quod sint ratione deleniti asperiores iure minus fuga sed, eos facilis esse delectus ipsam!",
    },
    {
        title: "Project 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto velit odio eligendi repellendus veritatis, ex excepturi quod sint ratione deleniti asperiores iure minus fuga sed, eos facilis esse delectus ipsam!",
    },
    {
        title: "Project 3",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto velit odio eligendi repellendus veritatis, ex excepturi quod sint ratione deleniti asperiores iure minus fuga sed, eos facilis esse delectus ipsam!",
    },
];

const Project = () => {
    useEffect(() => {
        gsap.set(".photo:not(:first-child)", { yPercent: 101 });

        const animation = gsap.to(".photo:not(:first-child)", {
            yPercent: 0,
            duration: 1,
            stagger: 1,
        });

        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: ".gallery",
            start: "top top",
            end: "bottom bottom",
            pin: ".right",
            animation: animation,
            scrub: true,
            markers: false,
        });
    }, []);

    return (
        <>
            <section className="project_section">
                <h2 className="title">Projects</h2>

                <div className="gallery">
                    <div className="left">
                        <div className="detailsWrapper">
                            {projectDetails.map((project, index) => (
                                <div className="details" key={index}>
                                    <h3 className="headline">{project.title}</h3>
                                    <div className="text">
                                        <p>{project.text}</p>
                                        <button className="proj_btn">View<span>↗</span></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="right">
                        <div className="photos">
                            {[dummyImg, dummyImg2, dummyImg3].map((img, index) => (
                                <div className="photo" key={index}>
                                    <img src={img} alt={`Project ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Project;
