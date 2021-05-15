import { gameGD } from "./goaldifference";
import { allteams } from "./alldetails";

test("number of game differences", () => {
  expect(gameGD.length).toBe(7);
});
