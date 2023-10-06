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

export const NavBar = () => {
  // State
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Fn - handle click
  const handleClick = (id: string) => {
    // Get element
    const el = document.getElementById(id);

    // If element exists
    if (el) {
      // Scroll to element
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div id={styles.container}>
      {/* Logo */}
      <div id={styles.logoWrap}>
        <Image src={logo} alt="Golfcaddy 2.0 logo" width={200} height={50} />
      </div>

      {/* Links */}
      <ul id={styles.linkContainer}>
        <Link className={styles.link} href={"/"}>
          Nieuws
        </Link>
        <Link className={styles.link} href={"/wedstrijden"}>
          Wedstrijden
        </Link>
        <Link className={styles.link} href={"/profiel"}>
          Profiel
        </Link>
        <Link className={styles.link} href={"/instellingen"}>
          Instellingen
        </Link>
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
        <Button
          size="medium"
          theme="dark"
        
        >
          Logout
        </Button>
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
              Nieuws
            </Link>
            <Link className={styles.link} href={"/wedstrijden"}>
              Wedstrijden
            </Link>
            <Link className={styles.link} href={"/profiel"}>
              Profiel
            </Link>
            <Link className={styles.link} href={"/instellingen"}>
              Instellingen
            </Link>
          </ul>
        </div>
      }
    </div>
  );
};
