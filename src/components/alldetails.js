import { teamslist } from "./teamslist";
import { positions } from "./teamposition";
import { arr } from "./teamposition";
import { gamesplayed } from "./gamesplayed";
import { gameswon } from "./gameswon";
import { gamesdrew } from "./gamesdrew";

let teamslength = teamslist.length;

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
