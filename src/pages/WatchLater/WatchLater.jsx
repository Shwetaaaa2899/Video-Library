import {useWatchLaterContextProvider} from "../../reducer/WatchLaterContext"
import {MdOutlineWatchLater} from "react-icons/md"

export  const WatchLater = () =>{
    const { value :{watchList}, watchLaterDispatch} = useWatchLaterContextProvider()
    const icon =  'https://picsum.photos/300/174'
console.log(watchList)
    return <div >
<div className="header" >
  <h3>
Watch Later
  </h3>
  </div>
        
        <div className = "main-wrapper">
        {
            watchList?.length > 0 && 
            watchList.map((item)=> <div  key = {item._id} className="card">
 
   <div className="image"> <img src = {item.thumbnail} />
   <div className="watch-later-icon" >
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

    </div>
    )
        }
        </div>
    </div>
}