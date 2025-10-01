"use client";
import styles from "./Table.module.scss";
import TableHeader from "../tableHeader/TableHeader";
import TableBody from "../tableBody/TableBody";
import {
  generateWinChances,
  generateScoreChances,
} from "@/src/utils/generateData";
import { useEffect, useState } from "react";
import { ScoreChanceRow, WinChanceRow } from "@/src/utils/generateData";

type ColumnType = "2:0" | "2:1" | "0:2" | "1:2" | "bookmaker" | "p1" | "p2";

export default function Table() {
  const [table, setTable] = useState<"Win Chances" | "Score Chances">(
    "Win Chances"
  );
  const [length, setLength] = useState<number>(1000);
  const [winData, setWinData] = useState<WinChanceRow[]>([]);
  const [scoreData, setScoreData] = useState<ScoreChanceRow[]>([]);
  useEffect(() => {
    if (table === "Win Chances") {
      setScoreData([]);
      setWinData(generateWinChances(length));
    } else {
      setWinData([]);
      setScoreData(generateScoreChances(length));
    }
  }, [table]);

  function handleSorting(
    column: ColumnType,
    order: "asc" | "des",
    isScore: boolean
  ) {
    if (isScore) {
      setScoreData((prev) =>
        [...prev].sort((a, b) => {
          const aValue = a[column as keyof ScoreChanceRow];
          const bValue = b[column as keyof ScoreChanceRow];

          if (typeof aValue === "number" && typeof bValue === "number") {
            return order === "asc" ? aValue - bValue : bValue - aValue;
          }

          if (typeof aValue === "string" && typeof bValue === "string") {
            return order === "asc"
              ? aValue.localeCompare(bValue)
              : bValue.localeCompare(aValue);
          }

          return 0; // fallback if types mismatch
        })
      );
    } else {
      setWinData((prev) =>
        [...prev].sort((a, b) => {
          const aValue = a[column as keyof WinChanceRow];
          const bValue = b[column as keyof WinChanceRow];

          if (typeof aValue === "number" && typeof bValue === "number") {
            return order === "asc" ? aValue - bValue : bValue - aValue;
          }

          if (typeof aValue === "string" && typeof bValue === "string") {
            return order === "asc"
              ? aValue.localeCompare(bValue)
              : bValue.localeCompare(aValue);
          }

          return 0;
        })
      );
    }
  }

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.main}>
        {winData.length || scoreData.length ? (
          <>
            <TableHeader
              columns={
                Object.keys(
                  (table === "Win Chances" ? winData : scoreData)[0]
                ).slice(1) as ColumnType[]
              }
              handleSorting={handleSorting}
              isScore={table === "Score Chances"}
            />
            <TableBody data={table === "Win Chances" ? winData : scoreData} />
          </>
        ) : null}
      </table>
    </div>
  );
}
