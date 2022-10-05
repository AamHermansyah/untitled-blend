import { arrowup } from "../assets"
import { socialMedia } from "../static_data"
import styles from "../styles"

const ContainerIcon = ({ children, style, url, targetBlank }) => (
    <div
        className={`${styles.flexCenter} ${style} ss:w-[62px] w-[40px] ss:h-[62px] h-[40px] rounded-full cursor-pointer mt-2 bg-white duration-200 overflow-hidden`}
    >
        <a href={url} className={`${styles.flexCenter} w-full h-full`} target={targetBlank && '_blank'} >
            {children}
        </a>
    </div>
)

const FixedSocialMedia = () => (
    <div className="fixed bottom-4 right-4 z-[4]">
        {socialMedia.map((social) => (
            <ContainerIcon key={social.id} style="hover:-translate-y-[5px]" url={social.url} targetBlank={true} >
                <img src={social.icon} alt={social.id} className="w-[50%] object-contain" />
            </ContainerIcon>
        ))}

        <ContainerIcon style="bg-secondary mt-6 hover:bg-primary" url="#header" >
            <img src={arrowup} alt='arrowup' className="w-[50%] object-contain mt-2 animate-bounce" />
        </ContainerIcon>
    </div>
)

export default FixedSocialMedia