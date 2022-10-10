import { myExperience } from "../static_data"
import styles from "../styles"

const Experience = () => (
    <section id="experience" className='flex flex-col justify-center h-[100vh] lg:h-[650px] relative' >
        <div className="self-center mt-10 mb-10">
            <h1 className={`${styles.heading} text-center`} >
                My {" "}
                <br className="sm:block hidden" />
                <span className="text-secondary">Experience</span>
            </h1>
        </div>
        <div className={`${styles.flexCol} gap-4 justify-evenly items-center`}>
            {myExperience.map(experience => (
                <div className={`${styles.flexCenter} flex-1 flex-col border-dimWhite md:pb-4 pb-2 border-b-4 mb-4`} key={experience.id}>
                    <h2 className="font-bold text-dimWhite text-[54px] sm:text-[72px]">{experience.statistic}</h2>
                    <p className="uppercase font-semibold sm:text-[24px] text-[18px]">{experience.title}</p>
                </div>
            ))}
        </div>
    </section>
)

export default Experience
