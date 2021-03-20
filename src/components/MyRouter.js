import React, { Component } from 'react'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import MyNavbar from './MyNavbar'
import Board from './note-cards/Board'
import Game from './tic-tac-toc/Game'
import MovieApp from './myMovies/MovieApp'
export default class MyRouter extends Component {
    render() {
        return (
            <Router>
               
           <MyNavbar />
          
                <Switch>
               < Route name="Note-Cards"  path="/Note-Cards" component={Board}/>
                <Route name="Tic-Tac-Toc" path="/Tic-Tac-Toc" component={Game}/>
                <Route name="My-Movies" path="/My-Movies" component={MovieApp} />
               </Switch>
            
            </Router>
        )
    }
}
