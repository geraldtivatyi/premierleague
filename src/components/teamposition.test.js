import { positions } from "./teamposition";
import { allteams } from "./alldetails";

test("number of entries for positions", () => {
  expect(positions.length).toBe(7);
});
