import { data } from "../data";
import { teamslist } from "./teamslist";

let dataLngth = data.length;
let teamslength = teamslist.length;
let teampointsarr = [];
let pointsObj = {};

// Create array to show each team's points
for (let j = 0; j < teamslength; j++) {
  let points = 0;
  for (let k = 0; k < dataLngth; k++) {
    if (
      data[k].score[teamslist[j]] != null ||
      data[k].score[teamslist[j]] != undefined
    ) {
      let key1 = Object.keys(data[k].score)[0];
      let key2 = Object.keys(data[k].score)[1];
      let aliasString = "";
      aliasString = teamslist[j];
      if (aliasString === key1) {
        if (data[k].score[teamslist[j]] > data[k].score[key2]) {
          points = points + 3;
        } else if (data[k].score[teamslist[j]] < data[k].score[key2]) {
          points = points + 0;
        } else if (data[k].score[teamslist[j]] === data[k].score[key2]) {
          points = points + 1;
        }
      } else if (aliasString === key2) {
        if (data[k].score[teamslist[j]] > data[k].score[key1]) {
          points = points + 3;
        } else if (data[k].score[teamslist[j]] < data[k].score[key1]) {
          points = points + 0;
        } else if (data[k].score[teamslist[j]] === data[k].score[key1]) {
          points = points + 1;
        }
      }
    }
  }
  pointsObj = { [teamslist[j]]: points };
  teampointsarr.push(pointsObj);
}

export const teampoints = teampointsarr;
