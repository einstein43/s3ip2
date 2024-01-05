import styles from "./page.module.css";
export default function Profiel() {
  return (
    <main>
      <div id={styles.wrapper_div}>
        <h1 id={styles.login_text}>
          U bent niet ingelogd, klik{" "}
          <a id={styles.login_button} href="/">
            hier
          </a>{" "}
          om in te loggen
        </h1>
      </div>
    </main>
  );
}
