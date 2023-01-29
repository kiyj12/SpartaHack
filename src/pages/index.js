import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Nav from '@/components/Nav'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='Home_bg' style={{
      
      }}>
      <Nav/>
      <div 
      style={{
        width: "100vw",
        height: "100vh",
        

        }}>
      
      <h1 className='Main_h1'>
        COLLEGE STATS FAST
      </h1>
      <div className="Main_line">
        <strong>------------------------------------------------------------------------------------------------</strong>
      </div>
      <p className='Main_p'>
        <em>
          Know the facts before you choose your path..
          </em>
      </p>
      </div>
    </div>
  )
}
