import { gamesplayed } from "./gamesplayed";
import { allteams } from "./alldetails";

test("number of games lost", () => {
  expect(gamesplayed.length).toBe(7);
});

test("number of games lost by team at position i", () => {
  let i = 6; //team position
  let team = allteams[i-1].["Club"];
  expect(gamesplayed[i-1].[[team]]).toBe(5);
});