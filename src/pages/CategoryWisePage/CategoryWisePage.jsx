import { useParams ,Link } from "react-router-dom"
import { categories } from "../../db/categories-db"
import { videos } from "../../db/videos-db "
import {MdOutlineWatchLater} from "react-icons/md"
import {useWatchLaterContextProvider} from "../../reducer/WatchLaterContext"
import "./CategoryWise.css"
export const CategoryWisePage = () =>{
    const {name} = useParams() 
const data = videos.filter((item)=> item.category === name)
   const icon =  'https://picsum.photos/300/174'
   const { value, watchLaterDispatch} = useWatchLaterContextProvider()
// console.log(value)
const addToWatchLists = (item) =>watchLaterDispatch({type:"ADD-TO-WATCHLATER",payload:item})
//  watchLaterDispatch({type:"ADD-TO-WATCHLATER",payload:item})
   return <div> 
    <div className="header" >
  <h3>
{name}
  </h3>
  </div>
  <div className = "main-wrapper">

{
    data.length > 0 && 
    data.map((item)=> <div  key = {item._id} className="card">
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