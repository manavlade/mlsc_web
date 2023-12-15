import mlscLogo from '../assets/mlsclogo.png'
const Footer = () => {
    return (
        <>
            <div className="footer-section">
                <div className="footer-container">
                    <div className=" flex-center | footer-content">
                        <div className="footer-logo">
                            <img src={mlscLogo} alt="MLSC VCET" />
                        </div>
                        <div className="footer-contact">
                            <h4>Contact us</h4>
                            <p>Rishabh Tripathi: +91 9369744734</p>
                            <p>Kshitij Patil: +91 9323544113</p>
                        </div>
                        <div className="footer-social">
                            <h4>Follow us</h4>
                            <div className=" flex-center | socialmedia">
                                <a className="social-icon" href="https://www.linkedin.com/company/mlsc-vcet/mycompany/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin"></i></a>
                                <a className="social-icon" href="https://github.com/Microsoft-Learn-Students-Club" target="_blank" rel='noreferrer'><i className="fab fa-github"></i></a>
                                <a className="social-icon" href="https://www.instagram.com/mlsc_vcet/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank" rel='noreferrer'><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="footer-below">
                        <div className="flex-center | footer-copyright">
                            <p>
                                <sup>&#64;</sup>{new Date().getFullYear()} MLSC VCET. All right reserved.
                            </p>
                            <p>
                                Handcrafted by Team MLSC with ❤️
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer