import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Index";

describe("Header Component", () => {
  it("Should render correctly", () => {
    render(<Header />);
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();
  });

  it("should links must have the href attributes corresponding to your page ", () => {
    render(<Header />);
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toHaveAttribute("href", "/");
    const destinationLink = screen.getByRole("link", { name: /destination/i });
    expect(destinationLink).toHaveAttribute("href", "/destination");
    const crewLink = screen.getByRole("link", { name: /crew/i });
    expect(crewLink).toHaveAttribute("href", "/crew");
    const technologyLink = screen.getByRole("link", { name: /technology/i });
    expect(technologyLink).toHaveAttribute("href", "/technology");
  });

  it("The nav should not have the class open when the header is rendered", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation");
    expect(nav).not.toHaveClass("open");
  });
});
