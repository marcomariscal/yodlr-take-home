import React from "react";
import { render } from "@testing-library/react";
import Users from "./Users";

it("renders without crashing", function () {
  render(<Users />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Users />);
  expect(asFragment()).toMatchSnapshot();
});
