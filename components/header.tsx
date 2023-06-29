'use client'
import './styles.css'
import Image from 'next/image'
import logo from '../public/Aero buddy.webp'

import Navbar from './Navbar'
import HeaderShadow from './HeaderShadow'

import { SessionProvider } from "next-auth/react"

export default function Header({session} : {session:any}){
    return (
        <header className="Header">
            <div className='Container HeaderContainer' style={{display:'flex', flexWrap:'wrap', alignItems: 'center'}}>
                <div className="Navbar-logo">
                    <a href="/">
                        <Image
                            src={logo}
                            alt="Brand"
                            fill
                            priority = {true}
                            placeholder="blur"
                        />
                    </a>

                </div>
                <SessionProvider session={session}>
                    <Navbar></Navbar>
                </SessionProvider>
                
                
            </div>
                <HeaderShadow></HeaderShadow>
        </header>
    )
}