import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Mein from '../components/Main'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  
  return <div>
    <Head>
      <title>Home</title>
    </Head>
    <Mein />
  </div>
}

export default Home
