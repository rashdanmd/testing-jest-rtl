import Image from "next/image";
import styles from "./page.module.css";
import Application from "@/components/application/application";

export default function Home() {
  return (
    <main className={styles.main}>
      <Application />
    </main>
  );
}
