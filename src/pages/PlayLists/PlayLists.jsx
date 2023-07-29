import {AiOutlinePlusCircle} from "react-icons/ai"
import {usePlayListsContextProvider} from "../../reducer/PlayListsContext"
import { useState , createContext, useContext,useReducer } from "react"
import {AddPlayList} from "./Modal"
import { useEffect } from "react"
export  const PlayLists = () =>{
    const { value :{playlist}, dispatch} = usePlayListsContextProvider()
// console.log(value)
const [modal,setModal] = useState(false)
const openModal = () => {
    console.log("clicked")
    setModal(true)
}
const closeModal = () => setModal(false)
useEffect(()=>{
    const playLists  = localStorage.getItem("playlists")
    // console.log("ls",watchList)

        dispatch({type:"SET-PLAYLIST",payload: JSON.parse(playLists)}) 
    
},[])
    return <div> 
    <div className="header" >
  <h3>
PlayLists
  </h3>
  </div>
  <div className = "main-wrapper">
  {playlist?.length>0 &&
    playlist?.map((item)=> <div   className="card">
 
   <div className="image"> <img src = "https://picsum.photos/300/174" />
  
   </div> 
   <div className="video-info-section">

    <div  className="info">
    <h2>{item.title}</h2>
    <small>{item.description}</small>
 </div>
   </div>

    </div>
    )
        }
<div className="add-playlist"  >

<AiOutlinePlusCircle  onClick = {openModal}  size = {30}/>
</div>

  </div>   
  {
    modal &&  <AddPlayList  closeModal = {closeModal}/>
} 
    </div>
}