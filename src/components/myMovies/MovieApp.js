import React, { Component } from 'react'
import Movie from '../myMovies/Movie'


export default class MovieApp extends Component {
    constructor(props){
        super(props);
        this.state={
            movies:movieList,
            title:"",
            description:"",
            year:"",
            genre:"" ,
        }
    }
   
    deleteMovie(id){
  let newArr=this.state.movies;
  newArr.map((movie,index)=>{
    if(id==movie.id)
           newArr.splice(index,1)
  })
  this.setState({movies:newArr})
  
    }
    render() {
        return (

           <div className="row">
               { this.state.movies.map((item,index)=>{
                  
                   return <Movie key={item.id} id={item.id} title={item.title} desc={item.description} year={item.year} genre={item.genre} deleteHandler={this.deleteMovie.bind(this)} /> 
               })}
           
           </div>
        )
    }
}
const movieList=[{
    title: "Game Night",
    year: "2015",
    description: "A group of friends who meet regularly for game nights find themselves trying to solve a murder mystery.",
    genre:"Crime",
    id:1,
 },
   { title: "Star Wars",
    year: "1980",
    description : "The Empire Strikes Back",
    genre:"adventure",
    id:2,
 },
 { title: "Area X: Annihilation",
    year: "2018",
    description : "A biologist's husband disappears. She puts her name forward for an expedition into an environmental disaster zone",
    genre:"Fantasy",
    id:3,
 },
 { title: "Hannah",
    year: "2017",
    description : "Intimate portrait of a woman drifting between reality and denial when she is left alone to grapple with the consequences of her husband's imprisonment.",
    genre:"Drama",
    id:4,
 }
    
];