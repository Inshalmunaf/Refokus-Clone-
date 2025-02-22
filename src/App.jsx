import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'

function App() {
  return (
    <div className='w-full h-full bg-zinc-900 text-white font-satoshi'>
      <Navbar />
      <Work />
      <Stripes /> 
    </div>
  )
}

export default App