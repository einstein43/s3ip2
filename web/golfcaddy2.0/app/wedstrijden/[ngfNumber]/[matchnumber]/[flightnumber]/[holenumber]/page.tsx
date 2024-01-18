"use client"
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import styles from './page.module.css'; // Replace with the actual module file path
import React from 'react';
 

interface Round {
  round_id?: number;
  golfer_id?: number;
  course_id?: number;
  date?: string;
  hole1?: number;
  hole2?: number;
  hole3?: number;
  hole4?: number;
  hole5?: number;
  hole6?: number;
  hole7?: number;
  hole8?: number;
  hole9?: number;
  hole10?: number;
  hole11?: number;
  hole12?: number;
  hole13?: number;
  hole14?: number;
  hole15?: number;
  hole16?: number;
  hole17?: number;
  hole18?: number;
}

export default function HoleNumberPage( ) {
  const [hole, setHole] = useState(1);
  const [scores, setScores] = useState(Array(18).fill(''));
  const [currentScore, setCurrentScore] = useState('');
  const [isSubmissionStep1, setIsSubmissionStep1] = useState(true);

  const handleScoreChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentScore(e.target.value);
  };

  const handleScoreSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Save the score for the current hole
    setScores((prevScores) => {
      const newScores = [...prevScores];
      newScores[hole - 1] = currentScore;
      return newScores;
    });

    // Move to the next hole
    if (hole < 18) {
      setHole((prevHole) => prevHole + 1);
      setCurrentScore('');
    }

    // Call the onSubmit callback with the scores when all holes are filled
    if (hole === 18) {
       
    }
  };

  const handleApiSubmit = () => {
    // If it's the first step, show the full list of scores
    if (isSubmissionStep1) {
      setIsSubmissionStep1(false);
    } else {
      // Retrieve golfer details from local storage
      const golferDetailsString = localStorage.getItem('golfer');
      if (!golferDetailsString) {
        console.error('Golfer details not found in local storage');
        return;
      }

      const golferDetails = JSON.parse(golferDetailsString);

      // Construct the Round object
      const round: Round = {
        round_id: golferDetails.currentmatch_id,
        golfer_id: golferDetails.ngf,
         hole1: parseInt(scores[0], 10) || 0,
        hole2: parseInt(scores[1], 10) || 0,
        hole3: parseInt(scores[2], 10) || 0,
        hole4: parseInt(scores[3], 10) || 0,
        hole5: parseInt(scores[4], 10) || 0,
        hole6: parseInt(scores[5], 10) || 0,
        hole7: parseInt(scores[6], 10) || 0,
        hole8: parseInt(scores[7], 10) || 0,
        hole9: parseInt(scores[8], 10) || 0,
        hole10: parseInt(scores[9], 10) || 0,
        hole11: parseInt(scores[10], 10) || 0,
        hole12: parseInt(scores[11], 10) || 0,
        hole13: parseInt(scores[12], 10) || 0,
        hole14: parseInt(scores[13], 10) || 0,
        hole15: parseInt(scores[14], 10) || 0,
        hole16: parseInt(scores[15], 10) || 0,
        hole17: parseInt(scores[16], 10) || 0,
        hole18: parseInt(scores[17], 10) || 0,
        
      };
      console.log(round);

      // Call the onApiSubmit callback with the constructed Round object
      fetch('http://localhost:3001/round', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(round),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      // Reset to the initial step after submission
      setIsSubmissionStep1(true);
    }
  };

  useEffect(() => {
    // Scroll to the top of the form when the hole changes
    window.scrollTo(0, 0);
  }, [hole]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Scorecard</h2>
      <form className={styles.form} onSubmit={handleScoreSubmit}>
        <label>
          Hole {hole}:
          <input
            type="number"
            name="score"
            value={currentScore}
            onChange={handleScoreChange}
            className={styles.input}
          />
        </label>
        <button name="nexthole" className={styles.button} disabled={!isSubmissionStep1}>
          Next Hole
        </button>
      </form>

      {hole === 18 && (
      <>
        {!isSubmissionStep1 && (
          <div className={styles.scoreList}>
            <h3>Full List of Scores:</h3>
            <ul>
              {scores.map((score, index) => (
                <li key={index}>Hole {index + 1}: {score}</li>
              ))}
            </ul>
          </div>
        )}
        {hole === 18 && scores[17] && (
          <button type='submit' onClick={handleApiSubmit} className={styles.button}>
            {isSubmissionStep1 ? 'Submit to API' : 'Confirm Submission'}
          </button>
        )}
      </>
    )}
  </div>
  );
};

 
