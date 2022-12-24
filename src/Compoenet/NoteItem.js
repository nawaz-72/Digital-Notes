import noteContext from "../Context/notes/NoteContext"
import React, {useContext} from 'react'

const NoteItem = (props) => {
  const { note,updateNote } = props;
  const context = useContext(noteContext);
  const {deleteNote} = context;
  return (
    <div className = "col-md-3">
      <div className="card my-3 ">
        <div className="card-header">{note.title}</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{note.description}</p>
            <div className="d-flex justify-content-end">
            <i className="fa-solid fa-trash-can mx-1" onClick={()=>{deleteNote(note._id)}}></i>
            <i className="fa-solid fa-square-pen mx-1" onClick={()=>{updateNote(note);
            }}></i>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
