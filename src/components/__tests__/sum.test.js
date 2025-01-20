import { sum } from "../sum";

test("Sum Function Should Calculate The SUm of Two Numbers", () => {
  const result = sum(4, 7);

  //Assertion
  expect(result).toBe(11);
});
