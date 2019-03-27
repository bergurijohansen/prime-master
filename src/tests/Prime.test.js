// import React from "react";

it("4 + 4 = 8", () => {
  const res = 4 + 4;

  expect(res).toEqual(8);
});

it("4 + 4 = 9, should Fail", () => {
  const res = 4 + 4;

  expect(res).toEqual(9);
});

it("value is true", () => {
  const value = true;

  expect(value).toEqual(true);
});
