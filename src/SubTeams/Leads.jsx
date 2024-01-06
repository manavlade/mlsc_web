import Card from 'react-bootstrap/Card';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';
import Lead from '../assets/Lead.png';
import React from 'react';
export default function Leads() {
    // const TeamLeadRef = React.useRef(null);
    // const TeamLeadRef2 = React.useRef(null);
    // useEffect(() => {
    //     const Viewer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     entry.target.classList.add('Visible')
    //                 }
    //                 else {
    //                     entry.target.classList.remove('Visible')
    //                 }
    //             });
    //         },
    //         {
    //             threshold: 0.5,
    //         }
    //     );
    //     Viewer.observe(TeamLeadRef.current);
    //     Viewer.observe(TeamLeadRef2.current);
    //     return () => Viewer.disconnect();

    // }, [])

    return (
        <>
            <div className="container">
                <h1 className='title'>Meet Our MLSC Team</h1>
                <div className="leads">
                    <div className="lead"  >
                        <Card style={{
                            width: '22rem', height: '31rem', borderRadius: '40px',
                            backgroundColor: 'transparent'
                        }} id='lead'>
                            <Card.Img style={{
                                height: '18rem',
                                borderRadius: '40px'
                            }} variant="top" src={Lead} />
                            <Card.Body style={{
                                color: 'white'
                            }}>
                                <Card.Title>
                                    <h2>CLUB LEAD</h2>
                                </Card.Title>
                                <Card.Text>
                                    In a world of data, I seek the patterns that shape our future.
                                </Card.Text>
                                <a href="">
                                    <FontAwesomeIcon style={{
                                        marginRight: '20px',
                                        width: '50px',
                                        height: '25px',
                                        color: 'blue',
                                        paddingTop: '20px',
                                        paddingLeft: '40px'
                                    }} icon={faLinkedin} bounce />
                                </a>
                                <a href="">
                                    <FontAwesomeIcon style={{
                                        marginRight: '20px',
                                        width: '50px',
                                        height: '25px'
                                    }} icon={faGithub} bounce />
                                </a>
                                <a href="">
                                    <FontAwesomeIcon style={{
                                        marginRight: '20px',
                                        width: '50px',
                                        height: '25px',
                                        color: '#E1306C'
                                    }} icon={faInstagram} bounce />
                                </a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="lead2"  >
                        <Card style={{
                            width: '22rem', height: '31rem', borderRadius: '40px',
                            backgroundColor: 'transparent'
                        }} id='lead'>
                            <Card.Img style={{
                                height: '18rem',
                                borderRadius: '40px'
                            }} variant="top" src={Lead} />
                            <Card.Body style={{
                                color: 'white'
                            }}>
                                <Card.Title>
                                    <h2>ASSOCIATE CLUB LEAD</h2>
                                </Card.Title>
                                <Card.Text>
                                    In a world of data, I seek the patterns that shape our future.
                                </Card.Text>
                                <a href="">
                                    <FontAwesomeIcon style={{
                                        marginRight: '20px',
                                        width: '50px',
                                        height: '25px',
                                        color: 'blue',
                                        paddingLeft: '40px'
                                    }} icon={faLinkedin} bounce />
                                </a>
                                <a href="">
                                    <FontAwesomeIcon style={{
                                        marginRight: '20px',
                                        width: '50px',
                                        height: '25px'
                                    }} icon={faGithub} bounce />
                                </a>
                                <a href="">
                                    <FontAwesomeIcon style={{
                                        marginRight: '20px',
                                        width: '50px',
                                        height: '25px',
                                        color: '#E1306C'
                                    }} icon={faInstagram} bounce />
                                </a>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}
