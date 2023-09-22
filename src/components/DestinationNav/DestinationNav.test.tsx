import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DestinationNav from "./Index";

describe("DestinationNav component", () => {
  it("Should render correctly", () => {
    render(<DestinationNav />);
    const moon = screen.getByRole("heading", {
      name: /moon/i,
    });
    expect(moon).toBeInTheDocument();
  });

  it("Should moon select have active class when page is render", () => {
    render(<DestinationNav />);

    const list = screen.getByRole("list");
    const moon = within(list).getByText(/moon/i);

    expect(moon).toHaveClass("active");
  });
  it("Should render moon content when page is render", () => {
    render(<DestinationNav />);

    const moon = screen.getByRole("heading", {
      name: /moon/i,
    });
    const content = screen.getByText(
      /see our planet as you’ve never seen it before\. a perfect relaxing trip away to help regain perspective and come back refreshed\. while you’re there, take in some history by visiting the luna 2 and apollo 11 landing sites\./i,
    );
    const distance = screen.getByText(/384,400 km/i);
    const days = screen.getByText(/3 days/i);

    expect(moon).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(distance).toBeInTheDocument();
    expect(days).toBeInTheDocument();
  });

  it("Should render image moon when page is render", () => {
    render(<DestinationNav />);

    const moonImg = screen.getByRole("img", {
      name: /image\-moon/i,
    });
    expect(moonImg).toBeInTheDocument();
  });

  it("Should render mars content when mars button is clicked", async () => {
    render(<DestinationNav />);

    const list = screen.getByRole("list");

    userEvent.click(within(list).getByText(/mars/i));

    const title = await screen.findByRole("heading", {
      name: /mars/i,
    });
    const content = await screen.findByText(  /don’t forget to pack your hiking boots\. you’ll need them to tackle olympus mons, the tallest planetary mountain in our solar system\. it’s two and a half times the size of everest!/i  )

    const distance = await screen.findByText(/225 MIL km/i);
    const days = await screen.findByText(/9 MONTHS/i);

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(distance).toBeInTheDocument();
    expect(days).toBeInTheDocument();
  });

  it("Should render image mars when mars button is clicked", async () => {
    render(<DestinationNav />);

    const list = screen.getByRole("list");

    userEvent.click(within(list).getByText(/mars/i));

    const moonImg = await screen.findByRole("img", { name: /image\-mars/i });

    expect(moonImg).toBeInTheDocument();
  });

  it("Should render europa content when europa button is clicked", async () => {
    render(<DestinationNav />);

    const list = screen.getByRole("list");

    userEvent.click(within(list).getByText(/europa/i));

    const title = await screen.findByRole("heading", {
      name: /europa/i,
    });
    const content = await screen.findByText(  /don’t forget to pack your hiking boots\. you’ll need them to tackle olympus mons, the tallest planetary mountain in our solar system\. it’s two and a half times the size of everest!/i  )

    const distance = await screen.findByText(/628 MIL./i);
    const days = await screen.findByText(/3 YEARS/i);

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(distance).toBeInTheDocument();
    expect(days).toBeInTheDocument();
  });

  it("Should render image europa when europa button is clicked", async () => {
    render(<DestinationNav />);

    const list = screen.getByRole("list");

    userEvent.click(within(list).getByText(/europa/i));

    const moonImg = await screen.findByRole("img", { name: /image\-europa/i });

    expect(moonImg).toBeInTheDocument();
  });

  it("Should render titan content when titan button is clicked", async () => {
    render(<DestinationNav />);

    const list = screen.getByRole("list");

    userEvent.click(within(list).getByText(/titan/i));

    const title = await screen.findByRole("heading", {
      name: /titan/i,
    });
    const content = await screen.findByText(  /the only moon known to have a dense atmosphere other than earth, titan is a home away from home \(just a few hundred degrees colder!\)\. as a bonus, you get striking views of the rings of saturn\./i  )

    const distance = await screen.findByText(/1.6 BIL. KM/i);
    const days = await screen.findByText(/7 YEARS/i);

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(distance).toBeInTheDocument();
    expect(days).toBeInTheDocument();
  });

  it("Should render image titan when titan button is clicked", async () => {
    render(<DestinationNav />);

    const list = screen.getByRole("list");

    userEvent.click(within(list).getByText(/titan/i));

    const moonImg = await screen.findByRole("img", { name: /image\-titan/i });

    expect(moonImg).toBeInTheDocument();
  });

});
