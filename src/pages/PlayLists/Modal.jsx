import "./Modal.css";
import { useState, useRef, useEffect } from "react";

import { usePlayListsContextProvider } from "../../reducer/PlayListsContext";


import { TbLetterX } from "react-icons/tb";
export const AddPlayList = ({ closeModal  }) => {
    const [data,addData] = useState({title:"",description:""})
    const { value , dispatch} = usePlayListsContextProvider()
const modalHandler = (e) => {
    // console.log("clicked close")
    if (e.target.className === "modal-container") {
        closeModal()
     
    }
  };
  const EditPostEventHandler = (e) => {
    e.preventDefault();

    // (updatedPost._id, postToBePassed);
    console.log(data)
    dispatch({type:"ADD-TO-PLAYLIST",payload:data})
    closeModal();
  }
 
 const eventChangeHandler = (e) =>{
    addData({...data,[e.target.name] : e.target.value})
 }

  return (
    <>
      <div className="modal-wrapper" onClick={modalHandler}></div>

      <div className="modal-container" onClick={modalHandler}>
        <div className="modal">
          <button className="cancel-btn" onClick={closeModal}>
            &times;
          </button>
          <form>
            <h4>Add To PlayList</h4>
            <div className="form-group">
              <input
             type= "text"
              
                placeholder="Enter title of your Playlist"
                name="title"
                onChange={eventChangeHandler}
              />
            </div>
            <div className="form-group">
            <input
             type= "text"
              
                placeholder="Write a description"
                name="description"
                onChange={eventChangeHandler}
              />
            </div>
           
            <button onClick={EditPostEventHandler}>Create New PlayList</button>
          </form>
        </div>
      </div>
    </>
  );
};
