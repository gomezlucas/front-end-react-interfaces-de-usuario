

const  HeaderSales  = ({numberOfSales}) => {
    return(
        <div className='flex justify-between px-4 pt-4'>        
        <p className="text-4xl font-bold"> {numberOfSales} {numberOfSales  === 1 ? "Venta" : "Ventas"}</p>                
      </div>
    )
}

export default HeaderSales