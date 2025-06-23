import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "@/app/src/components/dashboard/Card";

describe("<Card />", () => {
  it("renders the title and actionText when provided", () => {
    render(
      <Card title="My Title" actionText="See more">
        <div>Child Content</div>
      </Card>
    );

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("My Title");
    expect(screen.getByText("See more")).toBeInTheDocument();
  });

  it("renders its children", () => {
    render(
      <Card title="Title" actionText="Action">
        <span data-testid="child">Hello, world!</span>
      </Card>
    );

    expect(screen.getByTestId("child")).toHaveTextContent("Hello, world!");
  });

  it("defaults title and actionText to empty strings when not provided", () => {
    render(
      <Card>
        <p>No title or action</p>
      </Card>
    );

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("");

    const action = screen.getByText("", { selector: "p" });
    expect(action).toBeInTheDocument();
    expect(action.textContent).toBe("");
  });
});