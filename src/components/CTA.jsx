import styles from "../styles"
import { Button } from "../components"

const CTA = () => {
  return (
    <div className={`${styles.bulletWidth} ${styles.flexCenter} flex-col gap-6 text-center py-6 px-6 bg-mediumgray drop-shadow rounded-lg translate-y-[35%] lg:translate-y-[45%]`}>
      <h2 className={`${styles.heading}`}>Get early access today</h2>
      <p className={`${styles.paragraphSm} text-gray-300 max-w-[650px]`}>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
      <div className="flex flex-col items-center lg:flex-row w-[80%] gap-6">
        <input placeholder="email@example.com" type="text" className="w-[100%] bg-white h-[50px] rounded-full text-lightgray ring-lightblue indent-3 xs:indent-8 drop-shadow" />
        <Button textStyles={"Get Started For Free"} />
      </div>
    </div>
  )
}

export default CTA