import { data } from "../data";

let dataLngth = data.length;
let teams = [];
for (let i = 0; i < dataLngth; i++) {
  teams.push(Object.keys(data[i].score)[0]);
  teams.push(Object.keys(data[i].score)[1]);
}

teams = [...new Set(teams)];
export const teamslist = teams;
