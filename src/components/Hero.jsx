import { Intro, CurvDesktop, CurvMobile } from '../assets'
import styles from '../styles'
import Button from './Button'

const Hero = () => {
  return (
    <>
    <main className={`${styles.heroWidth} ${styles.flexCenter} ${styles.paddingX} flex-col mt-12`}>
      <img src={Intro} alt="intro" />
      <div className={`${styles.flexCenter} flex-col gap-8 mt-6`}>
        <h1 className={`${styles.heading} max-w-[700px] text-center`}>All your files in one secure location, accessible anywhere.</h1>
        <p className={`${styles.paragraph} max-w-[550px] text-center text-gray-300`}>Fylo stores all your most important files in one secure location. Access them wherever 
        you need, share and collaborate with friends family, and co-workers.</p>
        <Button textStyles={"Get Started"} />
      </div>
    </main>
    </>
  )
}

export default Hero