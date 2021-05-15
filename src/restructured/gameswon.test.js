import { gameswon } from "./gameswon";
import { allteams } from "./alldetails";

test("number of games won by team at position i", () => {
  let i = 2; 
  let team = allteams[i-1].["Club"];
  expect(gameswon[i-1].[[team]]).toBe(3);
});