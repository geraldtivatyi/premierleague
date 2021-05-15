import { gameswon } from "./gameswon";
import { allteams } from "./alldetails";

test("number of games lost", () => {
  expect(gameswon.length).toBe(7);
});
