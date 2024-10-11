import styles from "./page.module.css";

export default function Page() {
  return (
    <div id={styles.wrapper_div}>
      <div className={styles.menu_links} id={styles.logo}>
        <img src="" alt="" />
      </div>

      <div className={styles.menu_wrapper}>
        <div className={styles.menu_links} id={styles.producten}>
          Producten
        </div>
        <div className={styles.menu_links} id={styles.voorwie}>
          Voor Wie
        </div>
        <div className={styles.menu_links} id={styles.over}>
          Over Verduijn
        </div>
        <div className={styles.menu_links} id={styles.contact}>
          Contact
        </div>
      </div>

      <div id={styles.rightside_div}>
        <a id={styles.cart} href="/cart">
         Cart
        </a>
        <button id={styles.getstarted}>Get started</button>
      </div>
    </div>
  );
}

 
