import { gamesplayed } from "./gamesplayed";
import { allteams } from "./alldetails";

test("number of games lost", () => {
  expect(gamesplayed.length).toBe(7);
});
