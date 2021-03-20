import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter  } from 'react-router-dom'
import App from './App'
import User from './components/User'
import Contact from './components/Contant'
export default function MyRouter(){
 return(
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/user" component={User} />
      <Route path="/contact" component={Contact} />
    </div>

)
 }