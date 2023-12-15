const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="sb__footer section_padding">
                    <div className="sb__footer-links">
                        <div className="sb__footer-links_div">
                            <h4>For Business</h4>
                            <a href="/employer">
                                <p>Employer</p>
                            </a>
                            <a href="/healthplan">
                                <p>Health Plan</p>
                            </a>
                            <a href="/individual">
                                <p>Individual</p>
                            </a>
                        </div>
                        <div className="sb__footer-links_div">
                            <h4>Resources</h4>
                            <a href="/resource">
                                <p>Resources center</p>
                            </a>
                            <a href="/resource">
                                <p>Testimonials</p>
                            </a>
                            <a href="/resource">
                                <p>STV</p>
                            </a>
                        </div>
                        <div className="sb__footer-links_div">
                            <h4>Partners</h4>
                            <a href="/employer">
                                <p>Swing Tech</p>
                            </a>
                        </div>
                        <div className="sb__footer-links_div">
                            <h4>Company</h4>
                            <a href="/about">
                                <p>About</p>
                            </a>
                            <a href="/press">
                                <p>Press</p>
                            </a>
                            <a href="/career">
                                <p>Carrer</p>
                            </a>
                            <a href="/contact">
                                <p>Contacts</p>
                            </a>
                        </div>
                        <div className="sb__footer-links_div">
                            <h4>Coming soon on</h4>
                            <div className="socialmedia">
                                {/* <p><img src={fb} alt="/"/></p>
                                <p><img src={twitter} alt="/"/></p>
                                <p><img src={linkedin} alt="/"/></p>
                                <p><img src={insta} alt="/"/></p> */}
                            </div>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="sb__footer-below">
                        <div className="sb__footer-copyright">
                            <p>
                                @{new Date().getFullYear()} CodeInn. All right reserved.
                            </p>
                        </div>
                        <div className="sb__footer-below-links">
                            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                            <a href="/terms"><div><p>Privacy</p></div></a>
                            <a href="/terms"><div><p>Security</p></div></a>
                            <a href="/terms"><div><p>Cookie Declaration</p></div></a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer