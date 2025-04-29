import { useState } from 'react'
import {Route, Routes,BrowserRouter as Router} from "react-router-dom"


import './App.css'
import Front from './front/front.jsx';
import Navbar from './Navbar/navbar.jsx';
import Video from './video/video.jsx';
import Search from './search/search.jsx';

function App() {
  

  return (
    <div>
      <Navbar/>
    
        <Routes>
          <Route path='/' element={<Front/>}/>
          <Route path='/search/:searchQuery' element= {<Search/>} />
          <Route path='/video/:id' element={<Video/>}/>
        </Routes>

     
    </div>
  )
}

export default App;
