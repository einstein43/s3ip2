"use client";
import MatchCard from "@/public/components/molecules/matchcard.molecule";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Golfer } from "@/public/models/golfer.model";

interface GolfRound {
  id: number;
  golfer_id: number;
  course: String;
  date: number;
  hole1: number;
  hole2: number;
  hole3: number;
  hole4: number;
  hole5: number;
  hole6: number;
  hole7: number;
  hole8: number;
  hole9: number;
  hole10: number;
  hole11: number;
  hole12: number;
  hole13: number;
  hole14: number;
  hole15: number;
  hole16: number;
  hole17: number;
  hole18: number;

}



export default function Wedstrijden() {
  const [golfRounds, setGolfRounds] = useState<GolfRound[]>([]);
  const [user, setUser] = useState<Golfer>();
  useEffect(() => {
  const currentUser = localStorage.getItem("golfer");
  setUser(JSON.parse(currentUser!));
    
  }, []); 
  return (
    <main className={styles.main}>
     <div><h1>Welcome {user?.name} </h1></div>
      
      
    </main>
  );
}
