"use client";
import { Golfer } from "@/public/models/golfer.model";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import React from "react";
export default function MatchPage({
  params: { golfer },
}: {
  params: { golfer: Golfer };
}) {
  const [user, setUser] = useState<Golfer | null>(null);
  const [match, setMatch] = useState<any>(null);

  function getMatchInfo() {
    const match = user?.currentmatch_id;
    fetch(`http://localhost:3001/match/${match}`)
      .then((response) => response.json())
      .then((data) => setMatch(data));
  }

  useEffect(() => {
    const golferString = localStorage.getItem("golfer");

    if (golferString) {
      const golfer: Golfer = JSON.parse(golferString);

      setUser(golfer);
      getMatchInfo();
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div id={styles.block}>

      
      <div>
        <h1>Hallo {user && user.name}</h1>
      </div>
      <div>
        <h1>U speelt in Wedstrijd {user && user.currentmatch_id}</h1>{" "}
        
      </div>
      <div>
        <h1>U bend ingedeeld in flight  {user && user.currentflight_id}</h1>
        <a
          href={`/wedstrijden/${user && user.ngf}/${
            user && user.currentmatch_id
          }/${user && user.currentflight_id}/1`}
        >
          
          Start wedstrijd
        </a>
      </div>

       
      </div>
    </div>
  );
}
