import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./page";
describe("Home page", () => {
  it("Should render correctly", () => {
    render(<Home />);
    const heading = screen.getByRole('heading')
    const space = "SPACE"
    expect(heading).toHaveTextContent(space);
  });

  it("Should have div tag with classname of container", () => {
    render(<Home />);
    const div = screen.getByRole('container');
    expect(div).toHaveClass('container');
  });

  it("should have all paragraphs with content", () => {
    render(<Home />);
    const firstParagraph = screen.getByText(/so, you want to travel to/i);
    const secondParagraph = screen.getByText(
      /let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it\. well sit back, and relax because we’ll give you a truly out of this world experience!/i
      )
      expect(firstParagraph).toBeInTheDocument();
      expect(secondParagraph).toBeInTheDocument();
  });

  it("should have button on the page", () => {
    render(<Home />);
    const button = screen.getByRole('button', {
      name: /explore/i
    })
    expect(button).toBeInTheDocument();
  })
});
