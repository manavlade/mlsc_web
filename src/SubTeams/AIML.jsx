import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';
import Corporate from '../SubTeams/Corporate';
import Lead from '../assets/Lead.png';
import React from 'react';

export default function AIML() {
    const TeamsLeftRef = React.useRef(null);
    const TeamsRightRef = React.useRef(null);
    const TeamsRightRef2 = React.useRef(null);
    const TeamsRightRef3 = React.useRef(null);
    const TeamsRightRef4 = React.useRef(null);
    const TeamsRightRef5 = React.useRef(null);
    const TeamsRightRef6 = React.useRef(null);
    const TeamsRightRef7 = React.useRef(null);
    const TeamsRightRef8 = React.useRef(null);
    const TeamsRightRef9 = React.useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    TeamsLeftRef.current.classList.add('visible');
                }
            },
            {
                threshold: 0.7,
            }
        );
        observer.observe(TeamsLeftRef.current);
        return () => observer.disconnect();

    }, [])


    useEffect(() => {
        const Viewer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('Visible')
                    }
                    else {
                        entry.target.classList.remove('Visible')
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );
        Viewer.observe(TeamsRightRef.current);
        Viewer.observe(TeamsRightRef2.current);
        Viewer.observe(TeamsRightRef3.current);
        Viewer.observe(TeamsRightRef4.current);
        Viewer.observe(TeamsRightRef5.current);
        Viewer.observe(TeamsRightRef6.current);
        Viewer.observe(TeamsRightRef7.current);
        Viewer.observe(TeamsRightRef8.current);
        Viewer.observe(TeamsRightRef9.current);
        return () => Viewer.disconnect();

    }, [])
    return (
        <>
            <div className="container ">
                <h1 className='title'>AIML Team</h1>
                <div className="teams " >
                    <div className="  left-fixed " id='left-animation' ref={TeamsLeftRef} style={{
                        borderRadius: '40px'
                    }} >
                        <Card style={{
                            width: '22rem', borderRadius: '40px',
                            backgroundColor: 'transparent'
                        }}>
                            <Card.Img style={{
                                height: '18rem',
                                borderRadius: '40px'
                            }} variant="top" src={Lead} />
                            <Card.Body style={{
                                color: 'white'
                            }}>
                                <Card.Title>
                                    <h2>Web Lead Kshitij Patil </h2>
                                </Card.Title>
                                <Card.Text>
                                    In a world of data, I seek the patterns that shape our future.
                                </Card.Text>
                                <a href="">
                                    <FontAwesomeIcon style={{
                                        marginRight: '20px',
                                        width: '50px',
                                        height: '25px',
                                        color: 'blue'
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
                    <div className="Right-side" >
                        <div className="member1 right-fixed Team-card bg-transparent" id='right-animation' ref={TeamsRightRef}  >
                            <Card style={{
                                width: '20rem',
                                backgroundColor: 'transparent',
                                borderRadius: '40px'
                            }}>
                                <Card.Img style={{
                                    borderRadius: '40px'
                                }} variant="top" src="https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png" />
                                <Card.Body style={{
                                    color: 'white',
                                    borderRadius: '40px'
                                }}>
                                    <Card.Title>
                                        <h3>Web Associate Manav Lade</h3>
                                    </Card.Title>
                                    <Card.Text>
                                        Quote
                                    </Card.Text>
                                    <a href="">
                                        <FontAwesomeIcon style={{
                                            marginRight: '20px',
                                            width: '50px',
                                            height: '25px',
                                            color: 'blue'
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
                        <div className="member1 right-fixed Team-card bg-transparent" id='right-animation' ref={TeamsRightRef8}  >
                            <Card style={{
                                width: '20rem',
                                backgroundColor: 'transparent',
                                borderRadius: '40px'
                            }}>
                                <Card.Img style={{
                                    borderRadius: '40px'
                                }} variant="top" src="https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png" />
                                <Card.Body style={{
                                    color: 'white',
                                    borderRadius: '40px'
                                }}>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Lead Quote
                                    </Card.Text>
                                    <a href="">
                                        <FontAwesomeIcon style={{
                                            marginRight: '20px',
                                            width: '50px',
                                            height: '25px',
                                            color: 'blue'
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
                        <div className="member1 right-fixed Team-card bg-transparent" id='right-animation' ref={TeamsRightRef7}  >
                            <Card style={{
                                width: '20rem',
                                backgroundColor: 'transparent'
                            }}>
                                <Card.Img style={{
                                    borderRadius: '40px'
                                }} variant="top" src="https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png" />
                                <Card.Body style={{
                                    color: 'white'
                                }}>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Lead Quote
                                    </Card.Text>
                                    <a href="">
                                        <FontAwesomeIcon style={{
                                            marginRight: '20px',
                                            width: '50px',
                                            height: '25px',
                                            color: 'blue'
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
                        <div className="member1 right-fixed Team-card bg-transparent" id='right-animation' ref={TeamsRightRef6}  >
                            <Card style={{
                                width: '20rem',
                                backgroundColor: 'transparent'
                            }}>
                                <Card.Img style={{
                                    borderRadius: '40px'
                                }} variant="top" src="https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png" />
                                <Card.Body style={{
                                    color: 'white'
                                }}>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Lead Quote
                                    </Card.Text>
                                    <a href="">
                                        <FontAwesomeIcon style={{
                                            marginRight: '20px',
                                            width: '50px',
                                            height: '25px',
                                            color: 'blue'
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
                        <div className="member1 right-fixed Team-card bg-transparent" id='right-animation' ref={TeamsRightRef5}  >
                            <Card style={{
                                width: '20rem',
                                backgroundColor: 'transparent'
                            }}>
                                <Card.Img style={{
                                    borderRadius: '40px'
                                }} variant="top" src="https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png" />
                                <Card.Body style={{
                                    color: 'white'
                                }}>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Lead Quote
                                    </Card.Text>
                                    <a href="">
                                        <FontAwesomeIcon style={{
                                            marginRight: '20px',
                                            width: '50px',
                                            height: '25px',
                                            color: 'blue'
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
                        <div className="member2 right-fixed Team-card" id='right-animation' ref={TeamsRightRef2} >
                            <Card style={{ width: '20rem', backgroundColor: 'transparent' }}>
                                <Card.Img style={{
                                    borderRadius: '40px'
                                }} variant="top" src="https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png" />
                                <Card.Body style={{
                                    color: 'white'
                                }}>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Lead Quote
                                    </Card.Text>
                                    <a href="">
                                        <FontAwesomeIcon style={{
                                            marginRight: '20px',
                                            width: '50px',
                                            height: '25px',
                                            color: 'blue'
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
                        <div className="member4 right-fixed Team-card " id='right-animation' ref={TeamsRightRef9} >
                            <Card style={{ width: '20rem', backgroundColor: 'transparent', borderRadius: '25px' }}>
                                <Card.Img style={{
                                    borderRadius: '40px'
                                }} variant="top" src="https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png" />
                                <Card.Body style={{
                                    color: 'white'
                                }}>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Lead Quote
                                    </Card.Text>
                                    <a href="">
                                        <FontAwesomeIcon style={{
                                            marginRight: '20px',
                                            width: '50px',
                                            height: '25px',
                                            color: 'blue'
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
                        <div className="member3 right-fixed Team-card" id='right-animation' ref={TeamsRightRef3} >
                            <Card style={{ width: '20rem', backgroundColor: 'transparent' }}>
                                <Card.Img style={{
                                    borderRadius: '40px'
                                }} variant="top" src="https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png" />
                                <Card.Body style={{
                                    color: 'white'
                                }}>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Lead Quote
                                    </Card.Text>
                                    <a href="">
                                        <FontAwesomeIcon style={{
                                            marginRight: '20px',
                                            width: '50px',
                                            height: '25px',
                                            color: 'blue'
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
                        <div className="member4 right-fixed Team-card " id='right-animation' ref={TeamsRightRef4} >
                            <Card style={{ width: '20rem', backgroundColor: 'transparent', borderRadius: '25px' }}>
                                <Card.Img style={{
                                    borderRadius: '40px'
                                }} variant="top" src="https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png" />
                                <Card.Body style={{
                                    color: 'white'
                                }}>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Lead Quote
                                    </Card.Text>
                                    <a href="">
                                        <FontAwesomeIcon style={{
                                            marginRight: '20px',
                                            width: '50px',
                                            height: '25px',
                                            color: 'blue'
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
                        <div className="member4 right-fixed Team-card " id='right-animation' ref={TeamsRightRef4} >
                            <Card style={{ width: '20rem', backgroundColor: 'transparent', borderRadius: '25px' }}>
                                <Card.Img style={{
                                    borderRadius: '40px'
                                }} variant="top" src="https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png" />
                                <Card.Body style={{
                                    color: 'white'
                                }}>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Lead Quote
                                    </Card.Text>
                                    <a href="">
                                        <FontAwesomeIcon style={{
                                            marginRight: '20px',
                                            width: '50px',
                                            height: '25px',
                                            color: 'blue'
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
                        <div className="member4 right-fixed Team-card " id='right-animation' ref={TeamsRightRef4} >
                            <Card style={{ width: '20rem', backgroundColor: 'transparent', borderRadius: '25px' }}>
                                <Card.Img style={{
                                    borderRadius: '40px'
                                }} variant="top" src="https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png" />
                                <Card.Body style={{
                                    color: 'white'
                                }}>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Lead Quote
                                    </Card.Text>
                                    <a href="">
                                        <FontAwesomeIcon style={{
                                            marginRight: '20px',
                                            width: '50px',
                                            height: '25px',
                                            color: 'blue'
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
            </div>
        </>
    )
}