"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/public/components/atoms/button.atom";
import telegram from "@/public/assets/telegram.svg";
import HamburgerBtn from "@/public/components/atoms/hamburgerBtn.atom";
import { SetStateAction } from "react";
import { NavBar } from "@/public/components/organisms/navbar.organism";
import MatchCard from "@/public/components/molecules/matchcard.molecule";
import classNames from "classnames";
import ScoreCard from "@/public/components/organisms/scorecard.organism";
import Leaderboard from "@/public/components/templates/leaderboard.template";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper_div}>
          
         </div>
     </main>
  );
}
