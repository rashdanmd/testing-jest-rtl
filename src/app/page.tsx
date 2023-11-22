import Image from "next/image";
import styles from "./page.module.css";
import Application from "@/components/application/application";
import Skills from "@/components/skills/skills";
import { Counter } from "@/components/counter/counter";

export default function Home() {
  const skillsData = {
    skills: ["test1", "test2", "test3"],
  };
  return (
    <main className={styles.main}>
      {/* <Application /> */}
      <Skills {...skillsData} />
      <Counter />
    </main>
  );
}
