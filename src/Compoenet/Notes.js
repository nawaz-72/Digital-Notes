import React, { useContext, useEffect, useRef,useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../Context/notes/NoteContext";
import AddNotes from "./AddNotes";
import Noteitem from "./NoteItem";

const Notes = (props) => {
  const context = useContext(noteContext);
  const navigate = useNavigate();
  const { notes, fetchNote, editNote } = context;
  const[note, setNote] = useState({id: "", etitle: "", edescription: "", etag:""})

  useEffect(() => {
    if(localStorage.getItem('token'))
    {
      fetchNote();
    }
    else{
      navigate('/login')
    }
  }, []);

  //useREF variables 
  const ref = useRef(null);
  const refClose = useRef(null);
  
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag});
    console.log("popup");
  };

  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    //addNote(note.etitle, note.edescription, note.etag);
   }
   const onChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value})
   }
  return (
    <>
      <AddNotes />
      <div className="container my-3">
        <button
        ref={ref}
          type="button"
          className="btn btn-primary d-none"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCentereTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-etitle" id="exampleModalLongeTitle">
                  Edit Note
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <form className="my-3 ">
              <div className="mb-3">
            <label htmlFor="etitle" className="form-label">
              Edit Title
            </label>
            <input
              type="text"
              className="form-control"
              id="etitle"
              name="etitle"
              value={note.etitle}
              aria-describedby="emailHelp"
              onChange={onChange}
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="edescription" className="form-label">
              Edit Description
            </label>
            <input
              type="text"
              className="form-control"
              id="edescription"
              name="edescription"
              value={note.edescription}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="etag" className="form-label">
              Edit Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="etag"
              name="etag"
              value={note.etag}
              onChange={onChange}
            />
          </div>
          </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  ref={refClose}
                >
                  Close
                </button>
                <button disabled={note.edescription.length < 5} onClick={handleClick} type="button" className="btn btn-primary">
                  Update Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <h2>You Notes</h2>
          <div className="container mx">
          {notes.length === 0 && 'there is no notes to display'}
          </div>
          {notes.map((note) => {
            return (
              <Noteitem key={note._id} updateNote={updateNote} note={note} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
