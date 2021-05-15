import { data } from "../data";

for (var i = 0; i < data.length; i++) {
  data[i].date = new Date(data[i].date);
}

// Sort data by date
let sorteddata = data.slice().sort((a, b) => a.date - b.date);
export const sorted = sorteddata;
