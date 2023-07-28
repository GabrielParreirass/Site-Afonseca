"use client";

import Image from "next/image";
import CountUp from "react-countup";
import services from "./services.json";

export default function Home() {
  return (
    <main className="">
      <div>
        <div className="HERO">
          <div className=" pt-10 bg-azulMarca font-gotham ">
            <div className="w-[80%] m-auto">
              <div className="">
                <h1 className="text-6xl text-white font-extrabold">
                  Cuidamos das suas licenças e projetos!
                </h1>
                <div>
                  <ul className="mt-6">
                    <div className="flex flex-col gap-4 p-2">
                      {services.services.map((service) => (
                        <div className="before:content-['✔']  before:mr-2 text-lg text-white">
                          {service.name}
                        </div>
                      ))}
                    </div>
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
