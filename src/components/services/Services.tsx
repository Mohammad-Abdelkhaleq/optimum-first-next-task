
import React from "react";
import Image from "next/image";
import styles from "./options.module.scss";

export const Services:React.FC = () => {
  return (
    <div className={styles.options}>
      <div className={styles.option}>
        <Image
          className={styles.options_imge}
          src="/images/icon-access-anywhere.svg"
          alt="icon access anywhere"
          width={200}
          height={200}
        />
        <h2 className={styles.option_header}>Access your files, anywhere</h2>
        <p className={styles.optons_text}>
          The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere.
        </p>
      </div>
      <div className={styles.option}>
        <Image
          className={styles.options_imge}
          src="/images/icon-security.svg"
          alt="icon security"
          width={200}
          height={200}
        />
        <h2 className={styles.option_header}>Security you can trust</h2>
        <p className={styles.optons_text}>
          2-factor authentication and user-controlled encryption are just a
          couple of the security features we allow to help secure your files.
        </p>
      </div>
      <div className={styles.option}>
        <Image
          className={styles.options_imge}
          src="/images/icon-collaboration.svg"
          alt="icon collaboration"
          width={200}
          height={200}
        />
        <h2 className={styles.option_header}>Real-time collaboration</h2>
        <p className={styles.optons_text}>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
      </div>
      <div className={styles.option}>
        <Image
          className={styles.options_imge}
          src="/images/icon-any-file.svg"
          alt="icon any file"
          width={200}
          height={200}
        />
        <h2 className={styles.option_header}>Store any type of file</h2>
        <p className={styles.optons_text}>
          Whether you're sharing holidays photos or work documents, Fylo has you
          covered allowing for all file types to be securely stored and shared.
        </p>
      </div>
    </div>
  );
};
