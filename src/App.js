import { React, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Homepage from './pages/Home';
import Contact from "./pages/Contact"
import {Database} from './context/index'

export default function App() {

  const [state,setState] = useState([1,2,3,4])
  const [posts,setPosts] = useState([])
  const SaySomething = () =>{
    console.log('This is a function')
  }

  const OnlyString = "Good Morning";

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>{
      setPosts(data) //burda kaydediliyor
    })
  },[])

  return (
    <Database.Provider value={[state,SaySomething,OnlyString,posts]}>
     <BrowserRouter>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/Contact'}>Contact</Link></li>
      </ul>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      </Database.Provider>
  );
}


