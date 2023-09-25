import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CrewNav from "./index";

describe("CrewNav Component", () => {
  
  it("Should render correctly", () => {
    render(<CrewNav />);
    const helding = screen.getByRole("heading");
    expect(helding).toHaveTextContent(/douglas hurley/i);
  });

  it("Should render commander content when page is render", () => {
    render(<CrewNav />);
    const subtitle = screen.getByRole("subtitle");
    const helding = screen.getByRole("heading", {
      name: /douglas hurley/i,
    });
    const text = screen.getByText(
      /douglas gerald hurley is an american engineer, former marine corps pilot and former nasa astronaut\. he launched into space for the third time as commander of crew dragon demo\-2\./i,
    );

    const img = screen.getByRole("img", {
      name: /image\-douglas\-hurle/i,
    });

    expect(subtitle).toHaveTextContent(/commander/i);
    expect(helding).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  it("Should render mission specialist content when select button is clicked", async () => {
    render(<CrewNav />);

    const select = screen.getByDisplayValue(/mission specialist/i);

    fireEvent.click(select);

    const subtitle = await screen.findByRole("subtitle");
    const helding = await screen.findByRole("heading", {
      name: /mark shuttleworth/i,
    });
    const text = await screen.findByText(
      /mark richard shuttleworth is the founder and ceo of canonical, the company behind the linux\-based ubuntu operating system\. shuttleworth became the first south african to travel to space as a space tourist\.\./i,
    );
    const img = await screen.findByRole("img", {
      name: /image\-mark\-shuttleworth/i,
    });

    expect(subtitle).toHaveTextContent(/mission specialist/i);
    expect(helding).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  it("Should render pilot content when select button is clicked", async () => {
    render(<CrewNav />);

    const select = screen.getByDisplayValue(/pilot/i);

    fireEvent.click(select);

    const subtitle = await screen.findByRole("subtitle");
    const helding = await screen.findByRole("heading", {
      name: /victor glover/i,
    });
    const text = await screen.findByText(
      /pilot on the first operational flight of the spacex crew dragon to the international space station\. glover is a commander in the u\.s\. navy where he pilots an f\/a\-18\.he was a crew member of expedition 64, and served as a station systems flight engineer\./i,
    );
    const img = await screen.findByRole("img", {
      name: /image\-victor\-glover/i,
    });

    expect(subtitle).toHaveTextContent(/pilot/i);
    expect(helding).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  it("Should render flight engineer content when select button is clicked", async () => {
    render(<CrewNav />);

    const select = screen.getByDisplayValue(/flight engineer/i);

    fireEvent.click(select);

    const subtitle = await screen.findByRole("subtitle");
    const helding = await screen.findByRole("heading", {
      name: /anousheh ansari/i,
    });
    const text = await screen.findByText(
      /anousheh ansari is an iranian american engineer and co\-founder of prodea systems\. ansari was the fourth self\-funded space tourist, the first self\-funded woman to fly to the iss, and the first iranian in space\./i,
    );
    const img = await screen.findByRole("img", {
      name: /image\-anousheh\-ansari/i,
    });

    expect(subtitle).toHaveTextContent(/flight engineer/i);
    expect(helding).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});
