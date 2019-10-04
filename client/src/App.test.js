import React from 'react';
import { render } from "@testing-library/react";
import App from './App';
import { totalSearches } from "./components/Team";

test('renders without crashing', () => {
  render(<App />);
});

test("totalSearches sums the total searches", () => {
  const team = {
    players: [
      { searches: 3 },
      { searches: 2 },
      { searches: 1 }
    ]
  };
  const expected = 6;
  expect(totalSearches(team)).toBe(expected);
});
