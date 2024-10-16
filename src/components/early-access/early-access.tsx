
import React from 'react'
import styles from './early-access.module.scss'

export const EarlyAccess : React.FC = () => {
  return (
    <div className={styles.early_acces}>
      <h1 className={styles.early_access_header}>Get early access today</h1>
      <p className={styles.early_access_content} >It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
    <form className={styles.early_access_form}>
    <input className={styles.early_access_input} type="email" id="email" name="email" data-error="Please provide a valid email address" placeholder="john@gmail.com" />
    <button className={styles.submit_btn}>Get Started For Free</button>
    </form>
    </div>
  )
}
