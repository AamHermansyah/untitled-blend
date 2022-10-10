import { bgHero } from "../assets"
import styles from "../styles"

const Hero = () => (
    <section id="hero" className={`${styles.padding} overflow-hidden h-[700px]`}>
        <img src={bgHero} className="absolute w-full h-[700px] top-0 left-0 object-cover z-[-1] opacity-25" />
        <div className="flex-1 mt-10 md:mt-0">
            <h1 className={styles.heading}>
                Hai! I'm Atthariq
                <br className="ss:block hidden" />
                {" "} a.k.a {" "}
                <span className="font-DynaPuff font-normal sm:text-[56px] text-[40px]">
                    <span className="text-third">untitled.</span>
                    <span className="text-secondary">blend</span>
                </span>
            </h1>
            <p className={`${styles.paragraph} mt-2`}>I am Blender 3D modelling expert and many experience.</p>
            <button className="button__primary text-[18px] mt-10">Hire Me</button>
        </div>
    </section>
)

export default Hero
