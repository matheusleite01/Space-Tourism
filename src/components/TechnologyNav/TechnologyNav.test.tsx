import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import TechnologyNav from "./Index";

describe("TechnologyNav", () => {
  it("Should render correctly", () => {
    render(<TechnologyNav />);

    const helding = screen.getByRole("heading", {
      name: /launch vehicle/i,
    });

    expect(helding).toBeInTheDocument();
  });

  it("Should button 1 have active class when page is render", () => {
    render(<TechnologyNav />);
    const btn = screen.getByRole('button', {  name: /1/i});

    expect(btn).toHaveClass('active');

  });

  it("Should render launch vehicle content when page is render", () => {
    render(<TechnologyNav />);

    const helding = screen.getByRole("heading", {
      name: /launch vehicle/i,
    });

    const content = screen.getByText(
      /a launch vehicle or carrier rocket is a rocket\-propelled vehicle used to carry a payload from earth's surface to space, usually to earth orbit or beyond\. our web\-x carrier rocket is the most powerful in operation\. standing 150 metres tall, it's quite an awe\-inspiring sight on the launch pad!/i
      )

      const img = screen.getByRole('img', {  name: /image\-launch\-vehicle\.jpg/i});

      expect(helding).toBeInTheDocument();
      expect(content).toBeInTheDocument();
      expect(img).toBeInTheDocument();
  });

  it("Should render spaceport content when button 2 is clicked", async () => {
    render(<TechnologyNav />);

    const btn = screen.getByRole('button', {  name: /2/i});

    fireEvent.click(btn);

    const helding = await screen.findByRole('heading', {  name: /spaceport/i})

    const content = await screen.findByText(  /a spaceport or cosmodrome is a site for launching \(or receiving\) spacecraft, by analogy to the seaport for ships or airport for aircraft\. based in the famous cape canaveral, our spaceport is ideally situated to take advantage of the earth’s rotation for launch\./i  )

    const img = await screen.findByRole('img', {  name: /image\-launch\-spaceport\.jpg/i})

      expect(helding).toBeInTheDocument();
      expect(content).toBeInTheDocument();
      expect(img).toBeInTheDocument();

  });

  it("Should render space capsule content when button 3 is clicked", async () => {
    render(<TechnologyNav />);

    const btn = screen.getByRole('button', {  name: /3/i});

    fireEvent.click(btn);

    const helding = await screen.findByRole('heading', {  name: /space capsule/i})

    const content = await screen.findByText(  /a space capsule is an often\-crewed spacecraft that uses a blunt\-body reentry capsule to reenter the earth's atmosphere without wings\. our capsule is where you'll spend your time during the flight\. it includes a space gym, cinema, and plenty of other activities to keep you entertained\./i )

    const img = await screen.findByRole('img', { name: /image\-launch\-capsule\.jpg/i })

      expect(helding).toBeInTheDocument();
      expect(content).toBeInTheDocument();
      expect(img).toBeInTheDocument();

  });



});
