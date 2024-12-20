import React from 'react'
import Navbar from './Components/Navbar'
import Sidbar from './Components/Sidbar'
import { Route, Routes } from 'react-router-dom'
import Add from './Pages/Add'
import List from './Pages/List'
import Orders from './Pages/Orders'


const App = () => {
  return (
    <div>
      <>
        <Navbar />
        <hr />
        <div className='flex w-full'>
          <Sidbar />
          <div className='w-[70%] mx-auto my-8 ml-[max(5vw, 25px)] text-gray-600 text-base'>
            <Routes>
              <Route path='/add' element={<Add />} />
              <Route path='/list' element={<List />} />
              <Route path='/orders' element={<Orders />} />

            </Routes>
          </div>
        </div>
      </>
    </div>
  )
}

export default App