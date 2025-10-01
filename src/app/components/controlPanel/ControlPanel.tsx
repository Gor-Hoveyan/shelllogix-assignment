"use client";
import styles from "./ControlPanel.module.scss";

interface ControlPanelProps {
  length: number;
  setLength: (length: number) => void;
  table: "Win Chances" | "Score Chances";
  setTable: (table: "Win Chances" | "Score Chances") => void;
}

export default function ControlPanel(props: ControlPanelProps) {
  const { length, setLength, table, setTable } = props;
  return (
    <div>
      <input
        type="number"
        value={length}
        onChange={(e) =>
          e.target.value ? setLength(Number(e.target.value)) : setLength(1)
        }
      />
      <select
        value={table}
        onChange={(e) =>
          setTable(e.target.value as "Win Chances" | "Score Chances")
        }
      >
        <option value={"Win Chances"}>Win Chances</option>
        <option value={"Score Chances"}>Score Chances</option>
      </select>
    </div>
  );
}
