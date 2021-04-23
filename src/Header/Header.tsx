import React from "react";
import styles from "./Header.module.css";

interface IHeader {
  children: React.ReactNode;
}
export function Header({ children }: IHeader) {
  return (
    <>
      <header className={styles.Header}>{children}</header>
    </>
  );
}
