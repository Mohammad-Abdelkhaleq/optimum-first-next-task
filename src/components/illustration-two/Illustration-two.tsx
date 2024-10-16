
import React from "react";
import Image from "next/image";
import styles from "./illustration-two.module.scss";
import Link from "next/link";

export const Illustration_two = () => {
  return (
    <div className={styles.illustration}>
      <Image
        className={styles.illustration_two_image}
        src="/images/illustration-stay-productive.png"
        alt="illustration stay productive"
        width={500}
        height={500}
      />
      <div className={styles.content} >
        <h1 className={styles.illustration_two_header}>
          Stay productive,
          <br />
          wherever you are
        </h1>
        <p className={styles.illustration_two_text}>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className={styles.illustration_two_text}>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <div className={styles.illustration_two_link_container}>
        <Link 
        className={styles.illustration_two_link}
        href="#">View how Fylo works
        </Link>
        <Image 
        className={styles.arrow}
        src="/images/icon-arrow.svg"
        alt="arrow"
        width={20}
        height={20}
        />
        </div>
      </div>
    </div>
  );
};
