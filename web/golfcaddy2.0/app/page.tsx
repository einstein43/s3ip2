"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Golfer } from "@/public/models/golfer.model";
import React from "react";
import logo from "../public/assets/SVG/logo_v2.svg";
import Image from "next/image";
import { Button } from "@/public/components/atoms/button.atom";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
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
    localStorage.setItem("golfer", JSON.stringify(golfer));
  };

  const handleRegisterChange = (e: any) => {
    console.log("Input name:", e.target.name);
    console.log("Input value:", e.target.value);
  
    setRegisterData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLoginChange = (e: any) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async ( ) => {
     console.log("Register data:", registerData);
    

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
        setRegistrationSuccess(true);
        console.log("User registered successfully!");
         window.location.href = `/profiel/${registerData.ngf}`;
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
      }
    } catch (error) {
      console.error("Error during signing in:", error);
    }
  };

  return (
    <div className={styles.wrapper_div}>
         <div id={styles.ngf_div}>
          <div id={styles.ngf_top}>
            <label className={styles.label}>
              quick login
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
      {registrationSuccess && (
          <div className="success-message">User registered successfully!</div>
        )}
        <div id={styles.logo}>
          <div id={styles.logo_svg}>
            <svg
              id="Group_65"
              data-name="Group 65"
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="75"
              viewBox="0 0 45 45"
            >
              <rect
                id="Rectangle_20"
                data-name="Rectangle 20"
                width="45"
                height="45"
                rx="22.5"
                fill="#48bbed"
              />
              <g
                id="Icon_material-golf-course"
                data-name="Icon material-golf-course"
                transform="translate(11.21 9.411)"
              >
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M30.956,28.978A1.978,1.978,0,1,1,28.978,27,1.978,1.978,0,0,1,30.956,28.978Z"
                  transform="translate(-8.537 -5.9)"
                  fill="#fff"
                />
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M23.144,8.17,12.594,3V26.738H9.956V24.456C7.6,24.918,6,25.762,6,26.738c0,1.451,3.547,2.638,7.913,2.638s7.913-1.187,7.913-2.638c0-1.306-2.849-2.387-6.594-2.6V12.2Z"
                  transform="translate(-6 -3)"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>

          <div id={styles.logo_text}>golfcaddy</div>
        </div>

        <div id={styles.inputs} className={styles.custom_input}>
          <form id={styles.register_form} onSubmit={handleRegister}>
            <input
              id={styles.ngf_input}
              className={styles.inputtext}
              type="number"
              name="ngf"
              onChange={handleRegisterChange}
              required
              placeholder="ngf#"
            />

            <br />
            <label>
              <input
                id={styles.password_input}
                className={styles.inputtext}
                type="password"
                name="password"
                onChange={handleRegisterChange}
                required
                placeholder="password"
              />
            </label>
            <br />
          </form>
          <Button id={styles.register_button} type="submit" theme={"light"} size={"large"} onClick={() => handleRegister()} >log in</Button>
         </div>
      </div>
    </div>
  );
}
