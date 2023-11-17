"use client";

import styles from "../../styles/templates/leaderboard.module.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import user from "../../user.png";  
import winner from "../../winner.png"
interface Golfer {
  id: number;
  name: String;
  age: number;
  handicap: number;
  homecourse: String;
  country: String;
}
export default function Leaderboard() {
  const [golfers, setGolfers] = useState<Golfer[]>([]);

  useEffect(() => {
    const fetchGolfer = async () => {
      try {
        const response = await fetch(`http://localhost:3001/golfer/all`); // Assuming this is your API endpoint
        const data = await response.json();
        setGolfers(data);
      } catch (error) {
        console.error("Error fetching golfer:", error);
      }
    };

    fetchGolfer();
  }, []);

  // Function to sort golfers by handicap
  const sortGolfersByHandicap = () => {
    const sortedGolfers = [...golfers].sort((a, b) => a.handicap - b.handicap);
    setGolfers(sortedGolfers);
  };

  useEffect(() => {
    sortGolfersByHandicap();
  }, [golfers]);

  const firstThree = golfers.slice(0, 3);
  const rest = golfers.slice(3);

  return (
    <div>
      <h1 className={styles.title}>Leaderboard</h1>
      <div className={styles.top_wrapper}>
        {/* Map the first three golfers separately */}
        {firstThree.map((golfer, index) => (
          <div
            key={golfer.id}
            className={`${styles.golfer_wrapper2} ${
              index === 0
                ? styles.first_place
                : index === 1
                ? styles.second_place
                : index === 2
                ? styles.third_place
                : ""
            }`}
          >
            <div className={styles.place1}><Image src={winner} alt={"winner"} width={65} height={65}></Image></div>
            <Image id={styles.user_img} src={user} alt={"user"} width={100} height={100}></Image>
            <div className={styles.name_wrapper}> <div className={styles.name2}>{golfer.name}</div></div>
            <div className={styles.age_handicap}>
            <div className={styles.age1}>Age: {golfer.age} Handicap: {golfer.handicap}</div>
            </div>
            <div className={styles.course1}>Home Course: {golfer.homecourse}</div>
            <div className={styles.country1}>Country: {golfer.country}</div>
          </div>
        ))}
      </div>

      <div className={styles.bottom_wrapper}>
        {/* Map the rest of the golfers */}
        {rest.map((golfer, index) => (
          <div key={golfer.id} className={styles.golfer_wrapper}>
            <div className={styles.place}>Place: {index + 4}</div>
            <div className={styles.info}>Name: {golfer.name}</div>
            <div className={styles.info}>Age: {golfer.age}</div>
            <div className={styles.info}>Handicap: {golfer.handicap}</div>
            <div className={styles.info}>Home Course: {golfer.homecourse}</div>
            <div className={styles.info}>Country: {golfer.country}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
