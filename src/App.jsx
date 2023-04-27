import { Navbar, Hero, BulletPoints, Productive, Testimonials, CTA, Footer } from './components'
import { CurvDesktop, CurvMobile } from './assets'
import styles from './styles'

function App() {
  return (
    <div className="text-white font-poppins">
      <div className="bg-lightgray relative">
        <div className="z-10 relative">
          <Navbar />
          <Hero />
        </div>
        <img src={CurvDesktop} alt="curv" className="absolute w-[100%] hidden md:block bottom-0 left-0 z-0" />
        <img src={CurvMobile} alt="curv" className="absolute w-[100%] md:hidden bottom-0 left-0 z-0" />
      </div>
      <div className={`${styles.paddingX} bg-mediumgray pt-32 flex flex-col gap-32`}>
        <BulletPoints />
        <Productive />
        <Testimonials />
      </div>
      <div className={`${styles.paddingX} bg-mediumgray`}>
        <CTA />
      </div>
      <div className="bg-darkgray">
        <Footer />
      </div>
    </div>
  )
}

export default App
