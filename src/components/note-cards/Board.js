import React, {Component} from 'react';
import Note from "../note-cards/Note"


class Board extends Component {
  constructor(props){

    super(props)
  
    this.state={
      notes:[],
      id:0,
       title:"",
        note:"",
   }
  }
  ////Add a note
  //handle the changr
handleTitleInput=(event)=>{
  this.setState({title:event.target.value})
}
handleNoteInput=(event)=>{
  this.setState({note:event.target.value})
}

addNote=()=>{
  if(this.state.title!==""&& this.state.note!=="")
  { let newId=this.state.notes.length+1
   let noteObj={title:this.state.title,note:this.state.note,id:newId}
   this.setState({notes:[...this.state.notes,noteObj],title:"",note:"",id:0})}
}
///Delete note
deleteNote(id){
  let newNoteArr = this.state.notes;
  newNoteArr.map((note, index) => {
    if (id === note.id) {
      newNoteArr.splice(index,1);
    }
  });
  this.setState(
    {
      notes: newNoteArr
    }
  );
}
  render() {
    return (
      <>
      <div className="container">
      <div className="input-group mb-3 mt-3 row col-4 ">
 
   <div className="input-group-prepend">
      <span className="input-group-text bg-warning font-weight-bold" >Note Title</span>
    </div>
    <input value={this.state.title} onChange={this.handleTitleInput} name="title" type="text" className="form-control" placeholder="Title......" aria-label="Username" aria-describedby="basic-addon1"/>
    {/* if the function i a regular function we need to use bind(this) */}
    <button className="btn btn-primary mx-2" onClick={this.addNote.bind(this)}>Add</button>
    {/* <button className="btn btn-primary mx-2" onClick={this.addNote}>Add</button> it is an arrow function we dont need bind(this)*/}
  </div>
               
   <div className="input-group row col-8">

  <div className="input-group-prepend">
    <span className="input-group-text bg-warning text-capitalize font-weight-bold">Note</span>
  </div>
  <textarea value={this.state.note} onChange={this.handleNoteInput} name="note" className="form-control" aria-label="With textarea"></textarea>
   
</div>
</div>
       
        
        <div className="div-board">
         
          <div className="row my-3">
          {
              this.state.notes.map(note => {
                return <Note key={note.id} title={note.title} note={note.note}  id={note.id} deleteHandler={this.deleteNote.bind(this)} />
              })
            }
           
          </div>
        </div>
        
      </>
    );
  }
}

export default Board;