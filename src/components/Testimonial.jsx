import styles from "../styles"
import { Quotes } from "../assets"

const Testimonial = ({ text, imgUrl, name, job, quote }) => {
  return (
    <div className={`${styles.flexCenter} max-w-[370px] w-[90%] relative`}>
        <div className={`${styles.flexCenter} rounded-md flex-col bg-lightgray relative z-10 w-[100%] py-8 px-6`}>
            <p className={`${styles.paragraphSm}`}>
                {text}
            </p>
            <div className="flex self-start pt-6 gap-2 items-center">
                <div>
                    <img src={imgUrl} alt={name} className="rounded-full w-6 object-contain" />
                </div>
                <div>
                    <h6 className="font-semibold text-[10px]">{name}</h6>
                    <p className="text-[8px] text-gray-300">{job}</p>
                </div>
            </div>
        </div>
        <img src={Quotes} alt="quotes" className={`${quote === "active" ? "" : "hidden"} absolute top-0 left-0 -translate-x-[10px] -translate-y-[35px] z-0`} />
    </div>
  )
}

export default Testimonial