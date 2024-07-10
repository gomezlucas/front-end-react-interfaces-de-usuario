import {render, screen } from "@testing-library/react"
import HeroText from "../HeroText"

test ("render component", () => {
    render(<HeroText title="Total Revenue" />)
    const heroText = screen.getByText(/Total Revenue/i);
    expect(heroText).toBeInTheDocument();
})
