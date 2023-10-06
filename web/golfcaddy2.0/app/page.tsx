import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/public/components/atoms/button.atom";
import telegram from "@/public/assets/telegram.svg";
import HamburgerBtn from "@/public/components/atoms/hamburgerBtn.atom";
import { SetStateAction } from "react";
import { NavBar } from "@/public/components/organisms/navbar.organism";
import MatchCard from "@/public/components/molecules/matchcard.molecule";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper_div}>test1
        <div className={styles.news_section}>test2</div>
      </div>
    </main>
  );
}
