import React from 'react'

export default class  Movie extends React.Component{
constructor(props){
    super(props);
        this.editedTitle = React.createRef();
        this.editedDesc = React.createRef();
        this.editedYear = React.createRef();
        this.editedGenre = React.createRef();
        this.state = {
            title: this.props.title,
            desc: this.props.desc,
            genre: this.props.genre,
            year: this.props.year,
            enableEdit: false,
        }
    }

    handleEdit(){
        this.setState({enableEdit:true})
        
    }

    handleSave(){
        this.setState({
            title: this.editedTitle.current.value, desc: this.editedDesc.current.value,
            genre: this.editedGenre.current.value,
            year: this.editedYear.current.value,
            enableEdit:false,
        })
    }
handleDelete(){
    this.props.deleteHandler(this.props.id);
}
    render(){
        let titleElement,descElement,yearElement,genreElement,buttonArea;
        if (this.state.enableEdit){
         titleElement=<textarea ref={this.editedTitle} className="title-textarea" defaultValue={this.state.title}></textarea>;
        descElement=<textarea ref={this.editedDesc}  className="desc-textarea" defaultValue={this.state.desc}></textarea>;
        yearElement=<textarea ref={this.editedYear}  className="year-textarea" defaultValue={this.state.year}></textarea>;
        genreElement=<textarea ref={this.editedGenre}  className="genre-textarea" defaultValue={this.state.genre}></textarea>;
        buttonArea = <div><button className="btn btn-primary" onClick={this.handleSave.bind(this)}>Save</button></div>;
         }
         else{
             titleElement=<p className="card-title "><h5 className=" text-danger">Title:</h5> <h6>{this.state.title}</h6></p>
            descElement=<p className="card-text"><h5 className=" text-danger">Description:</h5 > <h6>{this.state.desc}</h6></p>
            yearElement=  <p className="card-text"><h5 className=" text-danger">Year:</h5><h6>{ this.state.year}</h6></p>
            genreElement=<p className="card-text"><h5 className=" text-danger">Genre:</h5><h6>{ this.state.genre}</h6></p>
            buttonArea= <div><button className="btn btn-info mx-1" onClick={this.handleEdit.bind(this)}>Edit</button><button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button></div>
              
                 
        } 
         return (
            <div className='col-sm-4'>
            <div className="card card-view ">
            <div className="card-body  my-4 mx-4 shadow">
                 {titleElement}
                 {yearElement}
                 {descElement}
                 {genreElement}
                {buttonArea}
               
       </div>
   </div>
   </div>      
        )
}}
 
 