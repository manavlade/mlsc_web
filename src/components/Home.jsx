import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import globe from 'vanta/src/vanta.globe'

const Home = () => {

  useEffect(() => {
    globe({
      el: '#vanta',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 90.00,
      minWidth: 90.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x273ce8,
      backgroundColor: 0x190f29
    })
  })

  return (
    <section className='hero-section'>
      <div className='home'>
        <div className='bg' id='vanta'></div>
        <div className='hero-container'>
          <div className='hero-title'>
            <h1>MLSC <span>VCET</span></h1>
            <p>For the love of coding and innovation</p>
          </div>
          <div className='btn-container'><Link to="/about" className='btn'>About us<span></span></Link></div>
        </div>
      </div>
    </section>
  )

}

export default Home