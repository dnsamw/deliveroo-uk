import React from 'react'
import PrimaryNavbar from '../components/PrimaryNavbar'
import Footer from '../components/Footer'

type Props = {}

function Homepage({}: Props) {
  return (
    <>
    <PrimaryNavbar />
    <div className="home-body h-screen bg-teal-50">

    </div>
    <Footer />
    </>
  )
}

export default Homepage