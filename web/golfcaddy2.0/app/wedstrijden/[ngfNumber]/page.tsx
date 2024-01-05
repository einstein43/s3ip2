"use client";
import { Golfer } from "@/public/models/golfer.model";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
export default function matchPage({
  params: { golfer },
}: {
  params: { golfer: Golfer };
}) {
  const [user, setUser] = useState<Golfer | null>(null);
  const [match, setMatch] = useState<any>(null);

  useEffect(() => {
    const golferString = localStorage.getItem("golfer");

    if (golferString) {
      const golfer: Golfer = JSON.parse(golferString);

      setUser(golfer);
      getMatchInfo();
    }
  }, []);


  function getMatchInfo() {
    const match = user?.currentmatch_id;
    fetch(`http://localhost:3001/match/${match}`)
      .then((response) => response.json())
      .then((data) => setMatch(data));

  }

  return (
    <div>
      <div><h1>hello {user && user.name}</h1></div>
      <div><h1>you are in match {user && user.currentmatch_id}</h1> <a href={`/wedstrijden/${user && user.ngf}/${user && user.currentmatch_id}`}>Go to match</a></div>
      <div><h1>you are in flight {user && user.currentflight_id}</h1><a href={`/wedstrijden/${user && user.ngf}/${user && user.currentmatch_id}/${user && user.currentflight_id}`}> Go to Flight</a></div>


<div>

</div>



    </div>
  );
}
