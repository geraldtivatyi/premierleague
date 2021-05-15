import { teamslist } from "./teamslist";
import { positions } from "./teamposition";
import { arr } from "./teamposition";
import { gamesplayed } from "./gamesplayed";
import { gameswon } from "./gameswon";
import { gamesdrew } from "./gamesdrew";
import { gameslost } from "./gameslost";
import { gameGF } from "./goaldifference";
import { gameGA } from "./goaldifference";
import { gameGD } from "./goaldifference";
import { data } from "../data";

let teamslength = teamslist.length;
let dataLngth = data.length;

// Create array to show each team's points
let tplist = [];
let teampointsarr = [];
let pointsObj = {};
for (let l = 0; l < teamslength; l++) {
  let points = 0;
  for (let m = 0; m < dataLngth; m++) {
    if (data[m].score[arr[l]] != null || data[m].score[arr[l]] != undefined) {
      let key1 = Object.keys(data[m].score)[0];
      let key2 = Object.keys(data[m].score)[1];
      let aliasString = "";
      aliasString = arr[l];
      if (aliasString === key1) {
        if (data[m].score[arr[l]] > data[m].score[key2]) {
          points = points + 3;
        } else if (data[m].score[arr[l]] < data[m].score[key2]) {
          points = points + 0;
        } else if (data[m].score[arr[l]] === data[m].score[key2]) {
          points = points + 1;
        }
      } else if (aliasString === key2) {
        if (data[m].score[arr[l]] > data[m].score[key1]) {
          points = points + 3;
        } else if (data[m].score[arr[l]] < data[m].score[key1]) {
          points = points + 0;
        } else if (data[m].score[arr[l]] === data[m].score[key1]) {
          points = points + 1;
        }
      }
    }
  }
  pointsObj = { [arr[l]]: points };
  tplist.push(pointsObj);
}

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
