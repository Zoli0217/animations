import styles from "./AnimatedBorder.module.css"


const AnimatedBorder = () => {
  return (
    <div className={styles.background}>
        <div className={styles.foreground}>AnimatedBOrder</div>
    </div>
  )
}

export default AnimatedBorder