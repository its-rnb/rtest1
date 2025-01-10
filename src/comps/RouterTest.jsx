import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import About from './About'
import Contact from './Contact'

function RouterTest(){
    return(
        <Router>
            <div>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
        </Router>
    )
}

const Home= ()=> {
    return (
        <div>
            <h1>This is home page.</h1>
            <div style={{display: 'block'}}>
                <Link to='about'>About page</Link>
            </div>
            <Link to='contact'>Contact page</Link>
        </div>
    )
}

export default RouterTest