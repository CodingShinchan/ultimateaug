import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'

export default function Nav() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/About" element={<About />}/>
        
            
        
        </Routes>
        </BrowserRouter>
  )
}
