import Image from "next/image";
import styles from "./footer.module.scss";

import React from "react";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_logo}>
        <Image
          className={styles.logo}
          src="/images/logo.svg"
          alt="logo"
          width={200}
          height={70}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.address}>
          <Image
            className={styles.address_icon}
            src="/images/icon-location.svg"
            alt="location icon"
            width={20}
            height={25}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.contacts}>
          <div className={styles.phone}>
            <Image
              className={styles.phone_icon}
              src="/images/icon-phone.svg"
              alt="phone icon"
              width={20}
              height={20}
            />
            <p>+1-543-123-4567</p>
          </div>
          <div className={styles.email}>
            <Image
              className={styles.email_icon}
              src="/images/icon-email.svg"
              alt="email icon"
              width={20}
              height={20}
            />
            <p> john@gmail.com</p>
          </div>
        </div>
        <ul className={styles.footer_links1}>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Jobs</a>
          </li>
          <li>
            <a>Press</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
        <ul className={styles.footer_links2}>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a>Terms</a>
          </li>
          <li>
            <a>Privacy</a>
          </li>
        </ul>

        <div className={styles.socials}>
          <Image
          className={styles.socials_icon}
            src="/images/icon-facebook.svg"
            alt="Facebook Icon"
            width={50}
            height={50}
          />
          <Image
            className={styles.socials_icon}
            src="/images/icon-twitter.svg"
            alt="Twitter Icon"
            width={50}
            height={50}
          />
          <Image
            className={styles.socials_icon}
            src="/images/icon-instagram.svg"
            alt="Instagram Icon"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};
