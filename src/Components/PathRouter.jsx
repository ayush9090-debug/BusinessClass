import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Deals from './Deals'
import Support from './Support'
import MyTrip from './MyTrip'

export default function PathRouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/deals' element={<Deals />}/>
        <Route path='/support' element={<Support />}/>
        <Route path='/my-trip' element={<MyTrip />}/>
      </Routes>
    </div>
  )
}
