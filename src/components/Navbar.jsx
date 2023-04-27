import { Logo } from '../assets'
import styles from '../styles'
import { navItems } from '../constants'

const Navbar = () => {
  return (
    <nav className={`${styles.padding} flex flex-wrap gap-12 justify-center xs:justify-between items-center max-2-[1400px] mx-auto`}>
      <img src={Logo} alt="logo" className="w-[120px] object-contain" />
      <div className={`${styles.flexCenter} gap-6 md:gap-12`}>
        {navItems.map((item) => (
          <a key={item.id} className="hover:underline text-gray-300 hover:text-white hover:font-semibold transition-all" href="">{item.title}</a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar