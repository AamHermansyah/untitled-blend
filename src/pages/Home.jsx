import Navbar from '../components/Navbar'
import FixedSocialMedia from '../components/FixedSocialMedia'
import Hero from '../components/Hero'
import Service from '../components/Service'
import Experience from '../components/Experience'
import Clients from '../components/Clients'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

import styles from "../styles"

const Home = () => (
    <>
        <header id="header" className={`${styles.boxWidth} ${styles.padding}`}>
            <Navbar />
            <FixedSocialMedia />
        </header>

        <div className={`${styles.boxWidth} ${styles.padding}`}>
            <Hero />
            <Service />
            <Experience />
            <Clients />
            <Portfolio />
            <Testimonials />
            <Contact />
        </div>
    </>
)

export default Home