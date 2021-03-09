import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Inputbox from './components/Inputbox'
import Layout from './components/Layout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Credit card</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
      <Inputbox />
      
    </div>
  )
}
