import { myService } from "../static_data"
import styles from "../styles"

const Service = () => (
    <section id="service" className={`flex md:flex-row-reverse flex-col  py-10 md:items-center min-h-[100vh] lg:min-h-[100vmin]`}>
        <div className="flex-1 flex flex-col md:pl-32">
            <h1 className={styles.heading}>
                This Is My {" "}
                <br className="sm:block hidden" />
                <span className="text-secondary">Service</span>
            </h1>
            <p className={`${styles.paragraph} mt-2`}>The service I provide very high quality and professional.</p>
        </div>
        <div className={`flex-1 flex justify-start  flex-col gap-3`}>
            {myService.map((service) => (
                <div className="md:w-full ss:w-[65%] border-secondary ss:border-4 border-2 rounded-sm py-2 px-4 service__animate cursor-pointer" key={service.id}>
                    <h3 className="font-semibold ss:text-[24px] text-[18px] text-dimWhite tracking-wider">{service.title}</h3>
                </div>
            ))}
        </div>
    </section>
)

export default Service