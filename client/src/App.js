import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'

import {Home} from './pages/Home'
import {About} from './pages/About'
import {Books} from './pages/Books'
import {Navbar} from './components'
import {Header} from './containers'

/** You should import BrowserRouter on NavBar? or home? */

function App() {
  return (
    <div className='App'>
      <div className='test-background'>
        <Navbar/>
        <Header/>
      </div>
      <Router>
          <Routes>
            <Route path= "/about" element={<About/>}/>
            <Route path= "/books" element={<Books/>}/>
            <Route path= "/" element={<Home/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App