"use client";

import Image from "next/image";
import CountUp from "react-countup";
import services from "./services.json";

export default function Home() {
  return (
    <main className="">
      <div>
        <div className="HERO">
          <div className=" p-20 bg-azulMarca font-gotham ">
            <div className="flex justify-around items-center">
              <div className="w-1/2">
                <h1 className="text-6xl text-white font-extrabold">
                  Cuidamos das suas licenças e projetos!
                </h1>
                <ul className="mt-6">
                  <div className="flex flex-col gap-4 p-2">
                    {services.services.map((service) => (
                      <div className="before:content-['✔'] before:mr-2 text-lg">
                        {service.name}
                      </div>
                    ))}
                  </div>
                </ul>
              </div>
              <div>
                <Image
                  src={"/logo-mini-branca.png"}
                  height={200}
                  width={200}
                  alt="logo"
                ></Image>
              </div>
            </div>
          </div>
        </div>

        <div className="CONTAINER_TRABALHOS">
          <div className="flex flex-col p-24 ">
            <div className="flex items-center justify-center gap-12 p-6 w-1/2 m-auto ">
              <div>
                <Image
                  src={"/anatel-logo-11.png"}
                  height={500}
                  width={500}
                  alt="logo anatel"
                ></Image>
              </div>
              <div>
                <h2 className="text-4xl mb-4">Regulação ANATEL</h2>
                <p className="text-lg mb-4">
                  Evite autuações e multas. Mantenha os sistemas de rádio da sua
                  empresa operando dentro da legalidade, em conformidade com as
                  resoluções e normas atuais.
                </p>
                <button className="duration-300 border border-azulMarca bg-azulMarca px-4 py-2 rounded-xl shadow-xl hover:bg-transparent hover:text-gray-500 ">
                  Fale com a gente!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
