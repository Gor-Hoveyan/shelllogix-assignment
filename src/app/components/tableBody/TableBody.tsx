import { ScoreChanceRow, WinChanceRow } from "@/src/utils/generateData";
import styles from "./TableBody.module.scss";

interface TableBodyInterface {
  data: ScoreChanceRow[] | WinChanceRow[];
}

export default function TableBody(props: TableBodyInterface) {
  const { data } = props;
  return (
    <tbody className={styles.tableBody}>
      {data.map((row) => (
        <tr key={row.id} className={styles.bodyRow}>
          {(Object.keys(row) as Array<keyof typeof row>).slice(1).map((key) => (
            <td key={row.id + key}>{row[key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
