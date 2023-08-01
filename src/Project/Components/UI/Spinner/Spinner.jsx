import styles from "./Spinner.module.css"

export default function Spinner() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
    <div className={[styles.threebody].join(' ')}>
        <div className={styles.threebodydot}></div>
        <div className={styles.threebodydot}></div>
        <div className={styles.threebodydot}></div>
    </div>
    </div>
  )
}
