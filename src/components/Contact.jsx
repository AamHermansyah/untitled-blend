import { socialMedia } from "../static_data"
import styles from "../styles"

const Icon = ({ icon, url, content }) => (
    <div className="h-[62px] sm:w-[70%] ss:w-[90%] w-full bg-white rounded-full p-[2px]">
        <a href={url} className="w-full h-full flex items-center group" target="_blank" >
            <div className={`${styles.flexCenter} w-[60px] h-full bg-secondary group-hover:bg-[#333] rounded-full duration-200`}>
                <img src={icon} alt='arrowup' className="w-[50%] object-contain" />
            </div>
            <p className="font-semibold text-[18px] text-[#333] ml-4">{content}</p>
        </a>
    </div>
)

const Contact = () => (
    <section id="contact" className={`${styles.flexCol} md:items-center h-[100vh] lg:h-[700px] mt-32 md:mt-0`}>
        <div className="flex-1 flex flex-col justify-center">
            <h1 className={styles.heading}>
                Get In Touch {" "}
                <br className="block" />
                <span className="text-secondary">Contact Info</span>
            </h1>
            <p className={`${styles.paragraph} mt-6`}>Contact me using social media and I will get back to you within 24 hours.</p>
        </div>
        <div className={`flex justify-start flex-1 flex-col gap-4`}>
            {socialMedia.map((social) => (
                <Icon key={social.id} icon={social.icon} url={social.url} content={social.content} />
            ))}
        </div>
    </section>
)

export default Contact
