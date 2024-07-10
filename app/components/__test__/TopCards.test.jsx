import {render, screen } from "@testing-library/react"
import TopCards from "../TopCards"

describe("Top Cards Section", ()=> {
    test ("should render Ventas Top Card", () => {
        render(<TopCards  />)
        const titleCard = screen.getByText("Ventas")
        expect(titleCard).toBeInTheDocument()
        
    })
    
    test ("should render Ventas Pendientes top cards", () => {
        render(<TopCards  />)
        const titleCard = screen.getByText("Ventas pendientes")
        expect(titleCard).toBeInTheDocument()    
    })
    
    test ("should render Números de visitantes top cards", () => {
        render(<TopCards  />)
        const titleCard = screen.getByText("Números de visitantes")
        expect(titleCard).toBeInTheDocument()    
    })
    
    test ("All the paragraph are rendered", () => {
        render(<TopCards  />)
        const paragraphCards = screen.getAllByRole("paragraph")
        expect(paragraphCards.length).toBe(6)    
    })

})

