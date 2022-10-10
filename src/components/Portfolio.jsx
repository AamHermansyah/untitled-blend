import { useState } from "react"
import { bgHero } from "../assets"
import styles from "../styles"

const Card = ({ children, onClick }) => (
    <div className="bg-[#111] rounded-md overflow-hidden shadow-black shadow-lg  w-[250px] h-[320px] cursor-pointer hover:-translate-y-[7px] duration-200" onClick={() => onClick()}>
        <img src={bgHero} alt="card" loading="lazy"
            className="h-[65%] object-cover"
        />
        <p className="text-dimWhite mt-4 py-2 px-4">{children}</p>
    </div>
)

const Portfolio = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <section id="portfolio" className='flex flex-col justify-start min-h-[700px] relative' >
            <div className="self-center mt-10 mb-10">
                <h1 className={`${styles.heading} text-center`} >
                    My {" "}
                    <br className="sm:block hidden" />
                    <span className="text-secondary">Portfolio</span>
                </h1>
            </div>
            <div className={`flex flex-col ss:flex-row flex-wrap gap-6 justify-center items-center`}>
                <Card onClick={() => setToggle(bool => !bool)}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, beatae!
                </Card>
                <Card onClick={() => setToggle(bool => !bool)}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </Card>
            </div>

            {/* modal */}
            <div className={`${toggle ? 'hidden' : styles.flexCenter} modal__portfolio`}>
                <div className="ss:w-[75%] sm:w-[60%] md:w-[50%] w-full bg-white relative rounded-b-sm rounded-tl-sm shadow-xl">
                    <div className={`${styles.flexCenter} absolute -top-[30px] right-0 h-[30px] bg-secondary text-white cursor-pointer rounded-t-sm text-[14px]`} onClick={() => setToggle(bool => !bool)}>
                        close
                    </div>
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/WxOulfAfKvk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
