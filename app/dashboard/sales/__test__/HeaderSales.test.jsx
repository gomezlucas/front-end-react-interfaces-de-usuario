import {render, screen } from "@testing-library/react"
import HeaderSales from "../HeaderSales"


describe("Header Sales Component", ()=> {

test ("render component", () => {
    render(<HeaderSales numberOfSales="5" />)
    const headerElement = screen.getByText(/5 Ventas/);
    expect(headerElement).toBeInTheDocument()
})

test ("should render Venta when the number of sales is one",()=>{
    render(<HeaderSales numberOfSales="1" />)
    const headerElement = screen.getByText(/1 Venta/);
    expect(headerElement).toBeVisible()

})
})