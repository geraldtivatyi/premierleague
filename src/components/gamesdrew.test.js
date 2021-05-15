import { gamesdrew } from "./gamesdrew";
import { allteams } from "./alldetails";

test("number of games drawn", () => {
  expect(gamesdrew.length).toBe(7);
});
