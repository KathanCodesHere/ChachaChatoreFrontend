import React from 'react'
import Home from './components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Chacha from './components/ChachaChatoreHome'
import Production from './components/ProductionHome'
// import Work from './components/Work'
import Loader from './components/Loader'
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import WorksPage from './pages/Workpage'
import WorkWithChacha from './pages/WorkWithChacha'
import ScrollToTop from './components/ScrollToTop'
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Loader/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/chacha' element={<Chacha/>}></Route>
        <Route path='/production' element={<Production/>}></Route>
        {/* <Route path='/work' element={<Work/>}></Route> */}
        <Route path="/admin" element={<AdminLogin />} ></Route>
        <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/WorkWithChacha" element={<WorkWithChacha />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App