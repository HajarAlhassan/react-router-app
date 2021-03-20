import React, { Component } from 'react'
import { Route,BrowserRouter as Router,  Switch } from 'react-router-dom'
import App from '../components/App'
import User from '../components/User'
import Contact from '../components/Contant'
import Notfound from '../components/Notfound'
import Navbar from '../components/Navbar'
export default class Routes extends Component {
    render() {
        return (
           
<div>
    <Router>
  <Navbar/>
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/user" component={User} />
    <Route path="/contact" component={Contact} />
    <Route component={Notfound} />
  </Switch>
  </Router>
</div>


        )
    }
}








// import React from 'react'
// import Navbar from '../components/Navbar'
// import Board from '../components/note-cards/Board'
// import Game from '../components/tic-tac-toc/Game'
// import MovieApp from '../components/myMovies/MovieApp'


// export default class Routes extends React.Component {
//     render(){
//       return(
//         <Router>
//           <div>
//             <Navbar />
//             <hr />
//             <Route name="Note Cards" exact path="/Note-Cards" component={Board}/>
//             <Route name="Tic-Tac-Toc" path="/Tic-Tac-Toc" component={Game}/>
//             <Route name="My Movies" path="/My-Movies" component={MovieApp} />
//           </div>
//         </Router>
//       );
//     }
//   }











// const routing = (
//     <Router>
               
//       <div>
//         <ul>
//           <li>
//             <Link to="/Note-Cards">Home</Link>
//           </li>
//           <li>
//             <Link to="/Tic-Tac-Toc">Users</Link>
//           </li>
//           <li>
//             <Link to="/My-Movies">Contact</Link>
//           </li>
//         </ul>
//              <Route name="Note Cards" exact path="/Note-Cards" component={Board}/>
//                <Route name="Tic-Tac-Toc" path="/Tic-Tac-Toc" component={Game}/>
//               <Route name="My Movies" path="/My-Movies" component={MovieApp} />
//       </div>
//     </Router>
//   )
//   ReactDOM.render(routing, document.getElementById('root'))