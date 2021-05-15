import { allteams } from "./alldetails";

test("number of teams", () => {
  expect(allteams.length).toBe(7);
});

test("Winning team", () => {
  expect(allteams[0].["Club"]).toBe("Leicester City");
});

test("Table position", () => {
  expect(allteams[0].["Position"]).toBe(1);
});
