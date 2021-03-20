import React, { Component } from 'react'
import {Link} from 'react-router-dom'


 export default class MyNavbar extends Component {
    render() {
        return (
//  <nav className=" navbar-expand-lg navbar navbar-dark bg-dark">
//   <Link className="navbar-brand" to='/TicTacToc'>Tic-Tac-Toc</Link>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNavDropdown">
//     <ul className="navbar-nav ">
//       <li className="nav-item active">
//         <Link className="nav-link" to='/MyMovies'>My Movies </Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/NoteCards">Note Card Board</Link>
//       </li>
      
//     </ul>
//   </div>
// </nav>
<nav className="navbar-expand-lg navbar navbar-dark bg-dark mb-4">
      <ul className="navbar-nav mb-4 mt-2 mt-lg-4 text-muted " style={{fontSize:"20px"}}>
        <li className="nav-item active px-3 ">
          <Link to="/Note-Cards">Note-Cards</Link>
        </li>
        <li className="nav-item active px-3 ">
          <Link to="/Tic-Tac-Toc">Tic-Tac-Toc</Link>
        </li>
        <li className="nav-item active px-3 ">
          <Link to="/My-Movies">My-Movies</Link>
        </li>
      </ul>
      </nav>
        )
    }
}
