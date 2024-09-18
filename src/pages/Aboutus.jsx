import React from 'react'
import Breadcrum from '../_components/Breadcrum'
import About from '../_components/About'
import Whychooseus from '../_components/Whychooseus'
import Experience from '../_components/Experience'
import Testinomials from '../_components/Testinomials'

export default function Aboutus() {
  return (
   <>
   <Breadcrum page="About"/>
   <About/>
   <Whychooseus/>
   <Experience/>
   <Testinomials/>
   </>
  )
}
