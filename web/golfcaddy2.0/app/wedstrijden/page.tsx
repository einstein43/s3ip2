"use client";
import MatchCard from "@/public/components/molecules/matchcard.molecule";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    // Function to fetch golf rounds from API
    const fetchGolfRounds = async () => {
      try {
        const response = await fetch("http://localhost:3001/rounds/all"); // Replace with your API URL
        const data = await response.json();
        setGolfRounds(data);
      } catch (error) {
        console.error("Error fetching golf rounds:", error);
      }
    };

    fetchGolfRounds();
  }, []);

  return (
    <main className={styles.main}>
      {golfRounds.map((round) => (
        <MatchCard key={round.id}  />
      ))}
    </main>
  );
}
