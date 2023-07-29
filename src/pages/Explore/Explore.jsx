import { videos } from "../../db/videos-db "
import {MdOutlineWatchLater} from "react-icons/md"
import {  Link } from "react-router-dom"
import {useState} from "react"
import {useWatchLaterContextProvider} from "../../reducer/WatchLaterContext"
import "./Explore.css"
export  const Explore = () =>{
    const icon =  'https://picsum.photos/300/174'

    const { value, watchLaterDispatch} = useWatchLaterContextProvider()
    const [input,setinput] = useState("")
    const addToWatchLists = (item) =>watchLaterDispatch({type:"ADD-TO-WATCHLATER",payload:item})
const inputHandler = (e) =>{
    setinput(e.target.value)

}
const videoToBeShown =  input.length>0?
videos.filter((item) => item.title.toLowerCase().includes(input.trim().toLowerCase()))
:
videos
    return <div> 
    <div className="header" >
  <h3>
Explore
  </h3>
  <div className="input">
    <input type = "text" onChange = {inputHandler} />
  </div>
  </div>
  <div className = "main-wrapper">
 

{
    videoToBeShown.length > 0 && 
    videoToBeShown.map((item)=> <div  key = {item._id} className="card">
   <Link to = {`/video/${item._id}`}>
   <div className="image"> <img src = {item.thumbnail} />
   <div className="watch-later-icon" onClick = {()=> addToWatchLists(item)}>
    <MdOutlineWatchLater />
   
    </div>
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
   </Link>
    </div>)
}
  </div>
    </div>
}