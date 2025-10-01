export interface WinChanceRow {
  id: number;
  bookmaker: string;
  p1: number;
  p2: number;
}

export interface ScoreChanceRow {
  id: number;
  bookmaker: string;
  "2:0": number;
  "2:1": number;
  "0:2": number;
  "1:2": number;
}

const bookmakers = [
  "Fonbet",
  "Parimatch",
  "Bet365",
  "1xBet",
  "Liga Stavok",
  "William Hill",
  "BetFair",
  "Bwin",
  "Marathonbet",
  "Vbet",
  "Adjarabet",
];

const randomOdd = () => Number((Math.random() * (10 - 1.1) + 1.1).toFixed(2));

export function generateWinChances(length: number) {
  return Array.from({ length }, (_, i) => {
    const bookmaker = bookmakers[Math.floor(Math.random() * bookmakers.length)];
    return {
      id: i + 1,
      bookmaker,
      p1: randomOdd(),
      p2: randomOdd(),
    };
  });
}

export function generateScoreChances(length: number) {
  return Array.from({ length }, (_, i) => {
    const bookmaker = bookmakers[Math.floor(Math.random() * bookmakers.length)];
    return {
      id: i + 1,
      bookmaker,
      "2:0": randomOdd(),
      "2:1": randomOdd(),
      "0:2": randomOdd(),
      "1:2": randomOdd(),
    };
  });
}
