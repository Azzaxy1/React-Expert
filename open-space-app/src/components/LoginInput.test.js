/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
import LoginInput from "./LoginInput";

expect.extend(matchers);

describe("LoginInput component", () => {
  it("should handle username typing correctly", async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const usernameInput = await screen.getByPlaceholderText("Username");

    // Action
    await userEvent.type(usernameInput, "usernametest");

    // Assert
    expect(usernameInput).toHaveValue("usernametest");
  });
});
