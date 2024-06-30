"use client"
import Header from "../../components/Header.jsx";
import TopCards from "../../components/TopCards.jsx";
import HeroText from "@/app/components/HeroText.jsx";
import BarChartsNovo from "../../components/BarChartsNovo";
import MapChartNovo from "../../components/MapChartNovo";
import PieChart from "../../components/PieChart";
import LineChart from "../../components/LineChart"
import RecentOrders from "../../components/RecentOrders.jsx";

import { data } from "../../data/dataNovo.js";
import { dataMap } from "../../data/mapaNovo.js";
import { pieData } from "../../data/pieData.js";
import {lineData } from "../../data/lineData.js"
import {Counter} from "../../lib/features/counter/Counter"


export default function Page() {
  console.log(dataMap);

  return (
    <>
      <HeroText />

      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4 w-full 	 ml-auto">
        <TopCards />
        <div className=" md:col-span-2 col-span-3 lg:h-[70vh] h-[50vh]">
          <p className="text-base pl-4 "> Total   Clientes </p>
          <BarChartsNovo data={data} />
        </div>
        <RecentOrders />
      </div>
      <div className="p-4 grid md:grid-cols-4 grid-cols-1 gap-4 w-full 	 ml-auto">
      <div className=" md:col-span-2 lg:h-[70vh] h-[50vh] pt-10">
          <p className="text-base pl-4 "> Productos más vendidos </p>
          <PieChart data={pieData} />
        </div>
        <div className=" md:col-span-2 lg:h-[70vh] h-[50vh] pt-10">
          <p className="text-base pl-4 "> Total ventas campaña actual </p>
          <LineChart data={lineData} />
        </div>
        <div className=" col-span-4  md:col-span-4 lg:h-[50vh] h-[40vh] pt-10">
          <p className="text-base pl-4 "> Productos más vendidos por países</p>
          <MapChartNovo data={dataMap} />
        </div>
      </div>
      <Counter/>
    </>
  );
}
