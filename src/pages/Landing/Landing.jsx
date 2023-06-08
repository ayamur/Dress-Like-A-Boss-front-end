import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container} idName="usernotuser">
      <h1 > hello, {user ? user.name : 'boss'}</h1>
    </main>
  )
}

export default Landing
