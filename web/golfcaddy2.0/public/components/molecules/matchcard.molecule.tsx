import classNames from "classnames";
import styles from "../../styles/molecules/matchcard.module.css";
import Image from "next/image";
import check from "../../assets/check.svg";



export default function MatchCard() {
  return (
    <div id={styles.wrapper}>
      <div className={classNames(styles.start)}>
        <div className={styles.score_hole_wrapper}>
          <div className={styles.score}>72</div>
          <div className={styles.holes}>18 Holes</div>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.description_wrapper}>
          <div id={styles.description_course}>Golfbaan Het Woold</div>
          <div id={styles.description_date}>18 September</div>
          <div id={styles.description_qualifying}>Qualifying <Image id={styles.image} src={check} alt={"qualifying"}></Image></div>
        </div>
      </div>
      <div className={styles.end}>Handicap 14.6 (+0.3)</div>
    </div>
  );
}
