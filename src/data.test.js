import { data } from "./data";

test("number of entries in data", () => {
  expect(data.length).toBe(21);
});

test("check data input incorrect: date", () => {
  var count = 0;
  for (var i = 0; i < data.length; i++) {
    let d = new Date(data[i].date);
    let today = new Date("2021-05-06 00:00");
    let diff = d - today;
    let score = data[i].score[Object.keys(data[i].score)[0]];
    if (diff > 0 && score != null) {
      count = count + 1;
    }
  }
  expect(count).toBe(0);
});
