import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Homepage from './pages/Homepage'
import Userpage from './pages/Userpage'
import {GlobalStyle} from './style/GlobalStyle'
import Style from './style/Style'

export default function App(){
  return (
    <ThemeProvider theme={Style}>
      <GlobalStyle/>
      
      <Router>
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/:param' element={<Userpage/>} />
        </Routes>
      </Router>
    
    </ThemeProvider>
  )
}
