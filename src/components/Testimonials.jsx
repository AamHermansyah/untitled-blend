import { bgHero } from "../assets"
import styles from "../styles"

const Card = ({ children }) => (
    <div className="bg-[#111] md:w-[300px] w-[250px] min-h-[320px] py-6 px-4 rounded-xl overflow-hidden shadow-black shadow-lg">
        <img src={bgHero} alt="card" loading="lazy"
            className="h-[50px] w-[50px] rounded-full object-cover"
        />
        <h2 className="font-semibold mt-4 text-secondary">Aam Hermansyah</h2>
        <h4 className="text-[14px]">Web Development</h4>
        <p className="text-dimWhite mt-4 text-thin">"{children}"</p>
    </div>
)

const Testimonials = () => (
    <section id="testimonials" className='flex flex-col justify-center min-h-[700px] relative mt-32' >
        <div className="self-center mt-10 mb-10">
            <h1 className={`${styles.heading} text-center`} >
                Tasty<span className="text-secondary">monials</span>
            </h1>
        </div>
        <div className={`flex flex-col ss:flex-row flex-wrap gap-6 justify-center items-center`}>
            <Card>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illo similique minus reprehenderit cupiditate quo ducimus quaerat quasi expedita ipsa?
            </Card>
            <Card>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex harum doloribus nostrum similique nisi. At exercitationem atque maiores laborum veritatis.
            </Card>
            <Card>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex harum doloribus nostrum similique nisi. At exercitationem atque maiores laborum veritatis.
            </Card>
        </div>
    </section>
)

export default Testimonials
