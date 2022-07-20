import React from "react";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import HomePage from ".";

describe("HomePage", () => {
  it("renders without crashing", () => {
    const { container } = render(<HomePage />);
    expect(container).toBeTruthy();
  });
});
