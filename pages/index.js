import Head from 'next/head'
import Image from 'next/image'
import FeaturedCard from '../components/Featured/FeaturedCard'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-[#181716] h-screen">
       <Navbar/>
       <FeaturedCard/>
    </div>
  )
}
