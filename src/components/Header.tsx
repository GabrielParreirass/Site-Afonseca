
import React from 'react'
import Image from 'next/image'



const Header = () => {
  return (
    <header className='flex justify-around p-6 bg-white font-gotham'>
        
        <div className='flex items-center justify-center'>
            <Image src={"/logo-mini-azul.png"} height={50} width={50} alt='logo'/>
        </div>

        <div className='flex items-center justify-center '>
            <ul className='flex items-center gap-10 '>
                <li className='cursor-pointer duration-300 hover:text-gray-500'>Home</li>
                <li className='cursor-pointer duration-300 hover:text-gray-500'>Sobre</li>
                <li className='cursor-pointer duration-300 hover:text-gray-500'>ANATEL</li>
                <li className='cursor-pointer duration-300 border border-azulMarca bg-azulMarca px-4 py-2 rounded-xl shadow-xl hover:bg-transparent hover:text-gray-500 '>Entre em contato</li>
            </ul>
            
        </div>
        

    </header>
  )
}

export default Header