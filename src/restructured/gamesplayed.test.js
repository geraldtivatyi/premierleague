import { gamesplayed } from "./gamesplayed";
import { allteams } from "./alldetails";

test("number of games played by team at position i", () => {
  let i = 6; //team position
  let team = allteams[i-1].["Club"];
  expect(gamesplayed[i-1].[[team]]).toBe(5);
});