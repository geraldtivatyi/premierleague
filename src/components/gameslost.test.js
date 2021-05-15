import { gameslost } from "./gameslost";
import { allteams } from "./alldetails";

test("number of games lost", () => {
  expect(gameslost.length).toBe(7);
});
