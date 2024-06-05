// pages/index.js

import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Awesome App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Welcome to My Awesome App!" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">My Awesome App</a>
        </h1>

        <p className={styles.description}>
          Download now and discover a whole new world!
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Feature 1 &rarr;</h3>
            <p>Learn more about Feature 1</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Feature 2 &rarr;</h3>
            <p>Learn more about Feature 2</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Feature 3 &rarr;</h3>
            <p>Learn more about Feature 3</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Feature 4 &rarr;</h3>
            <p>Learn more about Feature 4</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Made with ❤️ by{' '}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Your Name
          </a>
        </p>
      </footer>
    </div>
  );
}
