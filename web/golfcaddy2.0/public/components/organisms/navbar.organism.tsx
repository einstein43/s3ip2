"use client";

import styles from "../../styles/organisms/navbar.module.css";
import { Button } from "../atoms/button.atom";
import phone from "../../assets/telegram.svg";
import location from "../../assets/telegram.svg";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import HamburgerBtn from "../atoms/hamburgerBtn.atom";
import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import React from "react";

export const NavBar = () => {
  // State
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [ngf, setNgf] = useState<number>();


async function getNgf() {
  const currentUser = await localStorage.getItem("golfer");
  const user = JSON.parse(currentUser!);
  setNgf(user.ngf);
}



 

  const handleLogout = () => {
    localStorage.removeItem("golfer");
    window.location.href = "/";
  };

  return (
    <div id={styles.container}>
      {/* Logo */}
      <div id={styles.logoWrap}>
        <Image src={logo} alt="Golfcaddy 2.0 logo" width={200} height={50} />
      </div>

      {/* Links */}
      <ul id={styles.linkContainer}>
        <a className={styles.link} href={"/"}>
          Home
        </a>
        <a className={styles.link} href={`/wedstrijden/${ngf}`} onClick={() => getNgf()}>
          Wedstrijden
        </a>
        <a className={styles.link} href={`/profiel/${ngf}`} onClick={() => getNgf()}>
          Profiel
        </a>
        <a className={styles.link} href={"/leaderboard"}>
          Leaderboard
        </a>
      </ul>

      {/* Buttons */}
      <div id={styles.buttonContainer}>
        <Button
          size="medium"
          theme="light"
          icon={{
            src: location,
            alt: "Help",
          }}
        >
          Help
        </Button>
        <button onClick={() => handleLogout()}>Logout</button>
      </div>

      {/* Hamburger button */}
      <div id={styles.hamburgerBtnWrap}>
        <HamburgerBtn
          style="style1"
          isOpen={menuOpen}
          setIsOpen={setMenuOpen}
        />
      </div>

      {/* Mobile menu */}
      {
        <div
          className={classNames(
            styles.mobileMenu,
            menuOpen && styles.mobileMenu__state_open
          )}
        >
          <ul id={styles.mobileLinkContainer}>
            <Link className={styles.link} href={"/"}>
              Home
            </Link>
            <Link className={styles.link} href={"/wedstrijden"}>
              Wedstrijden
            </Link>
            <Link className={styles.link} href={"/profiel"}>
              Profiel
            </Link>
            <Link className={styles.link} href={"/Leaderboard"}>
              Leaderboard
            </Link>
          </ul>
        </div>
      }
    </div>
  );
};
