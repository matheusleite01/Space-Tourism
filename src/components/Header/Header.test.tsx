import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"
import Header from "./Index"

describe('Header Component', () => {
  it("Should render correctly", () => {
    render(
      <Header/>
    )
    const homeText = screen.getByText(/home/i);
    const destinatioText = screen.getByText(/destination/i);
    expect(homeText).toBeInTheDocument();
    expect(destinatioText).toBeInTheDocument();
  });
})