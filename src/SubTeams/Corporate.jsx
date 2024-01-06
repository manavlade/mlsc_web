import React from 'react'
import Card from 'react-bootstrap/Card';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Lead from '../assets/Lead.png';
import { useEffect, useRef } from 'react';
export default function Corporate() {

    // const CleadRef = React.useRef(null);
    // const Clead2Ref = React.useRef(null);
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
    //     Viewer.observe(CleadRef.current);
    //     Viewer.observe(Clead2Ref.current);
    //     return () => Viewer.disconnect();

    // }, [])

    
    return (
        <>      
        <h1 className='title'>Meet our Corpoarte Team </h1>
                <div className="cleads">
                    <div className="clead1">
                    <div className="Cleft-fixed "  style={{
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
                                        <h2>Corporate Lead Aditya Trivedi </h2>
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
                    </div>

                    <div className="asso-cor">
                        <div className="Ccenter-fixed bg-transparent"  >
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
                    <div className="Ccenter-fixed bg-transparent"  >
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
                    <div className="Ccenter-fixed bg-transparent"  >
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
                    <div className="Ccenter-fixed bg-transparent"  >
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
                    <div className="Ccenter-fixed bg-transparent"  >
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
                    <div className="Ccenter-fixed bg-transparent"  >
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
                    <div className="Ccenter-fixed bg-transparent"  >
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
                    <div className="Ccenter-fixed bg-transparent"  >
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
                    <div className="Ccenter-fixed bg-transparent"  >
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
                    <div className="Ccenter-fixed bg-transparent"  >
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
                        <div className="Ccenter-fixed bg-transparent"  >
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
                        <div className="Ccenter-fixed bg-transparent"  >
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
                    </div>
                    <div className="clead2">
                    <div className="Cright-fixed"  style={{
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
                                    <h2>Corporate Lead Aditya Trivedi </h2>
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
                    </div>
                </div>
            
        </>
    )
}
