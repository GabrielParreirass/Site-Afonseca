import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='font-gotham'>
        <div className='flex items-center justify-around bg-azulMarca p-12'>
            <div>
                <h3 className='text-2xl text-white font-bold'>Alguma dúvida?</h3>
                <p className='text-lg mb-2 mt-2'>bernardo@afonseca.net.br</p>
                <p className='before:content-[url("/Whatsapp.svg")] before:mr-1 flex items-center text-lg'> (31) 99941-3180</p>
            </div>

            <div>
                <h3 className='text-2xl text-white font-bold'>Nosso Endereço</h3>
                <p className='text-lg mb-2 mt-2'>Rua Nicarágua, 90 / 101 - Sion</p>
                <p className='text-lg '>Belo Horizonte, MG 30.320-050</p>
            </div>
        </div>
        <div className='w-full flex items-center justify-center bg-azulMarca'>
            <Image src={"/logo-grande-branca.png"} width={300} height={300} alt='logo'></Image>
        </div>
    </div>
  )
}

export default Footer