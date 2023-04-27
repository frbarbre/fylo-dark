import styles from "../styles"
import { footer } from "../constants"
import { Logo } from "../assets"


const Footer = () => {
  return (
    <footer className={`${styles.paddingX} pb-36 pt-[10rem] lg:pt-36 flex flex-col gap-10`}>
      <div className="mx-auto md:mx-0">
        <img src={Logo} alt="fylo-logo" />
      </div>
      <div>
        {footer.map((footer) => (
          <div key={footer.id} className={`flex sm:items-center md:items-start xl:justify-between flex-wrap gap-12 justify-center flex-col sm:flex-row`}>
            
            <div className="">
              {footer.locations.map((location) => (
                <div key={location.id} className="flex gap-4">
                  <img src={location.imgUrl} alt={`${location.id}`} className="w-4 object-contain self-start" />
                  <p className={`${styles.paragraphSm} max-w-[350px] w-[90%] text-gray-300`}>{location.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              {footer.contacts.map((contact) => (
                <div key={contact.id} className="flex gap-4">
                  <img src={contact.imgUrl} alt={`${contact.id}`} className="w-4 object-contain " />
                  <p className={`${styles.paragraphSm} max-w-[350px] w-[90%] text-gray-300`}>{contact.text}</p>
                </div>
              ))}
            </div>

            <div className="flex w-max flex-col gap-4 text-gray-300">
              {footer.footerLinks1.map((link) => (
                <p key={link.title} className="hover:text-white hover:font-semibold transition-all">{link.title}</p>
              ))}
            </div>

            <div className="flex w-max flex-col gap-4 text-gray-300">
              {footer.footerLinks2.map((link) => (
                <p key={link.title} className="hover:text-white hover:font-semibold transition-all">{link.title}</p>
              ))}
            </div>

            <div className="flex md:self-start gap-4 self-center">
              {footer.socialIcons.map((icon) => (
                <img key={icon.id} src={icon.imgUrl} alt={`${icon.id}-icon`} className="w-8 object-contain cursor-pointer" />
              ))}
            </div>

          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer