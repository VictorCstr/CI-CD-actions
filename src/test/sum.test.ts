import { sum } from "../sum";

describe("Math", () => {
  it("Should be able to sum A + B", () => {
    expect(sum(5, 5)).toBe(10);
  });

  it("Should fail trying to sum A + B", () => {
    expect(sum(5, 5)).not.toBe(2);
  });
});
