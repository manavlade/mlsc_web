import dummyImg from "../assets/azurechallenge.jpeg"
import dummyImg2 from "../assets/reactjsworkshop.jpeg"
import dummyImg3 from "../assets/azurechallenge.jpeg"
// import { useInView } from "react-intersection-observer";

const Project = () => {

    // const { galleryRef, inView } = useInView({
    //     threshold: 1,
    // })

    return (
        <>
            <section className="project_section">
                <h2 className="title">Projects</h2>

                <div className="gallery">
                    <div className="left">
                        <div className="detailsWrapper">
                            <div className="details">
                                <h3 className="headline">Project 1</h3>
                                <div className="text">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis architecto molestias nesciunt labore rerum unde excepturi modi fugit. Illum soluta, ad error quo enim quam nam, eveniet possimus officia, aperiam quia? Eum quos officiis vitae esse deserunt nam veritatis quidem, eligendi accusamus excepturi? Dicta amet, modi soluta assumenda deleniti quia!</p>
                                </div>
                                <button className="proj_btn">View<span>↗</span></button>
                            </div>

                            <div className="details">
                                <h3 className="headline">Project 2</h3>
                                <div className="text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus dolorem odit inventore nulla est quas similique excepturi cum ab voluptatibus sint asperiores autem, animi atque alias eaque qui rerum. Porro natus distinctio obcaecati aperiam debitis illo voluptatum in dolores veritatis quisquam voluptate quos corporis, perferendis sunt reprehenderit aut rerum?</p>
                                    <button className="proj_btn">View<span>↗</span></button>
                                </div>
                            </div>

                            <div className="details">
                                <h3 className="headline">Project 3</h3>
                                <div className="text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum minus sint soluta iusto blanditiis explicabo ducimus itaque facere perferendis temporibus cupiditate excepturi quam et qui commodi ea maxime a eius accusantium, rerum corporis doloremque. Est voluptatum dolore, facere quisquam asperiores praesentium officiis quaerat, odit rem quia, deleniti quam voluptas natus.</p>
                                </div>
                                <button className="proj_btn">View<span>↗</span></button>
                            </div>

                        </div>
                    </div>

                    <div className="right">
                        <div className="photos">
                            <div className="photo">
                                <img src={dummyImg} />
                            </div>
                            <div className="photo">
                                <img src={dummyImg2} />
                            </div>
                            <div className="photo">
                                <img src={dummyImg3} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Project;

