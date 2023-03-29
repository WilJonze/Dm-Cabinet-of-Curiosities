import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AutocompleteSearch from "./AutocompleteSearch";

describe("AutocompleteSearch", () => {
  test("renders the component with necessary elements", () => {
    render(<AutocompleteSearch />);
    expect(screen.getByPlaceholderText("Search for a monster...")).toBeInTheDocument();
    expect(screen.getByText("Search for two Monsters from the D&D manual and Mash em'")).toBeInTheDocument();
  });

});