import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <>
    <h1>Dress Like a Boss</h1>
    <main className={styles.container} idName="usernotuser">
      <h2 > hello, {user ? user.name : 'boss'}</h2>
    </main>
    </>
  )
}

export default Landing
