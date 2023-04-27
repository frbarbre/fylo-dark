import styles from "../styles"
import { testimonials } from "../constants"
import { Quotes } from "../assets"
import Testimonial from "./Testimonial"

const Testimonials = () => {
  return (
    <div className={`${styles.innerWidth} relative`}>
      <div className={` ${styles.flexCenter} flex-wrap gap-10 z-10 relative`}>
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default Testimonials