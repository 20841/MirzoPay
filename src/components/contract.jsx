
import { card } from "../assets"
import { layout, styles } from "../util/style"
import Button from "./button"



const Contract = () => {
  return (
   <section className={layout.section}>
    <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Bir nicha oson qadamda <br className="sm:block hidden" />kantrakt tuzish
        </h2>
        <p className={`${styles.paragraph} max-w-[550 px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, distinctio libero labore voluptatem eaque veniam voluptatibus consequuntur sunt exercitationem accusantium.
        </p>
        <Button styles={'mt-10'}/>
    </div>
    <div className={layout.sectionImage}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
   </section>
  )
}

export default Contract
