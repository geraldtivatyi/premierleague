// Create array to show number of games each team played
import { data } from "../data";
import { teamslist } from "./teamslist";
import { arr } from "./teamposition";

let dataLngth = data.length;
let teamslength = teamslist.length;

let gamesplayedlist = [];
let gpObj = {};

for (let j = 0; j < teamslength; j++) {
  let count = 0;
  for (let k = 0; k < dataLngth; k++) {
    if (data[k].score[arr[j]] != null || data[k].score[arr[j]] != undefined) {
      count = count + 1;
    }
  }
  gpObj = { [arr[j]]: count };
  gamesplayedlist.push(gpObj);
}

export const gamesplayed = gamesplayedlist;
