import {AiOutlinePlusCircle} from "react-icons/ai"
import {usePlayListsContextProvider} from "../../reducer/PlayListsContext"
import { useState , createContext, useContext,useReducer } from "react"
import {AddPlayList} from "./Modal"
export  const PlayLists = () =>{
    const { value :{playlist}, dispatch} = usePlayListsContextProvider()
// console.log(value)
const [modal,setModal] = useState(false)
const openModal = () => {
    console.log("clicked")
    setModal(true)
}
const closeModal = () => setModal(false)
    return <div> 
    <div className="header" >
  <h3>
PlayLists
  </h3>
  </div>
  <div className = "main-wrapper">
  {playlist.length>0 &&
    playlist.map((item)=> <div  key = {item._id} className="card">
 
   <div className="image"> <img src = "https://picsum.photos/300/174" />
  
   </div> 
   <div className="video-info-section">
<div className="icon-image" >
    <img src = {icon} />
    </div>
    <div  className="info">
    <h4>{item.title}</h4>
    <h4>{item.category}</h4>
    <small>{item.views} Views | {item.creator}</small>
   </div>
   </div>

    </div>
    )
        }
<div className="add-playlist"  >

<AiOutlinePlusCircle  onClick = {openModal}  size = {30}/>
</div>
{
    modal &&  <AddPlayList  closeModal = {closeModal}/>
}
  </div>    
    </div>
}