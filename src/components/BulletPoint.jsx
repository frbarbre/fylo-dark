import styles from '../styles'

const BulletPoint = ({ imgUrl, title, subtitle, id }) => {
  return (
    <div className={`${styles.flexCenter} flex-col text-center gap-6 max-w-[340px] w-[90%]`}>
        <div className={`${styles.flexCenter} w-[120px] h-[80px] object-contain`}>
            <img className="h-[100%]" src={imgUrl} alt={`${id}-icon`} />
        </div>
        <h2 className="font-semibold">{title}</h2>
        <p className="text-gray-300 text-[14px]">{subtitle}</p>
    </div>
  )
}

export default BulletPoint