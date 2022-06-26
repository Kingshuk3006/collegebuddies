import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured/Featured'
import FeaturedCard from '../components/Featured/FeaturedCard'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Joinee from '../components/Joinee'
import Joineecard from '../components/Joineecard'
import Joinus from '../components/Joinus'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  
  return (
    <div className="bg-[#000000] h-full overflow-x-hidden">
       <Navbar />
       {/* <FeaturedCard/> */}
       <Hero/>
       <Featured/>
       <Joinus/>
       <Joinee/>
       <Testimonials/>
       <Footer/>
       {/* {session ? <h1 className='text-white'>BOOM YOU ARE IN</h1> : <h1 className='text-white'>BOOM YOU ARE not IN</h1>} */}
    </div>
  )
}
