import { teamslist } from "./teamslist";

let teamslength = teamslist.length;

// Create arrays of dummy data for restructuring data
let positions = [
  { "Manchester United": 1 },
  { "Manchester City": 2 },
  { "Leicester City": 3 },
  { Arsenal: 4 },
  { Chelsea: 5 },
  { Liverpool: 6 },
  { "Tottenham Hotspur": 7 }
];
let arr = [
  "Manchester United",
  "Manchester City",
  "Leicester City",
  "Arsenal",
  "Chelsea",
  "Liverpool",
  "Tottenham Hotspur"
];
let gamesplayed = [
  { "Manchester United": 1 },
  { "Manchester City": 2 },
  { "Leicester City": 3 },
  { Arsenal: 4 },
  { Chelsea: 5 },
  { Liverpool: 6 },
  { "Tottenham Hotspur": 7 }
];
let gameswon = [
  { "Manchester United": 1 },
  { "Manchester City": 2 },
  { "Leicester City": 3 },
  { Arsenal: 4 },
  { Chelsea: 5 },
  { Liverpool: 6 },
  { "Tottenham Hotspur": 7 }
];
let gamesdrew = [
  { "Manchester United": 1 },
  { "Manchester City": 2 },
  { "Leicester City": 3 },
  { Arsenal: 4 },
  { Chelsea: 5 },
  { Liverpool: 6 },
  { "Tottenham Hotspur": 7 }
];
let gameslost = [
  { "Manchester United": 1 },
  { "Manchester City": 2 },
  { "Leicester City": 3 },
  { Arsenal: 4 },
  { Chelsea: 5 },
  { Liverpool: 6 },
  { "Tottenham Hotspur": 7 }
];
let gameGF = [
  { "Manchester United": 1 },
  { "Manchester City": 2 },
  { "Leicester City": 3 },
  { Arsenal: 4 },
  { Chelsea: 5 },
  { Liverpool: 6 },
  { "Tottenham Hotspur": 7 }
];
let gameGA = [
  { "Manchester United": 1 },
  { "Manchester City": 2 },
  { "Leicester City": 3 },
  { Arsenal: 4 },
  { Chelsea: 5 },
  { Liverpool: 6 },
  { "Tottenham Hotspur": 7 }
];
let gameGD = [
  { "Manchester United": 1 },
  { "Manchester City": 2 },
  { "Leicester City": 3 },
  { Arsenal: 4 },
  { Chelsea: 5 },
  { Liverpool: 6 },
  { "Tottenham Hotspur": 7 }
];
let tplist = [
  { "Manchester United": 1 },
  { "Manchester City": 2 },
  { "Leicester City": 3 },
  { Arsenal: 4 },
  { Chelsea: 5 },
  { Liverpool: 6 },
  { "Tottenham Hotspur": 7 }
];

//Build this array to show the complete table
let table = [];
let teamdetails = {};
for (let l = 0; l < teamslength; l++) {
  teamdetails = {
    Position: positions[l][arr[l]],
    Club: arr[l],
    Played: gamesplayed[l][arr[l]],
    Won: gameswon[l][arr[l]],
    Draw: gamesdrew[l][arr[l]],
    Lost: gameslost[l][arr[l]],
    GF: gameGF[l][arr[l]],
    GA: gameGA[l][arr[l]],
    GD: gameGD[l][arr[l]],
    Points: tplist[l][arr[l]]
  };
  table.push(teamdetails);
}

export const allteams = table;
export const tp = tplist;
