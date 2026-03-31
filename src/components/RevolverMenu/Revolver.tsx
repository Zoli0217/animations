import styles from "./Revolver.module.css"

const Revolver = () => {
  return (
    <div className={styles.revolver}>
        <div className={styles.chamber}></div>
        <div className={styles.chamber}></div>
        <div className={styles.chamber}></div>
        <div className={styles.chamber}></div>
        <div className={styles.chamber}></div>
        <div className={styles.chamber}></div>
    </div>
  )
}

export default Revolver