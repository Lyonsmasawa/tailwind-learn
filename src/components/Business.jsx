import styles, {layout} from '../style'
import { features } from '../constants'
import Button from './Button'

const FeatureCard = () => (
  <div className=""></div>
)

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className='sm:block hidden' /> we'll handle the money</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right  credit card, you can improve your financial life by building credit, earning rewards and saving money. but with hundreds of credit cards on the market</p>
     <Button styles='mt-10' />
     </div>

     <div className={`${layout.sectionImg} flex-col-reverse`}>
        {features.map((feature) => (
          <FeatureCard />
        ))}
     </div>
    </section>
  )
}

export default Business