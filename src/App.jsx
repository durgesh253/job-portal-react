import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Stats from './componats/Stats';
import RootLayout from './componats/RootLayout';
import AllJobs from './componats/AllJobs';
import AddJob from './componats/AddJob';
import Profile from './componats/Profile';
function App() {
  

  return (
    <>
    <BrowserRouter>
    
    <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>}/>
    <Route path='/stats' element={<RootLayout><Stats/></RootLayout>}/>
    <Route path='/alljobs' element={<RootLayout><AllJobs/> </RootLayout>}/>
    <Route path='/addjobs' element={<RootLayout><AddJob/></RootLayout>}/>
    <Route path='/profile' element={<RootLayout><Profile/></RootLayout>}/>
    </Routes>
   
    </BrowserRouter>

    </>
  )
}

export default App
