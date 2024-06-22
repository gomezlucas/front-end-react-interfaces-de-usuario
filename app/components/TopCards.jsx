import Image from "next/image";

function TopCards() {
  return (
    <>
      <div className="grid md:grid-cols-6 lg:grid-cols-3 grid-cols-1  col-span-3 gap-10 p-4 w-full">
        <div className="lg:col-span-1 md:col-span-3 col-span-1 bg-white flex justify-between w-full  p-4 rounded-lg bg-gradient-to-r from-blue-400 to-blue-500   relative flex-col">
          <div className="flex flex-col pb-4">
            <p className="text-2xl font-bold text-white ">Ventas</p>
          </div>
          <p className="text-6xl  font-bold flex justify-end items-end  rounded-lg text-white mt-[10px]">
            <span>67</span>
          </p>
          <Image
            className="absolute  bottom-0 left-0 "
            src="/assets/car.png"
            alt="Car Image"
            width={85}
            height={65}
          />
        </div>
        <div className="lg:col-span-1 md:col-span-3 col-span-1 bg-white flex justify-between w-full  p-4 rounded-lg bg-gradient-to-r from-pink-400 to-pink-500 relative flex-col">
          <div className="flex flex-col pb-4">
            <p className="text-2xl font-bold text-white ">Ventas pendientes</p>
          </div>
          <p className="text-6xl  font-bold flex justify-end items-end  rounded-lg text-white mt-[10px]">
            <span>09</span>
          </p>
          <Image
            className="absolute  bottom-0 left-0 "
            src="/assets/cart.png"
            alt="Cart Image"
            width={85}
            height={65}
          />
        </div>
        <div className=" lg:col-span-1 md:col-span-6 bg-white flex justify-between w-full  p-4 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 relative flex-col">
          <div className="flex flex-col pb-4">
            <p className="text-2xl font-bold text-white ">
              Números de visitantes
            </p>
          </div>
          <p className="text-6xl  font-bold flex justify-end items-end  rounded-lg text-white mt-[10px]">
            <span>35</span>
          </p>
          <Image
            className="absolute  bottom-0 left-0 "
            src="/assets/bag.png"
            alt="Bag Image"
            width={85}
            height={65}
          />
        </div>
      </div>
    </>
  );
}

export default TopCards;
