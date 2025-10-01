import Table from "./components/table/Table";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Table />
    </div>
  );
}
