import React from 'react'
import Header from "../components/Header"
import Brands from "../components/Brands"
import Discount from "../components/Discount"
import Special from "../components/Special"
import LimitedTimeDeals from '../components/LimitedTimeDeals'

function Home() {
  return (
    <>
    <Header />
    <Brands />
    <Discount />
    <Special />
    <LimitedTimeDeals/>
    </>
  )
}

export default Home

