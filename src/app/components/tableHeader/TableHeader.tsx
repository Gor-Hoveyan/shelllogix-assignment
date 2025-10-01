"use client";
import { useState } from "react";
import styles from "./TableHeader.module.scss";

const colNames = {
  bookmaker: "Букмекер",
  p1: "П1",
  p2: "П2",
  "2:0": "2:0",
  "2:1": "2:1",
  "0:2": "0:2",
  "1:2": "1:2",
};

type ColumnKey = keyof typeof colNames;

interface TableHeaderInterface {
  columns: ColumnKey[];
  handleSorting: (
    column: ColumnKey,
    order: "asc" | "des",
    isScore: boolean
  ) => void;
  isScore: boolean;
}

export default function TableHeader({
  columns,
  handleSorting,
  isScore,
}: TableHeaderInterface) {
  const [ordered, setOrdered] = useState<ColumnKey | undefined>(undefined);
  const [order, setOrder] = useState<"asc" | "des">("asc");

  const handleClick = (column: ColumnKey) => {
    const newOrder = ordered === column && order === "asc" ? "des" : "asc";
    setOrdered(column);
    setOrder(newOrder);

    handleSorting(column, newOrder, isScore);
  };

  return (
    <thead className={styles.tableHeader}>
      <tr>
        {columns.map((column) => (
          <th key={column} title={colNames[column]}>
            <p>
              <span
                className={styles.arrow}
                onClick={() => handleClick(column)}
              >
                {colNames[column]}
                {ordered === column ? (order === "asc" ? "▲" : "▼") : " "}
              </span>
            </p>
          </th>
        ))}
      </tr>
    </thead>
  );
}
