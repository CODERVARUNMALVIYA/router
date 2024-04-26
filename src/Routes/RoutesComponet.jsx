import React from 'react'

import { Route , Routes } from 'react-router-dom'

import Entry from '../Components/Entry'
import Home from '../Components/Home'
import Library from '../Components/Library'
import Details from '../Components/Details'

const RoutesComponet = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Create" element={<Entry />}/>
    <Route path="/Show" element={<Library />}>
    <Route path="/Show/:id" element={<Details />}/>
    </Route>
    
  
    
  </Routes>
  )
}

export default RoutesComponet