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
            <div className="text-center mb-20 uppercase tracking-widest text-gray-700 text-lg">
              <p>Bem-vindo à Afonseca Automação & Controle</p>
            </div>
            <div className="flex justify-around items-center">
              <div className="w-1/2">
                <h1 className="text-6xl text-white font-extrabold">
                  Precisando de regulação com a ANATEL?
                </h1>
                <h3 className="text-3xl mt-6 text-gray-700 font-extrabold">
                  Cuidamos das suas licenças e projetos!
                </h3>
                <ul className="mt-6">
                  <li className='before:content-["✔"] before:mr-2 text-xl'>
                    Projetos regularizados
                  </li>
                  <li className='before:content-["✔"] before:mr-2 text-xl'>
                    Atualização de licenças
                  </li>
                  <li className='before:content-["✔"] before:mr-2 text-xl'>
                    Melhor prazo do mercado
                  </li>
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

        <div className="COUNTER ">
          <div className="w-full text-center text-4xl p-12 bg-white ">
            <h2 className="font-extrabold font-gotham">
              Somos referência no que fazemos
            </h2>
          </div>
          <div className="bg-azulMarca flex items-center justify-around p-12 w-[70%] m-auto rounded shadow-2xl text-white font-extrabold">
            <div className="">
              <div className="text-4xl border-b-gray-300 border-b-2 w-fit ">
                <CountUp enableScrollSpy={true} end={500} duration={6} />
              </div>
              <div className="text-xl pt-2">Projetos concluidos</div>
            </div>

            <div>
              <div className="text-4xl border-b-gray-300 border-b-2 w-fit ">
                <CountUp enableScrollSpy={true} end={500} duration={6} />
              </div>
              <div className="text-xl pt-2">Clientes satisfeitos</div>
            </div>

            <div>
              <div className="text-4xl border-b-gray-300 border-b-2 w-fit ">
                30
              </div>
              <div className="text-xl pt-2">Anos de mercado</div>
            </div>
          </div>
        </div>

        <div className="CONTAINER_TRABALHOS">
          <div className="flex flex-col p-24 ">
            <div className="flex items-center justify-center gap-12 p-6 w-1/2 m-auto ">
              <div>
                <Image
                  src={"/anatel-logo-13.png"}
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
                <p>Nosso serviços incluem:</p>
                <div className="flex flex-col gap-4 p-2">
              {services.services.map((service) => (
                <div className="before:content-['➡'] before:mr-2">{service.name}</div>
              ))}
            </div>
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
