import React from 'react'
import About from './_components/About'
import Services from './_components/Services'
import Experience from './_components/Experience'
import Whychooseus from './_components/Whychooseus'
import Testinomials from './_components/Testinomials'
import Blogs from './_components/Blogs'
import HeroBanner from './_components/HeroBanner'
import Footer from './_components/Footer'



export default function App() {
  return (
    <>
    <HeroBanner/>
    <About/>
    <Blogs/>
    <Testinomials/>
      <Services/>
    <Experience/>
    <Whychooseus/>
    <Footer/>
    </>
  )
}
