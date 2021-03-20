import React from 'react'
import {  Link } from 'react-router-dom'

export default class Navbar extends React.Component {
  render(){
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
      </div>
     ) }}