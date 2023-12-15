// import Footer from "./Footer"
import aboutImg from '../assets/about.webp'

const About = () => {
  return (
    <>
      <section className="section | about-section">
        <h1 className="title">About us</h1>
        <div className="flex-center | about-content">
          <p>
            Microsoft Learn Student Club, is a Technical Club which is dedicated to elevating the coding culture at Vidyavardhini College of Engineering and Technology by mentoring and motivating its members to refine their critical thinking, logical reasoning, and coding skills into making them unrivalled! We offer to spread technical knowledge about the current advancements through peer-to-peer learning strategy. We as a Club have like-minded individualists who encourage students to develop and volunteer in making open source projects, participate in various technical events and also conduct comprehensive seminars.
          </p>
          <img src={aboutImg} alt='aboutImg' className='aboutImg' />
        </div>
      </section>
      {/* <Footer/> */}
    </>
  )
}

export default About