import classNames from "classnames";
import styles from "../../styles/molecules/matchcard.module.css";
import Image from "next/image";
import check from "../../assets/check.svg";
import { Button } from "../atoms/button.atom";
import { useEffect, useState } from "react";




interface GolfRound {
  id: number;
  date: string;
  course: string;
  score: number;
}






export default function MatchCard() {


  const [golfRounds, setGolfRounds] = useState<GolfRound[]>([])



  useEffect(() => {
    // Fetch golf rounds from your API endpoint
    const fetchGolfRounds = async () => {
      try {
        const response = await fetch('http://localhost:3001/rounds/all'); // Replace with your actual API endpoint
        const data = await response.json();
        setGolfRounds(data);
      } catch (error) {
        console.error('Error fetching golf rounds:', error);
      }
    };

    fetchGolfRounds();
  }, []);











  return (
    <div id={styles.wrapper}>
       <div>
      <h2>Golf Rounds</h2>
      <ul>
        {golfRounds.map((round) => (
          <li key={round.id}>
            <strong>Date:</strong> {round.date}, <strong>Course:</strong> {round.course}, <strong>Score:</strong> {round.score}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
