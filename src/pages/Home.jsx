import React from 'react'

import Services from '../_components/Services'
import Experience from '../_components/Experience'
import Whychooseus from '../_components/Whychooseus'
import Testinomials from '../_components/Testinomials'
import Blogs from '../_components/Blogs'
import HeroBanner from '../_components/HeroBanner'
import About from '../_components/About'


export default function Home() {
  return (
    <>
    <HeroBanner/>
    <About/>
      <Services/>
    <Experience/>
    <Whychooseus/>
    <Testinomials/>
    <Blogs/>
    
    </>
  )
}
