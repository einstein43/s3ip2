import classNames from "classnames";
import styles from "../../styles/molecules/matchcard.module.css";
import Image from "next/image";
import check from "../../assets/check.svg";
import { Button } from "../atoms/button.atom";
import { useEffect, useState } from "react";

interface Round {
  round_id?: number;
  golfer_id?: number;
  course_id?: number;
  date?: string;
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

export default function MatchCard() {
  const [golfRounds, setGolfRounds] = useState<Round[]>([]);

  useEffect(() => {
    // Fetch golf rounds from your API endpoint
    const fetchGolfRounds = async () => {
      try {
        const response = await fetch("http://localhost:3001/rounds/all");
        const data = await response.json();
        setGolfRounds(data);
      } catch (error) {
        console.error("Error fetching golf rounds:", error);
      }
    };

    fetchGolfRounds();
  }, []);

  return (
    <div id={styles.wrapper}>
      <div>
        <h2>Last rounds:</h2>
        <ul>
          {golfRounds.map((round) => (
            <li key={round.course_id}>
              <h3>Match: {round.golfer_id}</h3>
               <p>{round.date}</p>
              <p> hole 1: {round.hole1}</p>
              <p> hole 2: {round.hole2}</p>
              <p> hole 3: {round.hole3}</p>
              <p> hole 4: {round.hole4}</p>
              <p> hole 5: {round.hole5}</p>
              <p> hole 6: {round.hole6}</p>
              <p> hole 7: {round.hole7}</p>
              <p> hole 8: {round.hole8}</p>
              <p> hole 9: {round.hole9}</p>
              <p> hole 10: {round.hole10}</p>
              <p> hole 11: {round.hole11}</p>
              <p> hole 12: {round.hole12}</p>
              <p> hole 13: {round.hole13}</p>
              <p> hole 14: {round.hole14}</p>
              <p> hole 15: {round.hole15}</p>
              <p> hole 16: {round.hole16}</p>
              <p> hole 17: {round.hole17}</p>
              <p> hole 18: {round.hole18}</p>
              <p id={styles.totalscore}>
                total score:
                {round.hole1 +
                  round.hole2 +
                  round.hole3 +
                  round.hole4 +
                  round.hole5 +
                  round.hole6 +
                  round.hole7 +
                  round.hole8 +
                  round.hole9 +
                  round.hole10 +
                  round.hole11 +
                  round.hole12 +
                  round.hole13 +
                  round.hole14 +
                  round.hole15 +
                  round.hole16 +
                  round.hole17 +
                  round.hole18}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
