import { clients } from "../static_data"
import styles from "../styles"

const Clients = () => (
    <section id="clients" className={`${styles.flexCol} md:items-center min-h-[650px]`}>
        <div className="flex-1 flex flex-col justify-center">
            <h1 className={styles.heading}>
                Work for all these {" "}
                <br className="sm:block hidden" />
                <span className="text-secondary">Brands & Clients</span>
            </h1>
            <p className={`${styles.paragraph} mt-6`}>I have completed many collaborations with brands and clients who contacted me. So, let's talk!</p>
            <button className="button__primary md:text-[20px] mt-10 max-w-max">Let's Talk</button>
        </div>
        <div className={`flex justify-center flex-1 flex-wrap sm:gap-14 gap-6`}>
            {clients.map(client => (
                <img src={client.icon} alt={client.name} key={client.id}
                    className="ss:h-[70px] h-[40px] object-contain cursor-pointer" />
            ))}
        </div>
    </section>
)

export default Clients
