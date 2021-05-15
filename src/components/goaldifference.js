import { data } from "../data";
import { teamslist } from "./teamslist";
import { arr } from "./teamposition";

// Create array to show each team's goal difference
let dataLngth = data.length;
let teamslength = teamslist.length;
let gameGDlist = [];
let gameGFlist = [];
let gameGAlist = [];
let goaldiffObj = {};
let goalsforObj = {};
let goalsagainstObj = {};

for (let j = 0; j < teamslength; j++) {
  let goalsscored = 0;
  let goalsconceded = 0;
  for (let k = 0; k < dataLngth; k++) {
    if (data[k].score[arr[j]] != null || data[k].score[arr[j]] != undefined) {
      let key1 = Object.keys(data[k].score)[0];
      let key2 = Object.keys(data[k].score)[1];
      let aliasString = "";
      aliasString = arr[j];
      if (aliasString === key1) {
        goalsscored = goalsscored + data[k].score[key1];
        goalsconceded = goalsconceded + data[k].score[key2];
      } else if (aliasString === key2) {
        goalsscored = goalsscored + data[k].score[key2];
        goalsconceded = goalsconceded + data[k].score[key1];
      }
    }
  }
  goaldiffObj = { [arr[j]]: goalsscored - goalsconceded };
  goalsforObj = { [arr[j]]: goalsscored };
  goalsagainstObj = { [arr[j]]: goalsconceded };
  gameGDlist.push(goaldiffObj);
  gameGFlist.push(goalsforObj);
  gameGAlist.push(goalsagainstObj);
}

export const gameGD = gameGDlist;
export const gameGF = gameGFlist;
export const gameGA = gameGAlist;
