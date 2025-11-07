import React from 'react'
import Home from './components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Chacha from './components/ChachaChatoreHome'
import Production from './components/ProductionHome'
// import Work from './components/Work'
import Loader from './components/Loader'
const App = () => {
  return (
    <BrowserRouter>
    <Loader/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/chacha' element={<Chacha/>}></Route>
        <Route path='/production' element={<Production/>}></Route>
        {/* <Route path='/work' element={<Work/>}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App