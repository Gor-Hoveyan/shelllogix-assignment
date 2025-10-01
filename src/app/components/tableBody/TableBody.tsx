"use client";
import { ScoreChanceRow, WinChanceRow } from "@/src/utils/generateData";
import styles from "./TableBody.module.scss";
import { useState } from "react";
import ArrowUp from "../../icons/ArrowUp";
import ArrowDown from "../../icons/ArrowDown";

interface TableBodyInterface {
  data: ScoreChanceRow[] | WinChanceRow[];
}

export default function TableBody(props: TableBodyInterface) {
  const [rows, setRows] = useState<number>(1);
  const { data } = props;
  return (
    <tbody className={styles.tableBody}>
      {data.slice(0, rows * 20).map((row) => (
        <tr key={row.id} className={styles.bodyRow}>
          {(Object.keys(row) as Array<keyof typeof row>).slice(1).map((key) => (
            <td key={row.id + key} title={row[key] as string}>
              <span
                className={
                  typeof row[key] === "number" &&
                  Math.max(...data.map((row) => row[key] as number)) ===
                    row[key]
                    ? styles.highest
                    : ""
                }
              >
                {row[key]}
                {key === "2:0" || key === "0:2" || key === "p1" ? (
                  <ArrowUp />
                ) : null}
                {key === "2:1" || key === "1:2" || key === "p2" ? (
                  <ArrowDown />
                ) : null}
              </span>
            </td>
          ))}
        </tr>
      ))}
      {20 * rows < data.length ? (
        <tr id={styles.loadMoreRow}>
          <td colSpan={Object.keys(data[0]).length - 1}>
            {" "}
            <button onClick={() => setRows(rows + 1)}>Load More</button>
          </td>
        </tr>
      ) : null}
    </tbody>
  );
}
