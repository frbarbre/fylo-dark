import styles from '../styles'
import { bulletPoints } from '../constants'
import { BulletPoint } from '../components'

const BulletPoints = () => {
  return (
    <section className={`${styles.bulletWidth} ${styles.paddingX} ${styles.flexCenter} flex-wrap gap-12`}>
      {bulletPoints.map((point) => (
        <BulletPoint {...point} key={point.id} />
      ))}
    </section>
  )
}

export default BulletPoints