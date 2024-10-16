import React from 'react'
import Image from 'next/image'
import styles from './illustration-one.module.scss'

export const Illustration = () => {
  return (
    <div className={styles.illustration}>
      <Image
        className={styles.illustration_one_image}
        src="/images/illustration-intro.png"
        alt="illustration intro"
        width={500}
        height={500}
      />
      <div className={styles.content}>
        <h1 className={styles.illustration_one_header} >
          All your files in one secure location,
          <br />
          accessible anywhere.
        </h1>
        <p className={styles.illustration_one_text}>
          Fylo stores all your most important files in one secure location.
          <br />
          Access them wherever you need, share and collaborate
          <br />
          with friends family, and co-workers.
        </p>
        <button className={styles.start_Btn}>Get Started</button>
      </div>
    </div>
  )
}

