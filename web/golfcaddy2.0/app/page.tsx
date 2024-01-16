"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Golfer } from "@/public/models/golfer.model";
import React from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [golfers, setGolfers] = useState<Golfer[]>([]);
  const [registerData, setRegisterData] = useState({
    ngf: 0,
    password: "",
  });
  const [loginData, setLoginData] = useState({
    ngf: 0,
    password: "",
  });

  useEffect(() => {
    const fetchGolfers = async () => {
      try {
        const response = await fetch("http://localhost:3001/golfer/all");
        const data = await response.json();
        setGolfers(data);
      } catch (error) {
        console.error("Error fetching golfers:", error);
      }
    };

    fetchGolfers();
  }, []); // Fetch golfers on component mount

  const filteredGolfers = golfers.filter(
    (golfer) =>
      golfer.name &&
      golfer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = (golfer: Golfer) => {
    // Set a cookie with golfer data
    localStorage.setItem("golfer", JSON.stringify(golfer));
  };

  const handleChange = (e: any) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLoginChange = (e: any) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();

    const apiUrl = "http://localhost:3001/register";
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });

      if (response.ok) {
        console.log("User registered successfully!");
        // You can redirect the user to another page or handle success in your application.
      } else {
        console.error("Registration failed.");
        // Handle error scenarios, show a message, etc.
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  const handleLogin = async (e: any) => {
    e.preventDefault();

    const apiUrl = "http://localhost:3001/login";
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        console.log("User logged in successfully!");
      } else {
        console.error("loggin in failed.");
        // Handle error scenarios, show a message, etc.
      }
    } catch (error) {
      console.error("Error during signing in:", error);
    }
  };

  return (
    <div className={styles.wrapper_div}>
      <div id={styles.welcome_div}>quick login</div>

      <div id={styles.ngf_div}>
        <div id={styles.ngf_top}>
          <label className={styles.label}>
            Enter your name
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
        </div>

        {searchTerm && (
          <ul className={styles.golfers_list}>
            {filteredGolfers.map((golfer) => (
              <li key={golfer.id} onClick={() => handleClick(golfer)} onKeyDown={() => handleClick(golfer)}>
                <a href={`/profiel/${golfer.ngf}`}>
                  <a>{golfer.name}</a>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div id={styles.register_div}>
        <h1>register here</h1>
        <form onSubmit={handleRegister}>
          <label>
            NGF#:
            <input
              type="number"
              name="ngfregister"
              value={registerData.ngf}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="passwordregister"
              value={registerData.password}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>

    </div>
  );
}
