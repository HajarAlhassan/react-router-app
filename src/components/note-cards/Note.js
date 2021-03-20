import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
class Note extends Component {
    constructor(props){
        super(props);
        this.titleContent = React.createRef();
        this.bodyContent = React.createRef(); 
        this.state = {
          title: this.props.title, 
          note: this.props.note,
          editMode: false
        }    
    }
    handleEdit(){
        this.setState({
            editMode: true
        });
    }
    handleSave() {
        this.setState({
        title: this.titleContent.current.value,
        note: this.bodyContent.current.value,
        editMode: false
        });
      }
    handleDelete(){
        this.props.deleteHandler(this.props.id);
    }
    render(){
        let titleElement, bodyElement, buttonArea; 
        if (this.state.editMode){
           titleElement = <textarea ref={this.titleContent} className="title-textarea" defaultValue={this.state.title}></textarea>;
           bodyElement = <textarea ref={this.bodyContent} className="body-textarea" defaultValue={this.state.note}></textarea>;
           buttonArea = <div><button className="btn btn-primary" onClick={this.handleSave.bind(this)}>Save</button></div>;
        }else{
            titleElement = <h5 className="card-title">{this.state.title}</h5>;
            bodyElement = <p>{this.state.note}</p>; 
            buttonArea = <div><button className="btn btn-info mx-2" onClick={this.handleEdit.bind(this)}>Edit</button><button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button></div>;
        }
        return (
            <div className='col-sm-6'>
                <div className="card card-view my-3 ">
                    <div className="card-body">
                        {titleElement}
                        {bodyElement}
                        {buttonArea}
                </div>
            </div>
        </div>
        );
        
    }
}

Note.propTypes = {
    title: PropTypes.string
};
export default Note; 