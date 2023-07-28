
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const Header = () => {
  return (
    <header className='flex justify-around p-6 bg-white font-gotham'>
        
        <div className='flex items-center justify-center w-1/3'>
            <Image src={"/logo-grande-azul.png"} height={300} width={300} alt='logo'/>
        </div>

        <div className='flex items-center justify-center w-1/3'>
            <ul className='flex items-center gap-10 '>
                <li className='cursor-pointer duration-300 hover:text-gray-500'><Link href={"/"}>Home</Link></li>
                <li className='cursor-pointer duration-300 hover:text-gray-500'><Link href={"/sobre"}>Sobre</Link></li>
                <li className='cursor-pointer duration-300 border border-azulMarca bg-azulMarca px-4 py-2 rounded-xl shadow-xl hover:bg-transparent hover:text-gray-500 '>Entre em contato</li>
            </ul>

        </div>


        <div className='flex items-center justify-center w-1/3'>
            <Image src={"/anatel-logo-11.png"} height={100} width={100} alt='logo'/>
        </div>
        

    </header>
  )
}

export default Header