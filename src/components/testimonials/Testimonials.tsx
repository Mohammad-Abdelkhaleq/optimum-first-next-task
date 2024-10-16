import React from "react";
import Image from "next/image";
import styles from "./testimonials.module.scss";

export const Testimonials:React.FC = () => {
  return (
    <div className={styles.testimonials}>
      <Image
        className={styles.quotes}
        src="/images/bg-quotes.png"
        alt="bg-quotes"
        width={100}
        height={100}
      />
      <div className={styles.testimonial}>
        <p className={styles.content}>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className={styles.info}>
          <Image
            className={styles.profile}
            src="/images/profile-1.jpg"
            alt="profile 1"
            width={25}
            height={25}
          />
          <div className={styles.titles}>
            <h3>Satish Patel</h3>
            <h6>Founder & CEO, Huddle</h6>
          </div>
        </div>
      </div>
      <div className={styles.testimonial}>
        <p className={styles.content}>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className={styles.info}>
          <Image
            className={styles.profile}
            src="/images/profile-2.jpg"
            alt="profile 2"
            width={25}
            height={25}
          />
          <div className={styles.titles}>
            <h3>Bruce McKenzie</h3>
            <h6>Founder & CEO, Huddle</h6>
          </div>
        </div>
      </div>

      <div className={styles.testimonial}>
        <p className={styles.content}>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className={styles.info}>
          <Image
            className={styles.profile}
            src="/images/profile-3.jpg"
            alt="profile 3"
            width={25}
            height={25}
          />
          <div className={styles.titles}>
            <h3>Iva Boyd</h3>
            <h6>Founder & CEO, Huddle</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
