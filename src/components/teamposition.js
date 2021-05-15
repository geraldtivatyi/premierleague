import { teamslist } from "./teamslist";
import { teampoints } from "./teampoints";

let teamslength = teamslist.length;
let arrlist = [];
let p = [];
let positionslist = [];
let pObj = {};

// Create array to show each team's position
for (let j = 0; j < teampoints.length; j++) {
  p.push(teampoints[j][teamslist[j]]);
  p.sort(function (a, b) {
    return b - a;
  });
}
p = [...new Set(p)];
for (let i = 0; i < p.length; i++) {
  for (let j = 0; j < teamslength; j++) {
    if (teampoints[j][teamslist[j]] === p[i]) {
      arrlist.push(teamslist[j]);
    }
  }
}
for (let i = 0; i < arrlist.length; i++) {
  pObj = { [arrlist[i]]: i + 1 };
  positionslist.push(pObj);
}

export const positions = positionslist;
export const arr = arrlist;
