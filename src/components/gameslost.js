import { data } from "../data";
import { teamslist } from "./teamslist";
import { arr } from "./teamposition";

let dataLngth = data.length;
let teamslength = teamslist.length;
let gameslostlist = [];
let glObj = {};

// Create array to show number of games each team lost
for (let j = 0; j < teamslength; j++) {
  let count = 0;
  for (let k = 0; k < dataLngth; k++) {
    if (data[k].score[arr[j]] != null || data[k].score[arr[j]] != undefined) {
      let key1 = Object.keys(data[k].score)[0];
      let key2 = Object.keys(data[k].score)[1];
      let aliasString = "";
      aliasString = arr[j];
      if (aliasString === key1) {
        if (data[k].score[arr[j]] < data[k].score[key2]) {
          count = count + 1;
        }
      } else if (aliasString === key2) {
        if (data[k].score[arr[j]] < data[k].score[key1]) {
          count = count + 1;
        }
      }
    }
  }
  glObj = { [arr[j]]: count };
  gameslostlist.push(glObj);
}

export const gameslost = gameslostlist;
