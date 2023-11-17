"use client"
import React, { useState, useEffect } from 'react';
 
const GolfScoresTable = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
     
    fetch('https://localhost:3001/scores/1')
      .then(response => response.json())
      .then(data => {
        setScores(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);  

  return (
    <div> 
      <h2>Golf Scores</h2>
      <table>
        <thead>
          <tr>
            <th>Hole</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score: any, index) => (
            <tr key={index}>
              <td>Hole {score.hole}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GolfScoresTable;
