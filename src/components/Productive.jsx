import styles from '../styles'
import { Arrow, Productivity } from '../assets'

const Productive = () => {
  return (
    <div className={`${styles.innerWidth} ${styles.flexCenter} flex-wrap gap-16`}>
      <div className={`${styles.flexCenter} flex-1`}>
        <img src={Productivity} alt="productivity" className="w-[100%] min-w-[90vw] sm:min-w-[400px] md:min-w-[400px] object-contain" />
      </div>
      <div className="flex-1">
        <h2 className={`${styles.heading}`}>Stay productive, wherever you are</h2>
        <p className={`${styles.paragraphSm}`}>
          Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. 
          <br/><br/>
          Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
          <br/><br/>
          <span className="flex border-b-lightblue hover:border-b-white transition-all border-b-[2px] max-w-[165px] text-lightblue cursor-pointer py-1 gap-2 w-[90%]">
            See how Fylo works
            <img src={Arrow} alt="arrow" className="w-[20px] object-contain"/>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Productive